__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    77,
    1369
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          98,
          147
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 5,
                      "line": 3
                    }
                  },
                  "range": [
                    105,
                    113
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      107,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  103,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 3,
                    "line": 3
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
                  "column": 3,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                114,
                144
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
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 7,
                              "line": 4
                            }
                          },
                          "range": [
                            125,
                            133
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              127,
                              133
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 4
                              },
                              "start": {
                                "column": 9,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          123,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 5,
                            "line": 4
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
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      },
                      "range": [
                        134,
                        139
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          136,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      122,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 4,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              102,
              145
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 21,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepObject",
        "optional": false,
        "range": [
          87,
          97
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        77,
        147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2broken",
        "optional": false,
        "range": [
          154,
          165
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                218,
                220
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              }
            },
            "range": [
              218,
              220
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                216,
                217
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              216,
              217
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "range": [
            216,
            221
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "range": [
            230,
            236
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 11
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            270,
            275
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 11
            },
            "start": {
              "column": 58,
              "line": 11
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              246,
              267
            ],
            "params": [
              {
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
                        255,
                        257
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 11
                        },
                        "start": {
                          "column": 43,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      255,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 11
                      },
                      "start": {
                        "column": 43,
                        "line": 11
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "range": [
                        253,
                        254
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
                      253,
                      254
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
                    253,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 11
                    },
                    "start": {
                      "column": 41,
                      "line": 11
                    }
                  }
                },
                "range": [
                  247,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  260,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 11
                  },
                  "start": {
                    "column": 48,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 11
              },
              "start": {
                "column": 34,
                "line": 11
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "range": [
              239,
              246
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 27,
                "line": 11
              }
            }
          },
          "range": [
            239,
            267
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 11
            },
            "start": {
              "column": 27,
              "line": 11
            }
          }
        },
        "range": [
          216,
          275
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 11
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 16,
            "line": 8
          }
        },
        "range": [
          165,
          213
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
                "name": "DeepObject",
                "optional": false,
                "range": [
                  179,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              },
              "range": [
                179,
                189
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                169,
                170
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              169,
              189
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
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
                  "name": "O",
                  "optional": false,
                  "range": [
                    210,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  }
                },
                "range": [
                  210,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
                    "line": 10
                  }
                }
              },
              "range": [
                204,
                211
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
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
                193,
                195
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              193,
              211
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        149,
        276
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2working",
        "optional": false,
        "range": [
          283,
          295
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                348,
                350
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
                }
              }
            },
            "range": [
              348,
              350
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                346,
                347
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              346,
              347
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "range": [
            346,
            351
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "range": [
            360,
            366
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 16
            },
            "start": {
              "column": 18,
              "line": 16
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            383,
            388
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 16
            },
            "start": {
              "column": 41,
              "line": 16
            }
          }
        },
        "trueType": {
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
                  377,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 16
                  },
                  "start": {
                    "column": 35,
                    "line": 16
                  }
                }
              },
              "range": [
                377,
                379
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 16
                },
                "start": {
                  "column": 35,
                  "line": 16
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "range": [
                  375,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 16
                  },
                  "start": {
                    "column": 33,
                    "line": 16
                  }
                }
              },
              "range": [
                375,
                376
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 16
                },
                "start": {
                  "column": 33,
                  "line": 16
                }
              }
            },
            "range": [
              375,
              380
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 33,
                "line": 16
              }
            }
          },
          "range": [
            369,
            380
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 27,
              "line": 16
            }
          }
        },
        "range": [
          346,
          388
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 13
          }
        },
        "range": [
          295,
          343
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
                "name": "DeepObject",
                "optional": false,
                "range": [
                  309,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              },
              "range": [
                309,
                319
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                299,
                300
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              299,
              319
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
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
                  "name": "O",
                  "optional": false,
                  "range": [
                    340,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 15
                    },
                    "start": {
                      "column": 19,
                      "line": 15
                    }
                  }
                },
                "range": [
                  340,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              },
              "range": [
                334,
                341
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
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
                323,
                325
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              323,
              341
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        278,
        389
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 16
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
        "name": "keys2workaround",
        "optional": false,
        "range": [
          396,
          411
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            463,
            521
          ],
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      469,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    469,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      467,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    467,
                    468
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 19
                    },
                    "start": {
                      "column": 2,
                      "line": 19
                    }
                  }
                },
                "range": [
                  467,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 19
                  },
                  "start": {
                    "column": 2,
                    "line": 19
                  }
                }
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "range": [
                  481,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 19
                  },
                  "start": {
                    "column": 16,
                    "line": 19
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  504,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 19
                  },
                  "start": {
                    "column": 39,
                    "line": 19
                  }
                }
              },
              "trueType": {
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
                        498,
                        500
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 19
                        },
                        "start": {
                          "column": 33,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      498,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 19
                      },
                      "start": {
                        "column": 33,
                        "line": 19
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "range": [
                        496,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 31,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      496,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 31,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    496,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 19
                    },
                    "start": {
                      "column": 31,
                      "line": 19
                    }
                  }
                },
                "range": [
                  490,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 19
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              },
              "range": [
                467,
                509
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 19
                },
                "start": {
                  "column": 2,
                  "line": 19
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                513,
                519
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 20
                },
                "start": {
                  "column": 2,
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
              "column": 72,
              "line": 18
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "range": [
            456,
            463
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 18
            },
            "start": {
              "column": 65,
              "line": 18
            }
          }
        },
        "range": [
          456,
          521
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 65,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 62,
            "line": 18
          },
          "start": {
            "column": 20,
            "line": 18
          }
        },
        "range": [
          411,
          453
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
                "name": "DeepObject",
                "optional": false,
                "range": [
                  422,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 18
                  },
                  "start": {
                    "column": 31,
                    "line": 18
                  }
                }
              },
              "range": [
                422,
                432
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 18
                },
                "start": {
                  "column": 31,
                  "line": 18
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                412,
                413
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              412,
              432
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 18
              },
              "start": {
                "column": 21,
                "line": 18
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
                  "name": "O",
                  "optional": false,
                  "range": [
                    451,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 18
                    },
                    "start": {
                      "column": 60,
                      "line": 18
                    }
                  }
                },
                "range": [
                  451,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 18
                  },
                  "start": {
                    "column": 60,
                    "line": 18
                  }
                }
              },
              "range": [
                445,
                452
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 18
                },
                "start": {
                  "column": 54,
                  "line": 18
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
                434,
                436
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 18
                },
                "start": {
                  "column": 43,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              434,
              452
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 18
              },
              "start": {
                "column": 43,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        391,
        522
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          557,
          621
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
                561,
                562
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 24
                },
                "start": {
                  "column": 2,
                  "line": 24
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
                  "column": 3,
                  "line": 28
                },
                "start": {
                  "column": 3,
                  "line": 24
                }
              },
              "range": [
                562,
                618
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "\"1\"",
                      "value": "1",
                      "range": [
                        570,
                        573
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 25
                        },
                        "start": {
                          "column": 4,
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
                          "column": 12,
                          "line": 25
                        },
                        "start": {
                          "column": 7,
                          "line": 25
                        }
                      },
                      "range": [
                        573,
                        578
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "123",
                          "value": 123,
                          "range": [
                            575,
                            578
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 25
                            },
                            "start": {
                              "column": 9,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          575,
                          578
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 25
                          },
                          "start": {
                            "column": 9,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      570,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 25
                      },
                      "start": {
                        "column": 4,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "\"2\"",
                      "value": "2",
                      "range": [
                        584,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 26
                        },
                        "start": {
                          "column": 4,
                          "line": 26
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
                          "column": 15,
                          "line": 26
                        },
                        "start": {
                          "column": 7,
                          "line": 26
                        }
                      },
                      "range": [
                        587,
                        595
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          589,
                          595
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 26
                          },
                          "start": {
                            "column": 9,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      584,
                      596
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 26
                      },
                      "start": {
                        "column": 4,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "\"3\"",
                      "value": "3",
                      "range": [
                        601,
                        604
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 27
                        },
                        "start": {
                          "column": 4,
                          "line": 27
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
                          "line": 27
                        },
                        "start": {
                          "column": 7,
                          "line": 27
                        }
                      },
                      "range": [
                        604,
                        613
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          606,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 27
                          },
                          "start": {
                            "column": 9,
                            "line": 27
                          }
                        }
                      }
                    },
                    "range": [
                      601,
                      614
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
                  564,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              561,
              619
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 24
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
            "column": 33,
            "line": 23
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
            "name": "DeepObject",
            "optional": false,
            "range": [
              546,
              556
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 23
              },
              "start": {
                "column": 22,
                "line": 23
              }
            }
          },
          "range": [
            546,
            556
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 23
            },
            "start": {
              "column": 22,
              "line": 23
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          534,
          537
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "range": [
        524,
        621
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          655,
          1048
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "broken",
              "optional": false,
              "range": [
                659,
                665
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 32
                },
                "start": {
                  "column": 2,
                  "line": 32
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                665,
                782
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  780,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 36
                  },
                  "start": {
                    "column": 30,
                    "line": 36
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 36
                      },
                      "start": {
                        "column": 6,
                        "line": 36
                      }
                    },
                    "range": [
                      756,
                      760
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "range": [
                          758,
                          760
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 36
                          },
                          "start": {
                            "column": 8,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        758,
                        760
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    754,
                    760
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 36
                      },
                      "start": {
                        "column": 14,
                        "line": 36
                      }
                    },
                    "range": [
                      764,
                      768
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "range": [
                          766,
                          768
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 36
                          },
                          "start": {
                            "column": 16,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        766,
                        768
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 36
                        },
                        "start": {
                          "column": 16,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    762,
                    768
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
                        "column": 28,
                        "line": 36
                      },
                      "start": {
                        "column": 25,
                        "line": 36
                      }
                    },
                    "range": [
                      775,
                      778
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          777,
                          778
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 36
                          },
                          "start": {
                            "column": 27,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        777,
                        778
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 36
                        },
                        "start": {
                          "column": 27,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    770,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 36
                    },
                    "start": {
                      "column": 20,
                      "line": 36
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                },
                "range": [
                  665,
                  753
                ],
                "params": [
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
                          "name": "O",
                          "optional": false,
                          "range": [
                            688,
                            689
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 33
                            },
                            "start": {
                              "column": 21,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          688,
                          689
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 33
                          },
                          "start": {
                            "column": 21,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        682,
                        689
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 33
                        },
                        "start": {
                          "column": 15,
                          "line": 33
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
                        671,
                        673
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
                    "out": false,
                    "range": [
                      671,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          717,
                          724
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "range": [
                                718,
                                719
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 34
                                },
                                "start": {
                                  "column": 27,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              718,
                              719
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 34
                              },
                              "start": {
                                "column": 27,
                                "line": 34
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
                                721,
                                723
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 34
                                },
                                "start": {
                                  "column": 30,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              721,
                              723
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 34
                              },
                              "start": {
                                "column": 30,
                                "line": 34
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 34
                          },
                          "start": {
                            "column": 26,
                            "line": 34
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2broken",
                        "optional": false,
                        "range": [
                          706,
                          717
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 34
                          },
                          "start": {
                            "column": 15,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        706,
                        724
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 34
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
                        695,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 34
                        },
                        "start": {
                          "column": 4,
                          "line": 34
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      695,
                      724
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 34
                      },
                      "start": {
                        "column": 4,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "range": [
                            746,
                            748
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 35
                            },
                            "start": {
                              "column": 20,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          746,
                          748
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 35
                          },
                          "start": {
                            "column": 20,
                            "line": 35
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
                              742,
                              744
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 35
                              },
                              "start": {
                                "column": 16,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            742,
                            744
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 35
                            },
                            "start": {
                              "column": 16,
                              "line": 35
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              740,
                              741
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 35
                              },
                              "start": {
                                "column": 14,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            740,
                            741
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 35
                            },
                            "start": {
                              "column": 14,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          740,
                          745
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 35
                          },
                          "start": {
                            "column": 14,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        740,
                        749
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        730,
                        731
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 35
                        },
                        "start": {
                          "column": 4,
                          "line": 35
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      730,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 35
                      },
                      "start": {
                        "column": 4,
                        "line": 35
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 32,
                  "line": 36
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            },
            "range": [
              659,
              782
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "working",
              "optional": false,
              "range": [
                786,
                793
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 2,
                  "line": 38
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                793,
                911
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  909,
                  911
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 42
                  },
                  "start": {
                    "column": 30,
                    "line": 42
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 42
                      },
                      "start": {
                        "column": 6,
                        "line": 42
                      }
                    },
                    "range": [
                      885,
                      889
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "range": [
                          887,
                          889
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 42
                          },
                          "start": {
                            "column": 8,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        887,
                        889
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 42
                        },
                        "start": {
                          "column": 8,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    883,
                    889
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 42
                      },
                      "start": {
                        "column": 14,
                        "line": 42
                      }
                    },
                    "range": [
                      893,
                      897
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "range": [
                          895,
                          897
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 42
                          },
                          "start": {
                            "column": 16,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        895,
                        897
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 42
                        },
                        "start": {
                          "column": 16,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    891,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 42
                    },
                    "start": {
                      "column": 12,
                      "line": 42
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
                        "column": 28,
                        "line": 42
                      },
                      "start": {
                        "column": 25,
                        "line": 42
                      }
                    },
                    "range": [
                      904,
                      907
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          906,
                          907
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 42
                          },
                          "start": {
                            "column": 27,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        906,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 42
                        },
                        "start": {
                          "column": 27,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    899,
                    907
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 42
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 42
                  },
                  "start": {
                    "column": 9,
                    "line": 38
                  }
                },
                "range": [
                  793,
                  882
                ],
                "params": [
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
                          "name": "O",
                          "optional": false,
                          "range": [
                            816,
                            817
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 39
                            },
                            "start": {
                              "column": 21,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          816,
                          817
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 39
                          },
                          "start": {
                            "column": 21,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        810,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
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
                        799,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 39
                        },
                        "start": {
                          "column": 4,
                          "line": 39
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      799,
                      817
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 39
                      },
                      "start": {
                        "column": 4,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          846,
                          853
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "range": [
                                847,
                                848
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 40
                                },
                                "start": {
                                  "column": 28,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              847,
                              848
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 40
                              },
                              "start": {
                                "column": 28,
                                "line": 40
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
                                850,
                                852
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 40
                                },
                                "start": {
                                  "column": 31,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              850,
                              852
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 40
                              },
                              "start": {
                                "column": 31,
                                "line": 40
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 40
                          },
                          "start": {
                            "column": 27,
                            "line": 40
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2working",
                        "optional": false,
                        "range": [
                          834,
                          846
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 40
                          },
                          "start": {
                            "column": 15,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        834,
                        853
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 40
                        },
                        "start": {
                          "column": 15,
                          "line": 40
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
                        823,
                        825
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
                    "out": false,
                    "range": [
                      823,
                      853
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 40
                      },
                      "start": {
                        "column": 4,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "range": [
                            875,
                            877
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 41
                            },
                            "start": {
                              "column": 20,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          875,
                          877
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 41
                          },
                          "start": {
                            "column": 20,
                            "line": 41
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
                              871,
                              873
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 41
                              },
                              "start": {
                                "column": 16,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            871,
                            873
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 41
                            },
                            "start": {
                              "column": 16,
                              "line": 41
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              869,
                              870
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 41
                              },
                              "start": {
                                "column": 14,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            869,
                            870
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 41
                            },
                            "start": {
                              "column": 14,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          869,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 41
                          },
                          "start": {
                            "column": 14,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        869,
                        878
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 41
                        },
                        "start": {
                          "column": 14,
                          "line": 41
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        859,
                        860
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
                    "out": false,
                    "range": [
                      859,
                      878
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 41
                      },
                      "start": {
                        "column": 4,
                        "line": 41
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 32,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              }
            },
            "range": [
              786,
              911
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 38
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "workaround",
              "optional": false,
              "range": [
                915,
                925
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 44
                },
                "start": {
                  "column": 2,
                  "line": 44
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                925,
                1046
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1044,
                  1046
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 48
                  },
                  "start": {
                    "column": 30,
                    "line": 48
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 48
                      },
                      "start": {
                        "column": 6,
                        "line": 48
                      }
                    },
                    "range": [
                      1020,
                      1024
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "range": [
                          1022,
                          1024
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1022,
                        1024
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    }
                  },
                  "range": [
                    1018,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 48
                      },
                      "start": {
                        "column": 14,
                        "line": 48
                      }
                    },
                    "range": [
                      1028,
                      1032
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "range": [
                          1030,
                          1032
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 48
                          },
                          "start": {
                            "column": 16,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1030,
                        1032
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 48
                        },
                        "start": {
                          "column": 16,
                          "line": 48
                        }
                      }
                    }
                  },
                  "range": [
                    1026,
                    1032
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 48
                    },
                    "start": {
                      "column": 12,
                      "line": 48
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
                        "column": 28,
                        "line": 48
                      },
                      "start": {
                        "column": 25,
                        "line": 48
                      }
                    },
                    "range": [
                      1039,
                      1042
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          1041,
                          1042
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 48
                          },
                          "start": {
                            "column": 27,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1041,
                        1042
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 48
                        },
                        "start": {
                          "column": 27,
                          "line": 48
                        }
                      }
                    }
                  },
                  "range": [
                    1034,
                    1042
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 48
                    },
                    "start": {
                      "column": 20,
                      "line": 48
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 48
                  },
                  "start": {
                    "column": 12,
                    "line": 44
                  }
                },
                "range": [
                  925,
                  1017
                ],
                "params": [
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
                          "name": "O",
                          "optional": false,
                          "range": [
                            948,
                            949
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 45
                            },
                            "start": {
                              "column": 21,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          948,
                          949
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 45
                          },
                          "start": {
                            "column": 21,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        942,
                        949
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 45
                        },
                        "start": {
                          "column": 15,
                          "line": 45
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
                        931,
                        933
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 45
                        },
                        "start": {
                          "column": 4,
                          "line": 45
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      931,
                      949
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 45
                      },
                      "start": {
                        "column": 4,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          981,
                          988
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "range": [
                                982,
                                983
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 46
                                },
                                "start": {
                                  "column": 31,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              982,
                              983
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 46
                              },
                              "start": {
                                "column": 31,
                                "line": 46
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
                                985,
                                987
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 46
                                },
                                "start": {
                                  "column": 34,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              985,
                              987
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 46
                              },
                              "start": {
                                "column": 34,
                                "line": 46
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 46
                          },
                          "start": {
                            "column": 30,
                            "line": 46
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2workaround",
                        "optional": false,
                        "range": [
                          966,
                          981
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 46
                          },
                          "start": {
                            "column": 15,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        966,
                        988
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 46
                        },
                        "start": {
                          "column": 15,
                          "line": 46
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
                        955,
                        957
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 46
                        },
                        "start": {
                          "column": 4,
                          "line": 46
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      955,
                      988
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 46
                      },
                      "start": {
                        "column": 4,
                        "line": 46
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "range": [
                            1010,
                            1012
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 47
                            },
                            "start": {
                              "column": 20,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1010,
                          1012
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 47
                          },
                          "start": {
                            "column": 20,
                            "line": 47
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
                              1006,
                              1008
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 47
                              },
                              "start": {
                                "column": 16,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1006,
                            1008
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 47
                            },
                            "start": {
                              "column": 16,
                              "line": 47
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              1004,
                              1005
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 47
                              },
                              "start": {
                                "column": 14,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1004,
                            1005
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 47
                            },
                            "start": {
                              "column": 14,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1004,
                          1009
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 47
                          },
                          "start": {
                            "column": 14,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1004,
                        1013
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 47
                        },
                        "start": {
                          "column": 14,
                          "line": 47
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        994,
                        995
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 47
                        },
                        "start": {
                          "column": 4,
                          "line": 47
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      994,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 47
                      },
                      "start": {
                        "column": 4,
                        "line": 47
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 32,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 44
                }
              }
            },
            "range": [
              915,
              1046
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 48
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 32,
            "line": 31
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          629,
          632
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 31
          },
          "start": {
            "column": 6,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        },
        "range": [
          632,
          654
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
                "name": "DeepObject",
                "optional": false,
                "range": [
                  643,
                  653
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 31
                  },
                  "start": {
                    "column": 20,
                    "line": 31
                  }
                }
              },
              "range": [
                643,
                653
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                633,
                634
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 10,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              633,
              653
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 31
              },
              "start": {
                "column": 10,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        623,
        1048
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
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
            "name": "bar",
            "optional": false,
            "range": [
              1056,
              1059
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 51
              },
              "start": {
                "column": 6,
                "line": 51
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                1066,
                1069
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 51
                },
                "start": {
                  "column": 16,
                  "line": 51
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1069,
                1074
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      1070,
                      1073
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 51
                      },
                      "start": {
                        "column": 20,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1070,
                    1073
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 51
                    },
                    "start": {
                      "column": 20,
                      "line": 51
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 51
                },
                "start": {
                  "column": 19,
                  "line": 51
                }
              }
            },
            "range": [
              1062,
              1076
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 51
              },
              "start": {
                "column": 12,
                "line": 51
              }
            }
          },
          "range": [
            1056,
            1076
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 51
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1050,
        1077
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              1152,
              1155
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 53
              },
              "start": {
                "column": 11,
                "line": 53
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"1\"",
            "value": "1",
            "range": [
              1157,
              1160
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 53
              },
              "start": {
                "column": 16,
                "line": 53
              }
            }
          },
          {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              1162,
              1166
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 53
              },
              "start": {
                "column": 21,
                "line": 53
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
            "name": "bar",
            "optional": false,
            "range": [
              1141,
              1144
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 53
              },
              "start": {
                "column": 0,
                "line": 53
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "broken",
            "optional": false,
            "range": [
              1145,
              1151
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "range": [
            1141,
            1151
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "optional": false,
        "range": [
          1141,
          1167
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        1141,
        1168
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              1264,
              1267
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 54
              },
              "start": {
                "column": 12,
                "line": 54
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"1\"",
            "value": "1",
            "range": [
              1269,
              1272
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 54
              },
              "start": {
                "column": 17,
                "line": 54
              }
            }
          },
          {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              1274,
              1278
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 54
              },
              "start": {
                "column": 22,
                "line": 54
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
            "name": "bar",
            "optional": false,
            "range": [
              1252,
              1255
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "working",
            "optional": false,
            "range": [
              1256,
              1263
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "range": [
            1252,
            1263
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          1252,
          1279
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1252,
        1280
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              1324,
              1327
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 15,
                "line": 55
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"1\"",
            "value": "1",
            "range": [
              1329,
              1332
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 55
              },
              "start": {
                "column": 20,
                "line": 55
              }
            }
          },
          {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              1334,
              1338
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 55
              },
              "start": {
                "column": 25,
                "line": 55
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
            "name": "bar",
            "optional": false,
            "range": [
              1309,
              1312
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 55
              },
              "start": {
                "column": 0,
                "line": 55
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "workaround",
            "optional": false,
            "range": [
              1313,
              1323
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          "range": [
            1309,
            1323
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "optional": false,
        "range": [
          1309,
          1339
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        1309,
        1340
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 56
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
