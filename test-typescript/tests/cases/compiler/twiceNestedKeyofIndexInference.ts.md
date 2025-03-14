__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    826
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Set1",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              35,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            }
          },
          "range": [
            35,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 35,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "range": [
              45,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          },
          "range": [
            45,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 1
            },
            "start": {
              "column": 45,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  61,
                  86
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
                        62,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 1
                        },
                        "start": {
                          "column": 62,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      62,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 1
                      },
                      "start": {
                        "column": 62,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        72,
                        85
                      ],
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                79,
                                80
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 1
                                },
                                "start": {
                                  "column": 79,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              79,
                              80
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 1
                              },
                              "start": {
                                "column": 79,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            73,
                            80
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 1
                            },
                            "start": {
                              "column": 73,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "range": [
                              82,
                              84
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 1
                              },
                              "start": {
                                "column": 82,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            82,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 84,
                              "line": 1
                            },
                            "start": {
                              "column": 82,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 1
                        },
                        "start": {
                          "column": 72,
                          "line": 1
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "range": [
                        65,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 1
                        },
                        "start": {
                          "column": 65,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      65,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 1
                      },
                      "start": {
                        "column": 65,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 1
                  },
                  "start": {
                    "column": 61,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  57,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 1
                  },
                  "start": {
                    "column": 57,
                    "line": 1
                  }
                }
              },
              "range": [
                57,
                86
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 1
                },
                "start": {
                  "column": 57,
                  "line": 1
                }
              }
            },
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K1",
                  "optional": false,
                  "range": [
                    136,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 3
                    },
                    "start": {
                      "column": 2,
                      "line": 3
                    }
                  }
                },
                "range": [
                  136,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
                  }
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      103,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    103,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SK1",
                  "optional": false,
                  "range": [
                    96,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 2
                    },
                    "start": {
                      "column": 5,
                      "line": 2
                    }
                  }
                },
                "nameType": null,
                "optional": "-",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      118,
                      132
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            123,
                            131
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
                                  124,
                                  125
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                124,
                                125
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 2
                                },
                                "start": {
                                  "column": 33,
                                  "line": 2
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SK1",
                                "optional": false,
                                "range": [
                                  127,
                                  130
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
                              },
                              "range": [
                                127,
                                130
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
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 2
                            },
                            "start": {
                              "column": 32,
                              "line": 2
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Pick",
                          "optional": false,
                          "range": [
                            119,
                            123
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 2
                            },
                            "start": {
                              "column": 28,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          119,
                          131
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 2
                      },
                      "start": {
                        "column": 27,
                        "line": 2
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "range": [
                      110,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    110,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 19,
                      "line": 2
                    }
                  }
                },
                "range": [
                  89,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 89,
                    "line": 1
                  }
                }
              },
              "range": [
                89,
                139
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 89,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            57,
            139
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 3
            },
            "start": {
              "column": 57,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              53,
              54
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 1
              },
              "start": {
                "column": 53,
                "line": 1
              }
            }
          },
          "range": [
            53,
            54
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 1
            },
            "start": {
              "column": 53,
              "line": 1
            }
          }
        },
        "range": [
          35,
          139
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 3
          },
          "start": {
            "column": 35,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          32
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              10,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    30,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 1
                    },
                    "start": {
                      "column": 30,
                      "line": 1
                    }
                  }
                },
                "range": [
                  30,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 30,
                    "line": 1
                  }
                }
              },
              "range": [
                24,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                13,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        140
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 3
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
        "name": "Set2",
        "optional": false,
        "range": [
          147,
          151
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              201,
              202
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 5
              },
              "start": {
                "column": 59,
                "line": 5
              }
            }
          },
          "range": [
            201,
            202
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 5
            },
            "start": {
              "column": 59,
              "line": 5
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "range": [
              211,
              214
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 5
              },
              "start": {
                "column": 69,
                "line": 5
              }
            }
          },
          "range": [
            211,
            216
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 5
            },
            "start": {
              "column": 69,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  227,
                  252
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
                        228,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 5
                        },
                        "start": {
                          "column": 86,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 5
                      },
                      "start": {
                        "column": 86,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        238,
                        251
                      ],
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                245,
                                246
                              ],
                              "loc": {
                                "end": {
                                  "column": 104,
                                  "line": 5
                                },
                                "start": {
                                  "column": 103,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              245,
                              246
                            ],
                            "loc": {
                              "end": {
                                "column": 104,
                                "line": 5
                              },
                              "start": {
                                "column": 103,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            239,
                            246
                          ],
                          "loc": {
                            "end": {
                              "column": 104,
                              "line": 5
                            },
                            "start": {
                              "column": 97,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "range": [
                              248,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 108,
                                "line": 5
                              },
                              "start": {
                                "column": 106,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            248,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 108,
                              "line": 5
                            },
                            "start": {
                              "column": 106,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 5
                        },
                        "start": {
                          "column": 96,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "range": [
                        231,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 5
                        },
                        "start": {
                          "column": 89,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      231,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 5
                      },
                      "start": {
                        "column": 89,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 5
                  },
                  "start": {
                    "column": 85,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  223,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 5
                  },
                  "start": {
                    "column": 81,
                    "line": 5
                  }
                }
              },
              "range": [
                223,
                252
              ],
              "loc": {
                "end": {
                  "column": 110,
                  "line": 5
                },
                "start": {
                  "column": 81,
                  "line": 5
                }
              }
            },
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K1",
                  "optional": false,
                  "range": [
                    335,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 9
                    },
                    "start": {
                      "column": 2,
                      "line": 9
                    }
                  }
                },
                "range": [
                  335,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
                  }
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      269,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 12,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    269,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SK1",
                  "optional": false,
                  "range": [
                    262,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "nameType": null,
                "optional": "-",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      284,
                      331
                    ],
                    "params": [
                      {
                        "type": "TSMappedType",
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "range": [
                              303,
                              305
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            303,
                            305
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            296,
                            299
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 7
                            },
                            "start": {
                              "column": 9,
                              "line": 7
                            }
                          }
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              312,
                              323
                            ],
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K1",
                                    "optional": false,
                                    "range": [
                                      315,
                                      317
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    315,
                                    317
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 7
                                    }
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      313,
                                      314
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    313,
                                    314
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  313,
                                  318
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 7
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K2",
                                  "optional": false,
                                  "range": [
                                    320,
                                    322
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  320,
                                  322
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 7
                              },
                              "start": {
                                "column": 25,
                                "line": 7
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Set1",
                            "optional": false,
                            "range": [
                              308,
                              312
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 7
                              },
                              "start": {
                                "column": 21,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            308,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          285,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 8
                          },
                          "start": {
                            "column": 28,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 8
                      },
                      "start": {
                        "column": 27,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "range": [
                      276,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    276,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 6
                    }
                  }
                },
                "range": [
                  255,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 9
                  },
                  "start": {
                    "column": 113,
                    "line": 5
                  }
                }
              },
              "range": [
                255,
                338
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 113,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            223,
            338
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 81,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              219,
              220
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 5
              },
              "start": {
                "column": 77,
                "line": 5
              }
            }
          },
          "range": [
            219,
            220
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 5
            },
            "start": {
              "column": 77,
              "line": 5
            }
          }
        },
        "range": [
          201,
          338
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 9
          },
          "start": {
            "column": 59,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          151,
          198
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    172,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 30,
                      "line": 5
                    }
                  }
                },
                "range": [
                  172,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 30,
                    "line": 5
                  }
                }
              },
              "range": [
                166,
                173
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                155,
                157
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              155,
              173
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      194,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 5
                      },
                      "start": {
                        "column": 52,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    194,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 5
                    },
                    "start": {
                      "column": 52,
                      "line": 5
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      192,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 5
                      },
                      "start": {
                        "column": 50,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    192,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 5
                    },
                    "start": {
                      "column": 50,
                      "line": 5
                    }
                  }
                },
                "range": [
                  192,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
                    "line": 5
                  }
                }
              },
              "range": [
                186,
                197
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 5
                },
                "start": {
                  "column": 44,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "range": [
                175,
                177
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 33,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              175,
              197
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 5
              },
              "start": {
                "column": 33,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        142,
        339
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "range": [
          358,
          361
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 11
              },
              "start": {
                "column": 50,
                "line": 11
              }
            },
            "range": [
              391,
              394
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  393,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 11
                  },
                  "start": {
                    "column": 52,
                    "line": 11
                  }
                }
              },
              "range": [
                393,
                394
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 11
                },
                "start": {
                  "column": 52,
                  "line": 11
                }
              }
            }
          },
          "range": [
            385,
            394
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 11
            },
            "start": {
              "column": 44,
              "line": 11
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 11
              },
              "start": {
                "column": 59,
                "line": 11
              }
            },
            "range": [
              400,
              406
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      403,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 11
                      },
                      "start": {
                        "column": 62,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    403,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 11
                    },
                    "start": {
                      "column": 62,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                402,
                406
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 11
                },
                "start": {
                  "column": 61,
                  "line": 11
                }
              }
            }
          },
          "range": [
            396,
            406
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 11
            },
            "start": {
              "column": 55,
              "line": 11
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 79,
                "line": 11
              },
              "start": {
                "column": 72,
                "line": 11
              }
            },
            "range": [
              413,
              420
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K1",
                  "optional": false,
                  "range": [
                    417,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 11
                    },
                    "start": {
                      "column": 76,
                      "line": 11
                    }
                  }
                },
                "range": [
                  417,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 11
                  },
                  "start": {
                    "column": 76,
                    "line": 11
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    415,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 11
                    },
                    "start": {
                      "column": 74,
                      "line": 11
                    }
                  }
                },
                "range": [
                  415,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 11
                  },
                  "start": {
                    "column": 74,
                    "line": 11
                  }
                }
              },
              "range": [
                415,
                420
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 11
                },
                "start": {
                  "column": 74,
                  "line": 11
                }
              }
            }
          },
          "range": [
            408,
            420
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 11
            },
            "start": {
              "column": 67,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 93,
            "line": 11
          },
          "start": {
            "column": 80,
            "line": 11
          }
        },
        "range": [
          421,
          434
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              427,
              434
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
                    428,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 11
                    },
                    "start": {
                      "column": 87,
                      "line": 11
                    }
                  }
                },
                "range": [
                  428,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 11
                  },
                  "start": {
                    "column": 87,
                    "line": 11
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K1",
                  "optional": false,
                  "range": [
                    431,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 11
                    },
                    "start": {
                      "column": 90,
                      "line": 11
                    }
                  }
                },
                "range": [
                  431,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 11
                  },
                  "start": {
                    "column": 90,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 11
              },
              "start": {
                "column": 86,
                "line": 11
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Set1",
            "optional": false,
            "range": [
              423,
              427
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 11
              },
              "start": {
                "column": 82,
                "line": 11
              }
            }
          },
          "range": [
            423,
            434
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 11
            },
            "start": {
              "column": 82,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 11
          },
          "start": {
            "column": 20,
            "line": 11
          }
        },
        "range": [
          361,
          384
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                362,
                363
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              362,
              363
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    382,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 11
                    },
                    "start": {
                      "column": 41,
                      "line": 11
                    }
                  }
                },
                "range": [
                  382,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 11
                  },
                  "start": {
                    "column": 41,
                    "line": 11
                  }
                }
              },
              "range": [
                376,
                383
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 35,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                365,
                367
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              365,
              383
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        341,
        435
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "range": [
          454,
          457
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 13
              },
              "start": {
                "column": 74,
                "line": 13
              }
            },
            "range": [
              511,
              514
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  513,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 13
                  },
                  "start": {
                    "column": 76,
                    "line": 13
                  }
                }
              },
              "range": [
                513,
                514
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 13
                },
                "start": {
                  "column": 76,
                  "line": 13
                }
              }
            }
          },
          "range": [
            505,
            514
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 13
            },
            "start": {
              "column": 68,
              "line": 13
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 93,
                "line": 13
              },
              "start": {
                "column": 83,
                "line": 13
              }
            },
            "range": [
              520,
              530
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      523,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 13
                      },
                      "start": {
                        "column": 86,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    523,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 13
                    },
                    "start": {
                      "column": 86,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "range": [
                      527,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 13
                      },
                      "start": {
                        "column": 90,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    527,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 13
                    },
                    "start": {
                      "column": 90,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                522,
                530
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 13
                },
                "start": {
                  "column": 85,
                  "line": 13
                }
              }
            }
          },
          "range": [
            516,
            530
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 13
            },
            "start": {
              "column": 79,
              "line": 13
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 111,
                "line": 13
              },
              "start": {
                "column": 100,
                "line": 13
              }
            },
            "range": [
              537,
              548
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K2",
                  "optional": false,
                  "range": [
                    545,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 110,
                      "line": 13
                    },
                    "start": {
                      "column": 108,
                      "line": 13
                    }
                  }
                },
                "range": [
                  545,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 13
                  },
                  "start": {
                    "column": 108,
                    "line": 13
                  }
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      541,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 13
                      },
                      "start": {
                        "column": 104,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    541,
                    543
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 13
                    },
                    "start": {
                      "column": 104,
                      "line": 13
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      539,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 13
                      },
                      "start": {
                        "column": 102,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    539,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 13
                    },
                    "start": {
                      "column": 102,
                      "line": 13
                    }
                  }
                },
                "range": [
                  539,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 13
                  },
                  "start": {
                    "column": 102,
                    "line": 13
                  }
                }
              },
              "range": [
                539,
                548
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 13
                },
                "start": {
                  "column": 102,
                  "line": 13
                }
              }
            }
          },
          "range": [
            532,
            548
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 13
            },
            "start": {
              "column": 95,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 129,
            "line": 13
          },
          "start": {
            "column": 112,
            "line": 13
          }
        },
        "range": [
          549,
          566
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              555,
              566
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
                    556,
                    557
                  ],
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 13
                    },
                    "start": {
                      "column": 119,
                      "line": 13
                    }
                  }
                },
                "range": [
                  556,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 120,
                    "line": 13
                  },
                  "start": {
                    "column": 119,
                    "line": 13
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K1",
                  "optional": false,
                  "range": [
                    559,
                    561
                  ],
                  "loc": {
                    "end": {
                      "column": 124,
                      "line": 13
                    },
                    "start": {
                      "column": 122,
                      "line": 13
                    }
                  }
                },
                "range": [
                  559,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 124,
                    "line": 13
                  },
                  "start": {
                    "column": 122,
                    "line": 13
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K2",
                  "optional": false,
                  "range": [
                    563,
                    565
                  ],
                  "loc": {
                    "end": {
                      "column": 128,
                      "line": 13
                    },
                    "start": {
                      "column": 126,
                      "line": 13
                    }
                  }
                },
                "range": [
                  563,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 128,
                    "line": 13
                  },
                  "start": {
                    "column": 126,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 129,
                "line": 13
              },
              "start": {
                "column": 118,
                "line": 13
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Set2",
            "optional": false,
            "range": [
              551,
              555
            ],
            "loc": {
              "end": {
                "column": 118,
                "line": 13
              },
              "start": {
                "column": 114,
                "line": 13
              }
            }
          },
          "range": [
            551,
            566
          ],
          "loc": {
            "end": {
              "column": 129,
              "line": 13
            },
            "start": {
              "column": 114,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 67,
            "line": 13
          },
          "start": {
            "column": 20,
            "line": 13
          }
        },
        "range": [
          457,
          504
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                458,
                459
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              458,
              459
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 21,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    478,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 13
                    },
                    "start": {
                      "column": 41,
                      "line": 13
                    }
                  }
                },
                "range": [
                  478,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 13
                  },
                  "start": {
                    "column": 41,
                    "line": 13
                  }
                }
              },
              "range": [
                472,
                479
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 35,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                461,
                463
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              461,
              479
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 13
              },
              "start": {
                "column": 24,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      500,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 13
                      },
                      "start": {
                        "column": 63,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    500,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 13
                    },
                    "start": {
                      "column": 63,
                      "line": 13
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      498,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 13
                      },
                      "start": {
                        "column": 61,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    498,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 13
                    },
                    "start": {
                      "column": 61,
                      "line": 13
                    }
                  }
                },
                "range": [
                  498,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 13
                  },
                  "start": {
                    "column": 61,
                    "line": 13
                  }
                }
              },
              "range": [
                492,
                503
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 13
                },
                "start": {
                  "column": 55,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "range": [
                481,
                483
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 13
                },
                "start": {
                  "column": 44,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              481,
              503
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 13
              },
              "start": {
                "column": 44,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        437,
        567
      ],
      "loc": {
        "end": {
          "column": 130,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          586,
          659
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
                592,
                593
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 4,
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
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                593,
                640
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        605,
                        606
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
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
                          "column": 17,
                          "line": 18
                        },
                        "start": {
                          "column": 9,
                          "line": 18
                        }
                      },
                      "range": [
                        606,
                        614
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          608,
                          614
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 11,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      605,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        624,
                        625
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
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
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
                        }
                      },
                      "range": [
                        625,
                        633
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          627,
                          633
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
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
                      624,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  595,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              592,
              641
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                646,
                647
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
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
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                647,
                656
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  649,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              646,
              657
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 16,
            "line": 16
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "range": [
          580,
          585
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "range": [
        570,
        659
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              },
              "range": [
                672,
                679
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "range": [
                    674,
                    679
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
                  674,
                  679
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
              }
            },
            "range": [
              667,
              679
            ],
            "loc": {
              "end": {
                "column": 18,
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    688,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          701,
                          702
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
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
                          704,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 26
                          },
                          "start": {
                            "column": 11,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        701,
                        706
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
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
                        "name": "c",
                        "optional": false,
                        "range": [
                          716,
                          717
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          719,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 27
                          },
                          "start": {
                            "column": 11,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        716,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    691,
                    727
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  }
                },
                "range": [
                  688,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
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
                  "name": "d",
                  "optional": false,
                  "range": [
                    733,
                    734
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    736,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 29
                    },
                    "start": {
                      "column": 7,
                      "line": 29
                    }
                  }
                },
                "range": [
                  733,
                  741
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              682,
              744
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 30
              },
              "start": {
                "column": 21,
                "line": 24
              }
            }
          },
          "range": [
            667,
            744
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
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
        661,
        745
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 30
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
            "name": "newState",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 32
                }
              },
              "range": [
                761,
                768
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "range": [
                    763,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 32
                    },
                    "start": {
                      "column": 16,
                      "line": 32
                    }
                  }
                },
                "range": [
                  763,
                  768
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 32
                  },
                  "start": {
                    "column": 16,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              753,
              768
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "state",
                "optional": false,
                "range": [
                  775,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 32
                  },
                  "start": {
                    "column": 28,
                    "line": 32
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      783,
                      786
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 32
                      },
                      "start": {
                        "column": 36,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'b'",
                    "value": "b",
                    "range": [
                      788,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 32
                      },
                      "start": {
                        "column": 41,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  782,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 32
                  },
                  "start": {
                    "column": 35,
                    "line": 32
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'why'",
                "value": "why",
                "range": [
                  794,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 32
                  },
                  "start": {
                    "column": 47,
                    "line": 32
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "range": [
                771,
                774
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 32
                },
                "start": {
                  "column": 24,
                  "line": 32
                }
              }
            },
            "optional": false,
            "range": [
              771,
              800
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 32
              },
              "start": {
                "column": 24,
                "line": 32
              }
            }
          },
          "range": [
            753,
            800
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        747,
        801
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 79,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
