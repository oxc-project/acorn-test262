__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    555
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          9,
          17
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ABC",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "range": [
        0,
        17
      ],
      "loc": {
        "end": {
          "column": 17,
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
        "name": "Gen",
        "optional": false,
        "range": [
          24,
          27
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    47,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
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
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  },
                  "range": [
                    48,
                    51
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        50,
                        51
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 31,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      50,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 31,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  47,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              45,
              54
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          {
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
                      "name": "v",
                      "optional": false,
                      "range": [
                        67,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
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
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 5,
                          "line": 5
                        }
                      },
                      "range": [
                        68,
                        75
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ABC",
                            "optional": false,
                            "range": [
                              70,
                              73
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 5
                              },
                              "start": {
                                "column": 7,
                                "line": 5
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              74,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 5
                              },
                              "start": {
                                "column": 11,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            70,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 5
                            },
                            "start": {
                              "column": 7,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          70,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 5
                          },
                          "start": {
                            "column": 7,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      67,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        81,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 6
                        },
                        "start": {
                          "column": 4,
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
                          "column": 13,
                          "line": 6
                        },
                        "start": {
                          "column": 5,
                          "line": 6
                        }
                      },
                      "range": [
                        82,
                        90
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          84,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 6
                          },
                          "start": {
                            "column": 7,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      81,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  61,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 7
                  },
                  "start": {
                    "column": 2,
                    "line": 4
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
                      "name": "v",
                      "optional": false,
                      "range": [
                        104,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 8
                        },
                        "start": {
                          "column": 4,
                          "line": 8
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
                          "column": 12,
                          "line": 8
                        },
                        "start": {
                          "column": 5,
                          "line": 8
                        }
                      },
                      "range": [
                        105,
                        112
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ABC",
                            "optional": false,
                            "range": [
                              107,
                              110
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 8
                              },
                              "start": {
                                "column": 7,
                                "line": 8
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
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
                            107,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 8
                            },
                            "start": {
                              "column": 7,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          107,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 8
                          },
                          "start": {
                            "column": 7,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      104,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 4,
                        "line": 8
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
                        118,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 9
                        },
                        "start": {
                          "column": 4,
                          "line": 9
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
                          "line": 9
                        },
                        "start": {
                          "column": 5,
                          "line": 9
                        }
                      },
                      "range": [
                        119,
                        127
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          121,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 7,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      118,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 9
                      },
                      "start": {
                        "column": 4,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  98,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 10
                  },
                  "start": {
                    "column": 6,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              61,
              132
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          45,
          134
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 26,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 3
          }
        },
        "range": [
          27,
          42
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
                "name": "ABC",
                "optional": false,
                "range": [
                  38,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                38,
                41
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
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
                28,
                29
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              28,
              41
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        19,
        134
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gen2",
        "optional": false,
        "range": [
          220,
          224
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                268,
                271
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
                      269,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 25,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    269,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 25,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Gen",
              "optional": false,
              "range": [
                265,
                268
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 21,
                  "line": 20
                }
              }
            },
            "range": [
              265,
              271
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            }
          },
          "range": [
            259,
            271
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 20
            },
            "start": {
              "column": 15,
              "line": 20
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Property",
          "optional": false,
          "range": [
            247,
            255
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 20
            },
            "start": {
              "column": 3,
              "line": 20
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            274,
            280
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 20
            },
            "start": {
              "column": 30,
              "line": 20
            }
          }
        },
        "range": [
          242,
          283
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 27,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        },
        "range": [
          224,
          239
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
                "name": "ABC",
                "optional": false,
                "range": [
                  235,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
                  }
                }
              },
              "range": [
                235,
                238
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 19
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
                225,
                226
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
            "out": false,
            "range": [
              225,
              238
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 19
              },
              "start": {
                "column": 10,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        215,
        284
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "gen2TypeA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 24
                },
                "start": {
                  "column": 15,
                  "line": 24
                }
              },
              "range": [
                341,
                354
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    347,
                    354
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "range": [
                            348,
                            351
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 24
                            },
                            "start": {
                              "column": 22,
                              "line": 24
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            352,
                            353
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 24
                            },
                            "start": {
                              "column": 26,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          348,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 24
                          },
                          "start": {
                            "column": 22,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        348,
                        353
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 22,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 21,
                      "line": 24
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "range": [
                    343,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 24
                    },
                    "start": {
                      "column": 17,
                      "line": 24
                    }
                  }
                },
                "range": [
                  343,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 24
                  },
                  "start": {
                    "column": 17,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              332,
              354
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    359,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 33,
                      "line": 24
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"I am A\"",
                  "value": "I am A",
                  "range": [
                    363,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 24
                    },
                    "start": {
                      "column": 37,
                      "line": 24
                    }
                  }
                },
                "range": [
                  359,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 24
                  },
                  "start": {
                    "column": 33,
                    "line": 24
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    373,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 24
                    },
                    "start": {
                      "column": 47,
                      "line": 24
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    376,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 24
                    },
                    "start": {
                      "column": 50,
                      "line": 24
                    }
                  }
                },
                "range": [
                  373,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 24
                  },
                  "start": {
                    "column": 47,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              357,
              380
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 24
              },
              "start": {
                "column": 31,
                "line": 24
              }
            }
          },
          "range": [
            332,
            380
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        326,
        381
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 24
        },
        "start": {
          "column": 0,
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
            "name": "gen2TypeB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              },
              "range": [
                397,
                410
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    403,
                    410
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "range": [
                            404,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 25
                            },
                            "start": {
                              "column": 22,
                              "line": 25
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            408,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 25
                            },
                            "start": {
                              "column": 26,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          404,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 25
                          },
                          "start": {
                            "column": 22,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        404,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 25
                        },
                        "start": {
                          "column": 22,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 25
                    },
                    "start": {
                      "column": 21,
                      "line": 25
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "range": [
                    399,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 17,
                      "line": 25
                    }
                  }
                },
                "range": [
                  399,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 25
                  },
                  "start": {
                    "column": 17,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              388,
              410
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 25
              },
              "start": {
                "column": 6,
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    415,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 25
                    },
                    "start": {
                      "column": 33,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"I am B\"",
                  "value": "I am B",
                  "range": [
                    419,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 25
                    },
                    "start": {
                      "column": 37,
                      "line": 25
                    }
                  }
                },
                "range": [
                  415,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 25
                  },
                  "start": {
                    "column": 33,
                    "line": 25
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    429,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 25
                    },
                    "start": {
                      "column": 47,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    432,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 25
                    },
                    "start": {
                      "column": 50,
                      "line": 25
                    }
                  }
                },
                "range": [
                  429,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 25
                  },
                  "start": {
                    "column": 47,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              413,
              436
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 25
              },
              "start": {
                "column": 31,
                "line": 25
              }
            }
          },
          "range": [
            388,
            436
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        382,
        437
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "range": [
          455,
          456
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              469,
              476
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ABC",
                    "optional": false,
                    "range": [
                      470,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 28
                      },
                      "start": {
                        "column": 20,
                        "line": 28
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      474,
                      475
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 24,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    470,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 28
                    },
                    "start": {
                      "column": 20,
                      "line": 28
                    }
                  }
                },
                "range": [
                  470,
                  475
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 20,
                    "line": 28
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Gen2",
            "optional": false,
            "range": [
              465,
              469
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 28
              },
              "start": {
                "column": 15,
                "line": 28
              }
            }
          },
          "range": [
            465,
            476
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 28
            },
            "start": {
              "column": 15,
              "line": 28
            }
          }
        },
        "range": [
          459,
          476
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
          }
        }
      },
      "range": [
        450,
        477
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              },
              "range": [
                498,
                511
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    504,
                    511
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "range": [
                            505,
                            508
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 31
                            },
                            "start": {
                              "column": 20,
                              "line": 31
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            509,
                            510
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 31
                            },
                            "start": {
                              "column": 24,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          505,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 31
                          },
                          "start": {
                            "column": 20,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        505,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 31
                        },
                        "start": {
                          "column": 20,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 31
                    },
                    "start": {
                      "column": 19,
                      "line": 31
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "range": [
                    500,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 31
                    },
                    "start": {
                      "column": 15,
                      "line": 31
                    }
                  }
                },
                "range": [
                  500,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
              497,
              511
            ],
            "loc": {
              "end": {
                "column": 26,
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
            497,
            511
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 31
            },
            "start": {
              "column": 12,
              "line": 31
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        485,
        512
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 31
        },
        "start": {
          "column": 0,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              },
              "range": [
                526,
                539
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    532,
                    539
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "range": [
                            533,
                            536
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 32
                            },
                            "start": {
                              "column": 20,
                              "line": 32
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            537,
                            538
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 32
                            },
                            "start": {
                              "column": 24,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          533,
                          538
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 32
                          },
                          "start": {
                            "column": 20,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        533,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 32
                        },
                        "start": {
                          "column": 20,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 32
                    },
                    "start": {
                      "column": 19,
                      "line": 32
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "range": [
                    528,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 32
                    },
                    "start": {
                      "column": 15,
                      "line": 32
                    }
                  }
                },
                "range": [
                  528,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 32
                  },
                  "start": {
                    "column": 15,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              525,
              539
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 32
              },
              "start": {
                "column": 12,
                "line": 32
              }
            }
          },
          "init": null,
          "range": [
            525,
            539
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 32
            },
            "start": {
              "column": 12,
              "line": 32
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        513,
        540
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 32
        },
        "start": {
          "column": 0,
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
          "name": "a",
          "optional": false,
          "range": [
            541,
            542
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            545,
            546
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        },
        "range": [
          541,
          546
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        541,
        547
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            548,
            549
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            552,
            553
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        "range": [
          548,
          553
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        548,
        554
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
