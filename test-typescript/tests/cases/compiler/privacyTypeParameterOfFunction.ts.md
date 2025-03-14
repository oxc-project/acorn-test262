__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4001
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          22
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "range": [
          6,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        24,
        52
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            49,
            52
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "range": [
            37,
            48
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          31,
          52
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        54,
        562
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            112,
            562
          ],
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 9
                  },
                  "start": {
                    "column": 34,
                    "line": 9
                  }
                },
                "range": [
                  251,
                  265
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      253,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 9
                      },
                      "start": {
                        "column": 36,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    253,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 9
                    },
                    "start": {
                      "column": 36,
                      "line": 9
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                },
                "range": [
                  225,
                  249
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
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          236,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 9
                          },
                          "start": {
                            "column": 19,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        236,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
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
                        226,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 9
                        },
                        "start": {
                          "column": 9,
                          "line": 9
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      226,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    }
                  }
                ]
              },
              "range": [
                221,
                266
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                },
                "range": [
                  402,
                  416
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      404,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 12
                      },
                      "start": {
                        "column": 32,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    404,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 12
                    },
                    "start": {
                      "column": 32,
                      "line": 12
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                },
                "range": [
                  376,
                  400
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
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          387,
                          399
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        387,
                        399
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
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
                        377,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 12
                        },
                        "start": {
                          "column": 5,
                          "line": 12
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      377,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 5,
                        "line": 12
                      }
                    }
                  }
                ]
              },
              "range": [
                376,
                417
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  511,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 15
                  },
                  "start": {
                    "column": 38,
                    "line": 15
                  }
                },
                "range": [
                  545,
                  559
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      547,
                      559
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 40,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    547,
                    559
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 15
                    },
                    "start": {
                      "column": 40,
                      "line": 15
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                },
                "range": [
                  519,
                  543
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
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          530,
                          542
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 23,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        530,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 15
                        },
                        "start": {
                          "column": 23,
                          "line": 15
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
                        520,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      520,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  }
                ]
              },
              "range": [
                511,
                560
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 15
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
              "line": 16
            },
            "start": {
              "column": 58,
              "line": 7
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "range": [
            71,
            111
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "range": [
          61,
          562
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        564,
        768
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            621,
            768
          ],
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 33,
                    "line": 19
                  }
                },
                "range": [
                  656,
                  669
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      658,
                      669
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 19
                      },
                      "start": {
                        "column": 35,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    658,
                    669
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 35,
                      "line": 19
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                },
                "range": [
                  631,
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
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          642,
                          653
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 19
                          },
                          "start": {
                            "column": 19,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        642,
                        653
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
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
                        632,
                        633
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      632,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    }
                  }
                ]
              },
              "range": [
                627,
                670
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 20
                  },
                  "start": {
                    "column": 29,
                    "line": 20
                  }
                },
                "range": [
                  700,
                  713
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      702,
                      713
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 20
                      },
                      "start": {
                        "column": 31,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    702,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 20
                    },
                    "start": {
                      "column": 31,
                      "line": 20
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                },
                "range": [
                  675,
                  698
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
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          686,
                          697
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        686,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
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
                        676,
                        677
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 20
                        },
                        "start": {
                          "column": 5,
                          "line": 20
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      676,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 5,
                        "line": 20
                      }
                    }
                  }
                ]
              },
              "range": [
                675,
                714
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  719,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 21
                  },
                  "start": {
                    "column": 37,
                    "line": 21
                  }
                },
                "range": [
                  752,
                  765
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      754,
                      765
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 21
                      },
                      "start": {
                        "column": 39,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    754,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 21
                    },
                    "start": {
                      "column": 39,
                      "line": 21
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 21
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                },
                "range": [
                  727,
                  750
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
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          738,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 21
                          },
                          "start": {
                            "column": 23,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        738,
                        749
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 21
                        },
                        "start": {
                          "column": 23,
                          "line": 21
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
                        728,
                        729
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 21
                        },
                        "start": {
                          "column": 13,
                          "line": 21
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      728,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 13,
                        "line": 21
                      }
                    }
                  }
                ]
              },
              "range": [
                719,
                766
              ],
              "loc": {
                "end": {
                  "column": 51,
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
              "column": 57,
              "line": 18
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false,
          "range": [
            581,
            620
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 18
            },
            "start": {
              "column": 17,
              "line": 18
            }
          }
        },
        "range": [
          571,
          768
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
          822,
          975
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 25
                },
                "start": {
                  "column": 34,
                  "line": 25
                }
              },
              "range": [
                858,
                872
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    860,
                    872
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 25
                    },
                    "start": {
                      "column": 36,
                      "line": 25
                    }
                  }
                },
                "range": [
                  860,
                  872
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 25
                  },
                  "start": {
                    "column": 36,
                    "line": 25
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              },
              "range": [
                832,
                856
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
                      "name": "privateClass",
                      "optional": false,
                      "range": [
                        843,
                        855
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 25
                        },
                        "start": {
                          "column": 19,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      843,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 25
                      },
                      "start": {
                        "column": 19,
                        "line": 25
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
                      833,
                      834
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    833,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                }
              ]
            },
            "range": [
              828,
              873
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 26
                },
                "start": {
                  "column": 30,
                  "line": 26
                }
              },
              "range": [
                904,
                918
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    906,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 26
                    },
                    "start": {
                      "column": 32,
                      "line": 26
                    }
                  }
                },
                "range": [
                  906,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              },
              "range": [
                878,
                902
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
                      "name": "privateClass",
                      "optional": false,
                      "range": [
                        889,
                        901
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 26
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      889,
                      901
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
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
                      879,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 26
                      },
                      "start": {
                        "column": 5,
                        "line": 26
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    879,
                    901
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 26
                    },
                    "start": {
                      "column": 5,
                      "line": 26
                    }
                  }
                }
              ]
            },
            "range": [
              878,
              919
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                924,
                932
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
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 27
                },
                "start": {
                  "column": 38,
                  "line": 27
                }
              },
              "range": [
                958,
                972
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    960,
                    972
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 27
                    },
                    "start": {
                      "column": 40,
                      "line": 27
                    }
                  }
                },
                "range": [
                  960,
                  972
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 27
                  },
                  "start": {
                    "column": 40,
                    "line": 27
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              },
              "range": [
                932,
                956
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
                      "name": "privateClass",
                      "optional": false,
                      "range": [
                        943,
                        955
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 27
                        },
                        "start": {
                          "column": 23,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      943,
                      955
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 27
                      },
                      "start": {
                        "column": 23,
                        "line": 27
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
                      933,
                      934
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 27
                      },
                      "start": {
                        "column": 13,
                        "line": 27
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    933,
                    955
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 27
                    },
                    "start": {
                      "column": 13,
                      "line": 27
                    }
                  }
                }
              ]
            },
            "range": [
              924,
              973
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 52,
            "line": 24
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "range": [
          780,
          821
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 24
          }
        }
      },
      "range": [
        770,
        975
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1028,
          1175
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 31
                },
                "start": {
                  "column": 33,
                  "line": 31
                }
              },
              "range": [
                1063,
                1076
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1065,
                    1076
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 31
                    },
                    "start": {
                      "column": 35,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1065,
                  1076
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 31
                  },
                  "start": {
                    "column": 35,
                    "line": 31
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 31
                }
              },
              "range": [
                1038,
                1061
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
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        1049,
                        1060
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      1049,
                      1060
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 31
                      },
                      "start": {
                        "column": 19,
                        "line": 31
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
                      1039,
                      1040
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 31
                      },
                      "start": {
                        "column": 9,
                        "line": 31
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1039,
                    1060
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 31
                    },
                    "start": {
                      "column": 9,
                      "line": 31
                    }
                  }
                }
              ]
            },
            "range": [
              1034,
              1077
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 32
                },
                "start": {
                  "column": 29,
                  "line": 32
                }
              },
              "range": [
                1107,
                1120
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1109,
                    1120
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 32
                    },
                    "start": {
                      "column": 31,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1109,
                  1120
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 32
                  },
                  "start": {
                    "column": 31,
                    "line": 32
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              },
              "range": [
                1082,
                1105
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
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        1093,
                        1104
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
                    },
                    "range": [
                      1093,
                      1104
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
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1083,
                      1084
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 32
                      },
                      "start": {
                        "column": 5,
                        "line": 32
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1083,
                    1104
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 32
                    },
                    "start": {
                      "column": 5,
                      "line": 32
                    }
                  }
                }
              ]
            },
            "range": [
              1082,
              1121
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                1126,
                1134
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
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 33
                },
                "start": {
                  "column": 37,
                  "line": 33
                }
              },
              "range": [
                1159,
                1172
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1161,
                    1172
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 33
                    },
                    "start": {
                      "column": 39,
                      "line": 33
                    }
                  }
                },
                "range": [
                  1161,
                  1172
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 33
                  },
                  "start": {
                    "column": 39,
                    "line": 33
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              },
              "range": [
                1134,
                1157
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
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        1145,
                        1156
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 33
                        },
                        "start": {
                          "column": 23,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1145,
                      1156
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 33
                      },
                      "start": {
                        "column": 23,
                        "line": 33
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
                      1135,
                      1136
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 33
                      },
                      "start": {
                        "column": 13,
                        "line": 33
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1135,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 33
                    },
                    "start": {
                      "column": 13,
                      "line": 33
                    }
                  }
                }
              ]
            },
            "range": [
              1126,
              1173
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 51,
            "line": 30
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "range": [
          987,
          1027
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 30
          },
          "start": {
            "column": 10,
            "line": 30
          }
        }
      },
      "range": [
        977,
        1175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1177,
        1703
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            1231,
            1703
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "range": [
                  1342,
                  1362
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 38
                  },
                  "start": {
                    "column": 11,
                    "line": 38
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1362,
                  1396
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1389,
                    1396
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 39
                    },
                    "start": {
                      "column": 58,
                      "line": 38
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 38
                    },
                    "start": {
                      "column": 31,
                      "line": 38
                    }
                  },
                  "range": [
                    1362,
                    1386
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
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            1373,
                            1385
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 38
                            },
                            "start": {
                              "column": 42,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1373,
                          1385
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 38
                          },
                          "start": {
                            "column": 42,
                            "line": 38
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
                          1363,
                          1364
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 38
                          },
                          "start": {
                            "column": 32,
                            "line": 38
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1363,
                        1385
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 38
                        },
                        "start": {
                          "column": 32,
                          "line": 38
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 31,
                    "line": 38
                  }
                }
              },
              "range": [
                1335,
                1396
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "range": [
                  1416,
                  1437
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 40
                  },
                  "start": {
                    "column": 19,
                    "line": 40
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1437,
                  1483
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1464,
                    1483
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 41
                    },
                    "start": {
                      "column": 67,
                      "line": 40
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 40
                    },
                    "start": {
                      "column": 40,
                      "line": 40
                    }
                  },
                  "range": [
                    1437,
                    1461
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
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            1448,
                            1460
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 40
                            },
                            "start": {
                              "column": 51,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          1448,
                          1460
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 40
                          },
                          "start": {
                            "column": 51,
                            "line": 40
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
                          1438,
                          1439
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 40
                          },
                          "start": {
                            "column": 41,
                            "line": 40
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1438,
                        1460
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 40
                        },
                        "start": {
                          "column": 41,
                          "line": 40
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 40,
                    "line": 40
                  }
                }
              },
              "range": [
                1401,
                1483
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 40
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
                "name": "myPublicMethod",
                "optional": false,
                "range": [
                  1579,
                  1593
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
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
                  1593,
                  1627
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1620,
                    1627
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 44
                    },
                    "start": {
                      "column": 45,
                      "line": 43
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 43
                    },
                    "start": {
                      "column": 18,
                      "line": 43
                    }
                  },
                  "range": [
                    1593,
                    1617
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
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            1604,
                            1616
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 43
                            },
                            "start": {
                              "column": 29,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          1604,
                          1616
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 43
                          },
                          "start": {
                            "column": 29,
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
                          1594,
                          1595
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 43
                          },
                          "start": {
                            "column": 19,
                            "line": 43
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1594,
                        1616
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 43
                        },
                        "start": {
                          "column": 19,
                          "line": 43
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 18,
                    "line": 43
                  }
                }
              },
              "range": [
                1579,
                1627
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "range": [
                  1640,
                  1655
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 45
                  },
                  "start": {
                    "column": 12,
                    "line": 45
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
                  1655,
                  1701
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1682,
                    1701
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 46
                    },
                    "start": {
                      "column": 54,
                      "line": 45
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 45
                    },
                    "start": {
                      "column": 27,
                      "line": 45
                    }
                  },
                  "range": [
                    1655,
                    1679
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
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            1666,
                            1678
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 45
                            },
                            "start": {
                              "column": 38,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1666,
                          1678
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 45
                          },
                          "start": {
                            "column": 38,
                            "line": 45
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
                          1656,
                          1657
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 45
                          },
                          "start": {
                            "column": 28,
                            "line": 45
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1656,
                        1678
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 45
                        },
                        "start": {
                          "column": 28,
                          "line": 45
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 27,
                    "line": 45
                  }
                }
              },
              "range": [
                1632,
                1701
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 47
            },
            "start": {
              "column": 54,
              "line": 36
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateTypeParameters",
          "optional": false,
          "range": [
            1190,
            1230
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 36
            },
            "start": {
              "column": 13,
              "line": 36
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          1184,
          1703
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1705,
        2014
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            1758,
            2014
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "range": [
                  1771,
                  1791
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 50
                  },
                  "start": {
                    "column": 11,
                    "line": 50
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1791,
                  1824
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1817,
                    1824
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 51
                    },
                    "start": {
                      "column": 57,
                      "line": 50
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 50
                    },
                    "start": {
                      "column": 31,
                      "line": 50
                    }
                  },
                  "range": [
                    1791,
                    1814
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            1802,
                            1813
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 50
                            },
                            "start": {
                              "column": 42,
                              "line": 50
                            }
                          }
                        },
                        "range": [
                          1802,
                          1813
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 50
                          },
                          "start": {
                            "column": 42,
                            "line": 50
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
                          1792,
                          1793
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 50
                          },
                          "start": {
                            "column": 32,
                            "line": 50
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1792,
                        1813
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 50
                        },
                        "start": {
                          "column": 32,
                          "line": 50
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 51
                  },
                  "start": {
                    "column": 31,
                    "line": 50
                  }
                }
              },
              "range": [
                1764,
                1824
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "range": [
                  1844,
                  1865
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 52
                  },
                  "start": {
                    "column": 19,
                    "line": 52
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1865,
                  1899
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1891,
                    1899
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 53
                    },
                    "start": {
                      "column": 66,
                      "line": 52
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 52
                    },
                    "start": {
                      "column": 40,
                      "line": 52
                    }
                  },
                  "range": [
                    1865,
                    1888
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            1876,
                            1887
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 52
                            },
                            "start": {
                              "column": 51,
                              "line": 52
                            }
                          }
                        },
                        "range": [
                          1876,
                          1887
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 52
                          },
                          "start": {
                            "column": 51,
                            "line": 52
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
                          1866,
                          1867
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 52
                          },
                          "start": {
                            "column": 41,
                            "line": 52
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1866,
                        1887
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 52
                        },
                        "start": {
                          "column": 41,
                          "line": 52
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 53
                  },
                  "start": {
                    "column": 40,
                    "line": 52
                  }
                }
              },
              "range": [
                1829,
                1899
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 52
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
                "name": "myPublicMethod",
                "optional": false,
                "range": [
                  1904,
                  1918
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 54
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
                  1918,
                  1951
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1944,
                    1951
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 55
                    },
                    "start": {
                      "column": 44,
                      "line": 54
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 54
                    },
                    "start": {
                      "column": 18,
                      "line": 54
                    }
                  },
                  "range": [
                    1918,
                    1941
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            1929,
                            1940
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 54
                            },
                            "start": {
                              "column": 29,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          1929,
                          1940
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 54
                          },
                          "start": {
                            "column": 29,
                            "line": 54
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
                          1919,
                          1920
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 54
                          },
                          "start": {
                            "column": 19,
                            "line": 54
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1919,
                        1940
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 54
                        },
                        "start": {
                          "column": 19,
                          "line": 54
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 55
                  },
                  "start": {
                    "column": 18,
                    "line": 54
                  }
                }
              },
              "range": [
                1904,
                1951
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "range": [
                  1964,
                  1979
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 56
                  },
                  "start": {
                    "column": 12,
                    "line": 56
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
                  1979,
                  2012
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    2005,
                    2012
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 57
                    },
                    "start": {
                      "column": 53,
                      "line": 56
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 56
                    },
                    "start": {
                      "column": 27,
                      "line": 56
                    }
                  },
                  "range": [
                    1979,
                    2002
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            1990,
                            2001
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 56
                            },
                            "start": {
                              "column": 38,
                              "line": 56
                            }
                          }
                        },
                        "range": [
                          1990,
                          2001
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 56
                          },
                          "start": {
                            "column": 38,
                            "line": 56
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
                          1980,
                          1981
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 56
                          },
                          "start": {
                            "column": 28,
                            "line": 56
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1980,
                        2001
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 56
                        },
                        "start": {
                          "column": 28,
                          "line": 56
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 27,
                    "line": 56
                  }
                }
              },
              "range": [
                1956,
                2012
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 58
            },
            "start": {
              "column": 53,
              "line": 49
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParameters",
          "optional": false,
          "range": [
            1718,
            1757
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 49
            },
            "start": {
              "column": 13,
              "line": 49
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          1712,
          2014
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 7,
            "line": 49
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2064,
          2347
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "range": [
                2077,
                2097
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 61
                },
                "start": {
                  "column": 11,
                  "line": 61
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2097,
                2131
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2124,
                  2131
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 58,
                    "line": 61
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 61
                  },
                  "start": {
                    "column": 31,
                    "line": 61
                  }
                },
                "range": [
                  2097,
                  2121
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
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          2108,
                          2120
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 61
                          },
                          "start": {
                            "column": 42,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        2108,
                        2120
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 61
                        },
                        "start": {
                          "column": 42,
                          "line": 61
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
                        2098,
                        2099
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 61
                        },
                        "start": {
                          "column": 32,
                          "line": 61
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2098,
                      2120
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 61
                      },
                      "start": {
                        "column": 32,
                        "line": 61
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 31,
                  "line": 61
                }
              }
            },
            "range": [
              2070,
              2131
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "range": [
                2151,
                2172
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 63
                },
                "start": {
                  "column": 19,
                  "line": 63
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2172,
                2218
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2199,
                  2218
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 67,
                    "line": 63
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 63
                  },
                  "start": {
                    "column": 40,
                    "line": 63
                  }
                },
                "range": [
                  2172,
                  2196
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
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          2183,
                          2195
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 63
                          },
                          "start": {
                            "column": 51,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        2183,
                        2195
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 63
                        },
                        "start": {
                          "column": 51,
                          "line": 63
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
                        2173,
                        2174
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 63
                        },
                        "start": {
                          "column": 41,
                          "line": 63
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2173,
                      2195
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 63
                      },
                      "start": {
                        "column": 41,
                        "line": 63
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 40,
                  "line": 63
                }
              }
            },
            "range": [
              2136,
              2218
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 63
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
              "name": "myPublicMethod",
              "optional": false,
              "range": [
                2223,
                2237
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
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
                2237,
                2271
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2264,
                  2271
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 66
                  },
                  "start": {
                    "column": 45,
                    "line": 65
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 65
                  },
                  "start": {
                    "column": 18,
                    "line": 65
                  }
                },
                "range": [
                  2237,
                  2261
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
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          2248,
                          2260
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 65
                          },
                          "start": {
                            "column": 29,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        2248,
                        2260
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 65
                        },
                        "start": {
                          "column": 29,
                          "line": 65
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
                        2238,
                        2239
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 65
                        },
                        "start": {
                          "column": 19,
                          "line": 65
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2238,
                      2260
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 65
                      },
                      "start": {
                        "column": 19,
                        "line": 65
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 18,
                  "line": 65
                }
              }
            },
            "range": [
              2223,
              2271
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "range": [
                2284,
                2299
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 67
                },
                "start": {
                  "column": 12,
                  "line": 67
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
                2299,
                2345
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2326,
                  2345
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 54,
                    "line": 67
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 67
                  },
                  "start": {
                    "column": 27,
                    "line": 67
                  }
                },
                "range": [
                  2299,
                  2323
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
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          2310,
                          2322
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 67
                          },
                          "start": {
                            "column": 38,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        2310,
                        2322
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 67
                        },
                        "start": {
                          "column": 38,
                          "line": 67
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
                        2300,
                        2301
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 67
                        },
                        "start": {
                          "column": 28,
                          "line": 67
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2300,
                      2322
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 67
                      },
                      "start": {
                        "column": 28,
                        "line": 67
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 27,
                  "line": 67
                }
              }
            },
            "range": [
              2276,
              2345
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 48,
            "line": 60
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateTypeParameters",
        "optional": false,
        "range": [
          2022,
          2063
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 60
          },
          "start": {
            "column": 6,
            "line": 60
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2016,
        2347
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2396,
          2651
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "range": [
                2409,
                2429
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 72
                },
                "start": {
                  "column": 11,
                  "line": 72
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2429,
                2462
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2455,
                  2462
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 73
                  },
                  "start": {
                    "column": 57,
                    "line": 72
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 72
                  },
                  "start": {
                    "column": 31,
                    "line": 72
                  }
                },
                "range": [
                  2429,
                  2452
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
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          2440,
                          2451
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 72
                          },
                          "start": {
                            "column": 42,
                            "line": 72
                          }
                        }
                      },
                      "range": [
                        2440,
                        2451
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 72
                        },
                        "start": {
                          "column": 42,
                          "line": 72
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
                        2430,
                        2431
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 72
                        },
                        "start": {
                          "column": 32,
                          "line": 72
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2430,
                      2451
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 72
                      },
                      "start": {
                        "column": 32,
                        "line": 72
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 31,
                  "line": 72
                }
              }
            },
            "range": [
              2402,
              2462
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "range": [
                2482,
                2503
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 74
                },
                "start": {
                  "column": 19,
                  "line": 74
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2503,
                2536
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2529,
                  2536
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 66,
                    "line": 74
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 74
                  },
                  "start": {
                    "column": 40,
                    "line": 74
                  }
                },
                "range": [
                  2503,
                  2526
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
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          2514,
                          2525
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 74
                          },
                          "start": {
                            "column": 51,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        2514,
                        2525
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 74
                        },
                        "start": {
                          "column": 51,
                          "line": 74
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
                        2504,
                        2505
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 74
                        },
                        "start": {
                          "column": 41,
                          "line": 74
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2504,
                      2525
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 74
                      },
                      "start": {
                        "column": 41,
                        "line": 74
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 40,
                  "line": 74
                }
              }
            },
            "range": [
              2467,
              2536
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 74
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
              "name": "myPublicMethod",
              "optional": false,
              "range": [
                2541,
                2555
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
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
                2555,
                2588
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2581,
                  2588
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 77
                  },
                  "start": {
                    "column": 44,
                    "line": 76
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 76
                  },
                  "start": {
                    "column": 18,
                    "line": 76
                  }
                },
                "range": [
                  2555,
                  2578
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
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          2566,
                          2577
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 76
                          },
                          "start": {
                            "column": 29,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        2566,
                        2577
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 76
                        },
                        "start": {
                          "column": 29,
                          "line": 76
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
                        2556,
                        2557
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 76
                        },
                        "start": {
                          "column": 19,
                          "line": 76
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2556,
                      2577
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 76
                      },
                      "start": {
                        "column": 19,
                        "line": 76
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 77
                },
                "start": {
                  "column": 18,
                  "line": 76
                }
              }
            },
            "range": [
              2541,
              2588
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "range": [
                2601,
                2616
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 78
                },
                "start": {
                  "column": 12,
                  "line": 78
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
                2616,
                2649
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2642,
                  2649
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 79
                  },
                  "start": {
                    "column": 53,
                    "line": 78
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 78
                  },
                  "start": {
                    "column": 27,
                    "line": 78
                  }
                },
                "range": [
                  2616,
                  2639
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
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          2627,
                          2638
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 78
                          },
                          "start": {
                            "column": 38,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        2627,
                        2638
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 78
                        },
                        "start": {
                          "column": 38,
                          "line": 78
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
                        2617,
                        2618
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 78
                        },
                        "start": {
                          "column": 28,
                          "line": 78
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2617,
                      2638
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 78
                      },
                      "start": {
                        "column": 28,
                        "line": 78
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 27,
                  "line": 78
                }
              }
            },
            "range": [
              2593,
              2649
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 47,
            "line": 71
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParameters",
        "optional": false,
        "range": [
          2355,
          2395
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 71
          },
          "start": {
            "column": 6,
            "line": 71
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2349,
        2651
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2724,
        2809
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            2806,
            2809
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 84
            },
            "start": {
              "column": 82,
              "line": 83
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPrivateTypeParameters",
          "optional": false,
          "range": [
            2740,
            2779
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 83
            },
            "start": {
              "column": 16,
              "line": 83
            }
          }
        },
        "params": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 79,
              "line": 83
            },
            "start": {
              "column": 55,
              "line": 83
            }
          },
          "range": [
            2779,
            2803
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
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    2790,
                    2802
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 83
                    },
                    "start": {
                      "column": 66,
                      "line": 83
                    }
                  }
                },
                "range": [
                  2790,
                  2802
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 83
                  },
                  "start": {
                    "column": 66,
                    "line": 83
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
                  2780,
                  2781
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 83
                  },
                  "start": {
                    "column": 56,
                    "line": 83
                  }
                }
              },
              "out": false,
              "range": [
                2780,
                2802
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 83
                },
                "start": {
                  "column": 56,
                  "line": 83
                }
              }
            }
          ]
        },
        "range": [
          2731,
          2809
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 7,
            "line": 83
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2811,
        2894
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            2891,
            2894
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 87
            },
            "start": {
              "column": 80,
              "line": 86
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParameters",
          "optional": false,
          "range": [
            2827,
            2865
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 86
            },
            "start": {
              "column": 16,
              "line": 86
            }
          }
        },
        "params": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 77,
              "line": 86
            },
            "start": {
              "column": 54,
              "line": 86
            }
          },
          "range": [
            2865,
            2888
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
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    2876,
                    2887
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 86
                    },
                    "start": {
                      "column": 65,
                      "line": 86
                    }
                  }
                },
                "range": [
                  2876,
                  2887
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 86
                  },
                  "start": {
                    "column": 65,
                    "line": 86
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
                  2866,
                  2867
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 86
                  },
                  "start": {
                    "column": 55,
                    "line": 86
                  }
                }
              },
              "out": false,
              "range": [
                2866,
                2887
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 86
                },
                "start": {
                  "column": 55,
                  "line": 86
                }
              }
            }
          ]
        },
        "range": [
          2818,
          2894
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 7,
            "line": 86
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          2972,
          2975
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 76,
            "line": 89
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateTypeParameters",
        "optional": false,
        "range": [
          2905,
          2945
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 89
          },
          "start": {
            "column": 9,
            "line": 89
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 73,
            "line": 89
          },
          "start": {
            "column": 49,
            "line": 89
          }
        },
        "range": [
          2945,
          2969
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
                "name": "privateClass",
                "optional": false,
                "range": [
                  2956,
                  2968
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 89
                  },
                  "start": {
                    "column": 60,
                    "line": 89
                  }
                }
              },
              "range": [
                2956,
                2968
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 89
                },
                "start": {
                  "column": 60,
                  "line": 89
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
                2946,
                2947
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 89
                },
                "start": {
                  "column": 50,
                  "line": 89
                }
              }
            },
            "out": false,
            "range": [
              2946,
              2968
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 89
              },
              "start": {
                "column": 50,
                "line": 89
              }
            }
          }
        ]
      },
      "range": [
        2896,
        2975
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          3051,
          3054
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 74,
            "line": 92
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParameters",
        "optional": false,
        "range": [
          2986,
          3025
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 92
          },
          "start": {
            "column": 9,
            "line": 92
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 71,
            "line": 92
          },
          "start": {
            "column": 48,
            "line": 92
          }
        },
        "range": [
          3025,
          3048
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
                "name": "publicClass",
                "optional": false,
                "range": [
                  3036,
                  3047
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 92
                  },
                  "start": {
                    "column": 59,
                    "line": 92
                  }
                }
              },
              "range": [
                3036,
                3047
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 92
                },
                "start": {
                  "column": 59,
                  "line": 92
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
                3026,
                3027
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 92
                },
                "start": {
                  "column": 49,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              3026,
              3047
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 92
              },
              "start": {
                "column": 49,
                "line": 92
              }
            }
          }
        ]
      },
      "range": [
        2977,
        3054
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3056,
        3214
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            3127,
            3214
          ],
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 96
                  },
                  "start": {
                    "column": 13,
                    "line": 96
                  }
                },
                "range": [
                  3142,
                  3155
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      3144,
                      3155
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 96
                      },
                      "start": {
                        "column": 15,
                        "line": 96
                      }
                    }
                  },
                  "range": [
                    3144,
                    3155
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 96
                    },
                    "start": {
                      "column": 15,
                      "line": 96
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 96
                  },
                  "start": {
                    "column": 8,
                    "line": 96
                  }
                },
                "range": [
                  3137,
                  3140
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
                        3138,
                        3139
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 96
                        },
                        "start": {
                          "column": 9,
                          "line": 96
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3138,
                      3139
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 96
                      },
                      "start": {
                        "column": 9,
                        "line": 96
                      }
                    }
                  }
                ]
              },
              "range": [
                3133,
                3156
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 97
                  },
                  "start": {
                    "column": 9,
                    "line": 97
                  }
                },
                "range": [
                  3166,
                  3179
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      3168,
                      3179
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 97
                      },
                      "start": {
                        "column": 11,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    3168,
                    3179
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 97
                    },
                    "start": {
                      "column": 11,
                      "line": 97
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 97
                  },
                  "start": {
                    "column": 4,
                    "line": 97
                  }
                },
                "range": [
                  3161,
                  3164
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
                        3162,
                        3163
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 97
                        },
                        "start": {
                          "column": 5,
                          "line": 97
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3162,
                      3163
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 97
                      },
                      "start": {
                        "column": 5,
                        "line": 97
                      }
                    }
                  }
                ]
              },
              "range": [
                3161,
                3180
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  3185,
                  3193
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 98
                  },
                  "start": {
                    "column": 4,
                    "line": 98
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 98
                  },
                  "start": {
                    "column": 17,
                    "line": 98
                  }
                },
                "range": [
                  3198,
                  3211
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      3200,
                      3211
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 98
                      },
                      "start": {
                        "column": 19,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    3200,
                    3211
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 98
                    },
                    "start": {
                      "column": 19,
                      "line": 98
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 98
                  },
                  "start": {
                    "column": 12,
                    "line": 98
                  }
                },
                "range": [
                  3193,
                  3196
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
                        3194,
                        3195
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 98
                        },
                        "start": {
                          "column": 13,
                          "line": 98
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3194,
                      3195
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 98
                      },
                      "start": {
                        "column": 13,
                        "line": 98
                      }
                    }
                  }
                ]
              },
              "range": [
                3185,
                3212
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 98
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 99
            },
            "start": {
              "column": 71,
              "line": 95
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "range": [
            3073,
            3126
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 95
            },
            "start": {
              "column": 17,
              "line": 95
            }
          }
        },
        "range": [
          3063,
          3214
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 7,
            "line": 95
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3281,
          3368
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 102
                },
                "start": {
                  "column": 13,
                  "line": 102
                }
              },
              "range": [
                3296,
                3309
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    3298,
                    3309
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 102
                    },
                    "start": {
                      "column": 15,
                      "line": 102
                    }
                  }
                },
                "range": [
                  3298,
                  3309
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 102
                  },
                  "start": {
                    "column": 15,
                    "line": 102
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 102
                },
                "start": {
                  "column": 8,
                  "line": 102
                }
              },
              "range": [
                3291,
                3294
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
                      3292,
                      3293
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 102
                      },
                      "start": {
                        "column": 9,
                        "line": 102
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3292,
                    3293
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 102
                    },
                    "start": {
                      "column": 9,
                      "line": 102
                    }
                  }
                }
              ]
            },
            "range": [
              3287,
              3310
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 103
                },
                "start": {
                  "column": 9,
                  "line": 103
                }
              },
              "range": [
                3320,
                3333
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    3322,
                    3333
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 103
                    },
                    "start": {
                      "column": 11,
                      "line": 103
                    }
                  }
                },
                "range": [
                  3322,
                  3333
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 103
                  },
                  "start": {
                    "column": 11,
                    "line": 103
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 7,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              },
              "range": [
                3315,
                3318
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
                      3316,
                      3317
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 103
                      },
                      "start": {
                        "column": 5,
                        "line": 103
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3316,
                    3317
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 103
                    },
                    "start": {
                      "column": 5,
                      "line": 103
                    }
                  }
                }
              ]
            },
            "range": [
              3315,
              3334
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                3339,
                3347
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 104
                },
                "start": {
                  "column": 17,
                  "line": 104
                }
              },
              "range": [
                3352,
                3365
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    3354,
                    3365
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 104
                    },
                    "start": {
                      "column": 19,
                      "line": 104
                    }
                  }
                },
                "range": [
                  3354,
                  3365
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 104
                  },
                  "start": {
                    "column": 19,
                    "line": 104
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 104
                },
                "start": {
                  "column": 12,
                  "line": 104
                }
              },
              "range": [
                3347,
                3350
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
                      3348,
                      3349
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 104
                      },
                      "start": {
                        "column": 13,
                        "line": 104
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3348,
                    3349
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 104
                    },
                    "start": {
                      "column": 13,
                      "line": 104
                    }
                  }
                }
              ]
            },
            "range": [
              3339,
              3366
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 65,
            "line": 101
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "range": [
          3226,
          3280
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 101
          },
          "start": {
            "column": 10,
            "line": 101
          }
        }
      },
      "range": [
        3216,
        3368
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3370,
        3612
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            3437,
            3612
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "range": [
                  3450,
                  3470
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 108
                  },
                  "start": {
                    "column": 11,
                    "line": 108
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  3470,
                  3483
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3476,
                    3483
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 109
                    },
                    "start": {
                      "column": 37,
                      "line": 108
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 108
                    },
                    "start": {
                      "column": 31,
                      "line": 108
                    }
                  },
                  "range": [
                    3470,
                    3473
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
                          3471,
                          3472
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 108
                          },
                          "start": {
                            "column": 32,
                            "line": 108
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3471,
                        3472
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 108
                        },
                        "start": {
                          "column": 32,
                          "line": 108
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 109
                  },
                  "start": {
                    "column": 31,
                    "line": 108
                  }
                }
              },
              "range": [
                3443,
                3483
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 109
                },
                "start": {
                  "column": 4,
                  "line": 108
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "range": [
                  3503,
                  3524
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 110
                  },
                  "start": {
                    "column": 19,
                    "line": 110
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  3524,
                  3537
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3530,
                    3537
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 111
                    },
                    "start": {
                      "column": 46,
                      "line": 110
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 110
                    },
                    "start": {
                      "column": 40,
                      "line": 110
                    }
                  },
                  "range": [
                    3524,
                    3527
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
                          3525,
                          3526
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 110
                          },
                          "start": {
                            "column": 41,
                            "line": 110
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3525,
                        3526
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 110
                        },
                        "start": {
                          "column": 41,
                          "line": 110
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 111
                  },
                  "start": {
                    "column": 40,
                    "line": 110
                  }
                }
              },
              "range": [
                3488,
                3537
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 111
                },
                "start": {
                  "column": 4,
                  "line": 110
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
                "name": "myPublicMethod",
                "optional": false,
                "range": [
                  3542,
                  3556
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 112
                  },
                  "start": {
                    "column": 4,
                    "line": 112
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
                  3556,
                  3569
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3562,
                    3569
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 113
                    },
                    "start": {
                      "column": 24,
                      "line": 112
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 112
                    },
                    "start": {
                      "column": 18,
                      "line": 112
                    }
                  },
                  "range": [
                    3556,
                    3559
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
                          3557,
                          3558
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 112
                          },
                          "start": {
                            "column": 19,
                            "line": 112
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3557,
                        3558
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 112
                        },
                        "start": {
                          "column": 19,
                          "line": 112
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 113
                  },
                  "start": {
                    "column": 18,
                    "line": 112
                  }
                }
              },
              "range": [
                3542,
                3569
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 113
                },
                "start": {
                  "column": 4,
                  "line": 112
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "range": [
                  3582,
                  3597
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 114
                  },
                  "start": {
                    "column": 12,
                    "line": 114
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
                  3597,
                  3610
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3603,
                    3610
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 115
                    },
                    "start": {
                      "column": 33,
                      "line": 114
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 114
                    },
                    "start": {
                      "column": 27,
                      "line": 114
                    }
                  },
                  "range": [
                    3597,
                    3600
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
                          3598,
                          3599
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 114
                          },
                          "start": {
                            "column": 28,
                            "line": 114
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3598,
                        3599
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 114
                        },
                        "start": {
                          "column": 28,
                          "line": 114
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 115
                  },
                  "start": {
                    "column": 27,
                    "line": 114
                  }
                }
              },
              "range": [
                3574,
                3610
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 115
                },
                "start": {
                  "column": 4,
                  "line": 114
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 116
            },
            "start": {
              "column": 67,
              "line": 107
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "range": [
            3383,
            3436
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 107
            },
            "start": {
              "column": 13,
              "line": 107
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          3377,
          3612
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 7,
            "line": 107
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          3674,
          3849
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "range": [
                3687,
                3707
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 118
                },
                "start": {
                  "column": 11,
                  "line": 118
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3707,
                3720
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3713,
                  3720
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 119
                  },
                  "start": {
                    "column": 37,
                    "line": 118
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 118
                  },
                  "start": {
                    "column": 31,
                    "line": 118
                  }
                },
                "range": [
                  3707,
                  3710
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
                        3708,
                        3709
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 118
                        },
                        "start": {
                          "column": 32,
                          "line": 118
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3708,
                      3709
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 118
                      },
                      "start": {
                        "column": 32,
                        "line": 118
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 119
                },
                "start": {
                  "column": 31,
                  "line": 118
                }
              }
            },
            "range": [
              3680,
              3720
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "range": [
                3740,
                3761
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 120
                },
                "start": {
                  "column": 19,
                  "line": 120
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3761,
                3774
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3767,
                  3774
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 121
                  },
                  "start": {
                    "column": 46,
                    "line": 120
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 120
                  },
                  "start": {
                    "column": 40,
                    "line": 120
                  }
                },
                "range": [
                  3761,
                  3764
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
                        3762,
                        3763
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 120
                        },
                        "start": {
                          "column": 41,
                          "line": 120
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3762,
                      3763
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 120
                      },
                      "start": {
                        "column": 41,
                        "line": 120
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 121
                },
                "start": {
                  "column": 40,
                  "line": 120
                }
              }
            },
            "range": [
              3725,
              3774
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 120
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
              "name": "myPublicMethod",
              "optional": false,
              "range": [
                3779,
                3793
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 122
                },
                "start": {
                  "column": 4,
                  "line": 122
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
                3793,
                3806
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3799,
                  3806
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 123
                  },
                  "start": {
                    "column": 24,
                    "line": 122
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 122
                  },
                  "start": {
                    "column": 18,
                    "line": 122
                  }
                },
                "range": [
                  3793,
                  3796
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
                        3794,
                        3795
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 122
                        },
                        "start": {
                          "column": 19,
                          "line": 122
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3794,
                      3795
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 122
                      },
                      "start": {
                        "column": 19,
                        "line": 122
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 123
                },
                "start": {
                  "column": 18,
                  "line": 122
                }
              }
            },
            "range": [
              3779,
              3806
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 122
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "range": [
                3819,
                3834
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 124
                },
                "start": {
                  "column": 12,
                  "line": 124
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
                3834,
                3847
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3840,
                  3847
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 125
                  },
                  "start": {
                    "column": 33,
                    "line": 124
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 124
                  },
                  "start": {
                    "column": 27,
                    "line": 124
                  }
                },
                "range": [
                  3834,
                  3837
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
                        3835,
                        3836
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 124
                        },
                        "start": {
                          "column": 28,
                          "line": 124
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3835,
                      3836
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 124
                      },
                      "start": {
                        "column": 28,
                        "line": 124
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 125
                },
                "start": {
                  "column": 27,
                  "line": 124
                }
              }
            },
            "range": [
              3811,
              3847
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 126
          },
          "start": {
            "column": 61,
            "line": 117
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "range": [
          3619,
          3673
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 117
          },
          "start": {
            "column": 6,
            "line": 117
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        3613,
        3849
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3851,
        3928
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3925,
            3928
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 129
            },
            "start": {
              "column": 74,
              "line": 128
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "range": [
            3867,
            3919
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 128
            },
            "start": {
              "column": 16,
              "line": 128
            }
          }
        },
        "params": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 71,
              "line": 128
            },
            "start": {
              "column": 68,
              "line": 128
            }
          },
          "range": [
            3919,
            3922
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
                  3920,
                  3921
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 128
                  },
                  "start": {
                    "column": 69,
                    "line": 128
                  }
                }
              },
              "out": false,
              "range": [
                3920,
                3921
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 128
                },
                "start": {
                  "column": 69,
                  "line": 128
                }
              }
            }
          ]
        },
        "range": [
          3858,
          3928
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 129
          },
          "start": {
            "column": 7,
            "line": 128
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 128
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          3998,
          4001
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 132
          },
          "start": {
            "column": 68,
            "line": 131
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "range": [
          3939,
          3992
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 131
          },
          "start": {
            "column": 9,
            "line": 131
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 131
          },
          "start": {
            "column": 62,
            "line": 131
          }
        },
        "range": [
          3992,
          3995
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
                3993,
                3994
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 131
                },
                "start": {
                  "column": 63,
                  "line": 131
                }
              }
            },
            "out": false,
            "range": [
              3993,
              3994
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 131
              },
              "start": {
                "column": 63,
                "line": 131
              }
            }
          }
        ]
      },
      "range": [
        3930,
        4001
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 132
        },
        "start": {
          "column": 0,
          "line": 131
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 132
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
