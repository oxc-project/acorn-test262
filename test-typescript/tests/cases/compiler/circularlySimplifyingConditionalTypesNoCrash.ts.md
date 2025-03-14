__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1646
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit",
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
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            38,
            62
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
                  39,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
                    "line": 1
                  }
                }
              },
              "range": [
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  49,
                  61
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
                          56,
                          57
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 1
                          },
                          "start": {
                            "column": 56,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        56,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 1
                        },
                        "start": {
                          "column": 56,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      50,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 1
                      },
                      "start": {
                        "column": 50,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        59,
                        60
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 1
                        },
                        "start": {
                          "column": 59,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      59,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 1
                      },
                      "start": {
                        "column": 59,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 1
                  },
                  "start": {
                    "column": 49,
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
                  42,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 1
                  },
                  "start": {
                    "column": 42,
                    "line": 1
                  }
                }
              },
              "range": [
                42,
                61
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 1
            },
            "start": {
              "column": 38,
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
            34,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 34,
              "line": 1
            }
          }
        },
        "range": [
          34,
          62
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 1
          },
          "start": {
            "column": 34,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          31
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
                    29,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  }
                },
                "range": [
                  29,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 29,
                    "line": 1
                  }
                }
              },
              "range": [
                23,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
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
              30
            ],
            "loc": {
              "end": {
                "column": 30,
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
        63
      ],
      "loc": {
        "end": {
          "column": 63,
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
        "name": "Shared",
        "optional": false,
        "range": [
          70,
          76
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              271,
              321
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
                    "name": "InjectedProps",
                    "optional": false,
                    "range": [
                      278,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    278,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                },
                "range": [
                  272,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "range": [
                      299,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 7
                      },
                      "start": {
                        "column": 49,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    299,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 7
                    },
                    "start": {
                      "column": 49,
                      "line": 7
                    }
                  }
                },
                "range": [
                  293,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 7
                  },
                  "start": {
                    "column": 43,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "range": [
              264,
              271
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "range": [
            264,
            321
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            259,
            260
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  338,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 7
                  },
                  "start": {
                    "column": 88,
                    "line": 7
                  }
                }
              },
              "range": [
                338,
                339
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 7
                },
                "start": {
                  "column": 88,
                  "line": 7
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "range": [
                  324,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 7
                  },
                  "start": {
                    "column": 74,
                    "line": 7
                  }
                }
              },
              "range": [
                324,
                337
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 7
                },
                "start": {
                  "column": 74,
                  "line": 7
                }
              }
            },
            "range": [
              324,
              340
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 7
              },
              "start": {
                "column": 74,
                "line": 7
              }
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  371,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 122,
                    "line": 7
                  },
                  "start": {
                    "column": 121,
                    "line": 7
                  }
                }
              },
              "range": [
                371,
                372
              ],
              "loc": {
                "end": {
                  "column": 122,
                  "line": 7
                },
                "start": {
                  "column": 121,
                  "line": 7
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "range": [
                  349,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 120,
                    "line": 7
                  },
                  "start": {
                    "column": 99,
                    "line": 7
                  }
                }
              },
              "range": [
                349,
                370
              ],
              "loc": {
                "end": {
                  "column": 120,
                  "line": 7
                },
                "start": {
                  "column": 99,
                  "line": 7
                }
              }
            },
            "range": [
              349,
              373
            ],
            "loc": {
              "end": {
                "column": 123,
                "line": 7
              },
              "start": {
                "column": 99,
                "line": 7
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              403,
              408
            ],
            "loc": {
              "end": {
                "column": 158,
                "line": 7
              },
              "start": {
                "column": 153,
                "line": 7
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  398,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 149,
                    "line": 7
                  },
                  "start": {
                    "column": 148,
                    "line": 7
                  }
                }
              },
              "range": [
                398,
                399
              ],
              "loc": {
                "end": {
                  "column": 149,
                  "line": 7
                },
                "start": {
                  "column": 148,
                  "line": 7
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "range": [
                  376,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 147,
                    "line": 7
                  },
                  "start": {
                    "column": 126,
                    "line": 7
                  }
                }
              },
              "range": [
                376,
                397
              ],
              "loc": {
                "end": {
                  "column": 147,
                  "line": 7
                },
                "start": {
                  "column": 126,
                  "line": 7
                }
              }
            },
            "range": [
              376,
              400
            ],
            "loc": {
              "end": {
                "column": 150,
                "line": 7
              },
              "start": {
                "column": 126,
                "line": 7
              }
            }
          },
          "range": [
            324,
            408
          ],
          "loc": {
            "end": {
              "column": 158,
              "line": 7
            },
            "start": {
              "column": 74,
              "line": 7
            }
          }
        },
        "range": [
          248,
          415
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 5,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          76,
          245
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "InjectedProps",
              "optional": false,
              "range": [
                146,
                159
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              146,
              159
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                  201,
                  239
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InjectedProps",
                      "optional": false,
                      "range": [
                        202,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 5
                        },
                        "start": {
                          "column": 41,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      202,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 5
                      },
                      "start": {
                        "column": 41,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "range": [
                        217,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 5
                        },
                        "start": {
                          "column": 56,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      217,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 5
                      },
                      "start": {
                        "column": 56,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 5
                  },
                  "start": {
                    "column": 40,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shared",
                "optional": false,
                "range": [
                  195,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                195,
                239
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "range": [
                165,
                186
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              165,
              239
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        65,
        416
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 8
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
          446,
          530
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "range": [
                452,
                464
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              },
              "range": [
                465,
                477
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    474,
                    477
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          475,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 11
                          },
                          "start": {
                            "column": 27,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        475,
                        476
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 27,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "range": [
                    467,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                },
                "range": [
                  467,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 19,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              452,
              478
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 28,
            "line": 10
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "range": [
          428,
          442
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 10
          },
          "start": {
            "column": 24,
            "line": 10
          }
        },
        "range": [
          442,
          445
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                443,
                444
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              443,
              444
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 25,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        418,
        530
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          607,
          810
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  },
                  "range": [
                    669,
                    688
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        685,
                        688
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              686,
                              687
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 16
                              },
                              "start": {
                                "column": 34,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            686,
                            687
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 16
                            },
                            "start": {
                              "column": 34,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 16
                        },
                        "start": {
                          "column": 33,
                          "line": 16
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "range": [
                        671,
                        685
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 16
                        },
                        "start": {
                          "column": 19,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      671,
                      688
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  660,
                  688
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 119,
                  "line": 17
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                694,
                808
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        710,
                        766
                      ],
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  715,
                                  751
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "range": [
                                        716,
                                        717
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      716,
                                      717
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 17
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeOperator",
                                    "operator": "keyof",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          731,
                                          750
                                        ],
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TInjectedProps",
                                              "optional": false,
                                              "range": [
                                                732,
                                                746
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 57,
                                                  "line": 17
                                                },
                                                "start": {
                                                  "column": 43,
                                                  "line": 17
                                                }
                                              }
                                            },
                                            "range": [
                                              732,
                                              746
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 57,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 43,
                                                "line": 17
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "range": [
                                                748,
                                                749
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 60,
                                                  "line": 17
                                                },
                                                "start": {
                                                  "column": 59,
                                                  "line": 17
                                                }
                                              }
                                            },
                                            "range": [
                                              748,
                                              749
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 60,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 59,
                                                "line": 17
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 61,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Shared",
                                        "optional": false,
                                        "range": [
                                          725,
                                          731
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "range": [
                                        725,
                                        750
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      719,
                                      750
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 17
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 17
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Omit",
                                "optional": false,
                                "range": [
                                  711,
                                  715
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                711,
                                751
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 17
                                },
                                "start": {
                                  "column": 22,
                                  "line": 17
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TNeedsProps",
                                "optional": false,
                                "range": [
                                  754,
                                  765
                                ],
                                "loc": {
                                  "end": {
                                    "column": 76,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                754,
                                765
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 17
                                },
                                "start": {
                                  "column": 65,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "range": [
                            711,
                            765
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 17
                            },
                            "start": {
                              "column": 22,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 17
                        },
                        "start": {
                          "column": 21,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "range": [
                        696,
                        710
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 7,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      696,
                      766
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 17
                      },
                      "start": {
                        "column": 7,
                        "line": 17
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
                          "name": "WrappedComponent",
                          "optional": false,
                          "range": [
                            771,
                            787
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 17
                            },
                            "start": {
                              "column": 82,
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
                              "column": 117,
                              "line": 17
                            },
                            "start": {
                              "column": 98,
                              "line": 17
                            }
                          },
                          "range": [
                            787,
                            806
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                803,
                                806
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "range": [
                                      804,
                                      805
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 116,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 115,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    804,
                                    805
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 116,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 115,
                                      "line": 17
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 117,
                                  "line": 17
                                },
                                "start": {
                                  "column": 114,
                                  "line": 17
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentClass",
                              "optional": false,
                              "range": [
                                789,
                                803
                              ],
                              "loc": {
                                "end": {
                                  "column": 114,
                                  "line": 17
                                },
                                "start": {
                                  "column": 100,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              789,
                              806
                            ],
                            "loc": {
                              "end": {
                                "column": 117,
                                "line": 17
                              },
                              "start": {
                                "column": 100,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          771,
                          806
                        ],
                        "loc": {
                          "end": {
                            "column": 117,
                            "line": 17
                          },
                          "start": {
                            "column": 82,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      769,
                      808
                    ],
                    "loc": {
                      "end": {
                        "column": 119,
                        "line": 17
                      },
                      "start": {
                        "column": 80,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  696,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 119,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              },
              "range": [
                613,
                650
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        630,
                        649
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TInjectedProps",
                            "optional": false,
                            "range": [
                              631,
                              645
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 15
                              },
                              "start": {
                                "column": 22,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            631,
                            645
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 15
                            },
                            "start": {
                              "column": 22,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              647,
                              648
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 15
                              },
                              "start": {
                                "column": 38,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            647,
                            648
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 15
                            },
                            "start": {
                              "column": 38,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 15
                        },
                        "start": {
                          "column": 21,
                          "line": 15
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shared",
                      "optional": false,
                      "range": [
                        624,
                        630
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      624,
                      649
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      614,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 15
                      },
                      "start": {
                        "column": 5,
                        "line": 15
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    614,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 15
                    },
                    "start": {
                      "column": 5,
                      "line": 15
                    }
                  }
                }
              ]
            },
            "range": [
              613,
              808
            ],
            "loc": {
              "end": {
                "column": 119,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 75,
            "line": 14
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferableComponentEnhancerWithProps",
        "optional": false,
        "range": [
          542,
          577
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 74,
            "line": 14
          },
          "start": {
            "column": 45,
            "line": 14
          }
        },
        "range": [
          577,
          606
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInjectedProps",
              "optional": false,
              "range": [
                578,
                592
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 14
                },
                "start": {
                  "column": 46,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              578,
              592
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 14
              },
              "start": {
                "column": 46,
                "line": 14
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TNeedsProps",
              "optional": false,
              "range": [
                594,
                605
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 14
                },
                "start": {
                  "column": 62,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              594,
              605
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 14
              },
              "start": {
                "column": 62,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        532,
        810
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          882,
          1329
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 23,
                      "line": 22
                    }
                  },
                  "range": [
                    1001,
                    1010
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      1003,
                      1010
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 25,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  986,
                  1010
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 23
                },
                "start": {
                  "column": 5,
                  "line": 23
                }
              },
              "range": [
                1017,
                1078
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1054,
                    1078
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TStateProps",
                        "optional": false,
                        "range": [
                          1055,
                          1066
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 23
                          },
                          "start": {
                            "column": 43,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        1055,
                        1066
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 23
                        },
                        "start": {
                          "column": 43,
                          "line": 23
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOwnProps",
                        "optional": false,
                        "range": [
                          1068,
                          1077
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 23
                          },
                          "start": {
                            "column": 56,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        1068,
                        1077
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 23
                        },
                        "start": {
                          "column": 56,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 23
                    },
                    "start": {
                      "column": 42,
                      "line": 23
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "range": [
                    1019,
                    1054
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 23
                    },
                    "start": {
                      "column": 7,
                      "line": 23
                    }
                  }
                },
                "range": [
                  1019,
                  1078
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              },
              "range": [
                952,
                976
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TStateProps",
                    "optional": false,
                    "range": [
                      953,
                      964
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 5,
                        "line": 21
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    953,
                    964
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 5,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOwnProps",
                    "optional": false,
                    "range": [
                      966,
                      975
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 18,
                        "line": 21
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    966,
                    975
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 21
                    },
                    "start": {
                      "column": 18,
                      "line": 21
                    }
                  }
                }
              ]
            },
            "range": [
              952,
              1079
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 26
                    },
                    "start": {
                      "column": 23,
                      "line": 26
                    }
                  },
                  "range": [
                    1137,
                    1155
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          1139,
                          1143
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 26
                          },
                          "start": {
                            "column": 25,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          1146,
                          1155
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 26
                          },
                          "start": {
                            "column": 32,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "range": [
                      1139,
                      1155
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 26
                      },
                      "start": {
                        "column": 25,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  1122,
                  1155
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapDispatchToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 27
                    },
                    "start": {
                      "column": 26,
                      "line": 27
                    }
                  },
                  "range": [
                    1183,
                    1192
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      1185,
                      1192
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 27
                      },
                      "start": {
                        "column": 28,
                        "line": 27
                      }
                    }
                  }
                },
                "range": [
                  1165,
                  1192
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mergeProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 28
                    },
                    "start": {
                      "column": 18,
                      "line": 28
                    }
                  },
                  "range": [
                    1212,
                    1230
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          1214,
                          1218
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 28
                          },
                          "start": {
                            "column": 20,
                            "line": 28
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          1221,
                          1230
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 28
                          },
                          "start": {
                            "column": 27,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      1214,
                      1230
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 28
                      },
                      "start": {
                        "column": 20,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  1202,
                  1230
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 29
                    },
                    "start": {
                      "column": 15,
                      "line": 29
                    }
                  },
                  "range": [
                    1247,
                    1256
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      1249,
                      1256
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 29
                      },
                      "start": {
                        "column": 17,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  1240,
                  1256
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 30
                },
                "start": {
                  "column": 5,
                  "line": 30
                }
              },
              "range": [
                1262,
                1326
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1299,
                    1326
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDispatchProps",
                        "optional": false,
                        "range": [
                          1300,
                          1314
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 30
                          },
                          "start": {
                            "column": 43,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        1300,
                        1314
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 30
                        },
                        "start": {
                          "column": 43,
                          "line": 30
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOwnProps",
                        "optional": false,
                        "range": [
                          1316,
                          1325
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 30
                          },
                          "start": {
                            "column": 59,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        1316,
                        1325
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 30
                        },
                        "start": {
                          "column": 59,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 30
                    },
                    "start": {
                      "column": 42,
                      "line": 30
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "range": [
                    1264,
                    1299
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 30
                    },
                    "start": {
                      "column": 7,
                      "line": 30
                    }
                  }
                },
                "range": [
                  1264,
                  1326
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 30
                  },
                  "start": {
                    "column": 7,
                    "line": 30
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              },
              "range": [
                1085,
                1112
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDispatchProps",
                    "optional": false,
                    "range": [
                      1086,
                      1100
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 5,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1086,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 25
                    },
                    "start": {
                      "column": 5,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOwnProps",
                    "optional": false,
                    "range": [
                      1102,
                      1111
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 25
                      },
                      "start": {
                        "column": 21,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1102,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 25
                    },
                    "start": {
                      "column": 21,
                      "line": 25
                    }
                  }
                }
              ]
            },
            "range": [
              1085,
              1327
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 18,
            "line": 20
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Connect",
        "optional": false,
        "range": [
          874,
          881
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 20
          }
        }
      },
      "range": [
        864,
        1329
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
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
            "name": "connect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 33
                },
                "start": {
                  "column": 19,
                  "line": 33
                }
              },
              "range": [
                1350,
                1359
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Connect",
                  "optional": false,
                  "range": [
                    1352,
                    1359
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  }
                },
                "range": [
                  1352,
                  1359
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 33
                  },
                  "start": {
                    "column": 21,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              1343,
              1359
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 33
              },
              "start": {
                "column": 12,
                "line": 33
              }
            }
          },
          "init": null,
          "range": [
            1343,
            1359
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 33
            },
            "start": {
              "column": 12,
              "line": 33
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1331,
        1360
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "myStoreConnect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 20,
                  "line": 35
                }
              },
              "range": [
                1382,
                1391
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Connect",
                  "optional": false,
                  "range": [
                    1384,
                    1391
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 35
                    },
                    "start": {
                      "column": 22,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1384,
                  1391
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 35
                  },
                  "start": {
                    "column": 22,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              1368,
              1391
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapStateToProps",
                        "optional": false,
                        "range": [
                          1542,
                          1557
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 42
                          },
                          "start": {
                            "column": 8,
                            "line": 42
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapDispatchToProps",
                        "optional": false,
                        "range": [
                          1567,
                          1585
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 43
                          },
                          "start": {
                            "column": 8,
                            "line": 43
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mergeProps",
                        "optional": false,
                        "range": [
                          1595,
                          1605
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 44
                          },
                          "start": {
                            "column": 8,
                            "line": 44
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "range": [
                          1615,
                          1622
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 45
                          },
                          "start": {
                            "column": 8,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "connect",
                      "optional": false,
                      "range": [
                        1525,
                        1532
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 41
                        },
                        "start": {
                          "column": 11,
                          "line": 41
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1525,
                      1629
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 46
                      },
                      "start": {
                        "column": 11,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1518,
                    1630
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 46
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                1512,
                1632
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 47
                },
                "start": {
                  "column": 2,
                  "line": 40
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
                "name": "mapStateToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 36
                    },
                    "start": {
                      "column": 20,
                      "line": 36
                    }
                  },
                  "range": [
                    1424,
                    1429
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1426,
                      1429
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 36
                      },
                      "start": {
                        "column": 22,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  1408,
                  1429
                ],
                "loc": {
                  "end": {
                    "column": 25,
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
                "name": "mapDispatchToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 37
                    },
                    "start": {
                      "column": 23,
                      "line": 37
                    }
                  },
                  "range": [
                    1454,
                    1459
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1456,
                      1459
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 37
                      },
                      "start": {
                        "column": 25,
                        "line": 37
                      }
                    }
                  }
                },
                "range": [
                  1435,
                  1459
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mergeProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 38
                    },
                    "start": {
                      "column": 15,
                      "line": 38
                    }
                  },
                  "range": [
                    1476,
                    1481
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1478,
                      1481
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 38
                      },
                      "start": {
                        "column": 17,
                        "line": 38
                      }
                    }
                  }
                },
                "range": [
                  1465,
                  1481
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 39
                      },
                      "start": {
                        "column": 11,
                        "line": 39
                      }
                    },
                    "range": [
                      1494,
                      1503
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        1496,
                        1503
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 39
                        },
                        "start": {
                          "column": 13,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    1487,
                    1503
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    1506,
                    1508
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 39
                    },
                    "start": {
                      "column": 23,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1487,
                  1508
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              }
            ],
            "range": [
              1394,
              1632
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 47
              },
              "start": {
                "column": 32,
                "line": 35
              }
            }
          },
          "range": [
            1368,
            1632
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1362,
        1633
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        1635,
        1645
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
