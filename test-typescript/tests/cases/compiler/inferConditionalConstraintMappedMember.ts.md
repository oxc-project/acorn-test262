__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    52,
    670
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeysWithoutStringIndex",
        "optional": false,
        "range": [
          57,
          79
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSMappedType",
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
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              "range": [
                103,
                104
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              97,
              104
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              92,
              93
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSStringKeyword",
              "range": [
                107,
                113
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
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  122,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 37,
                    "line": 3
                  }
                }
              },
              "range": [
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 37,
                  "line": 3
                }
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  134,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 49,
                    "line": 3
                  }
                }
              },
              "range": [
                134,
                135
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 49,
                  "line": 3
                }
              }
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "range": [
                126,
                131
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 41,
                  "line": 3
                }
              }
            },
            "range": [
              107,
              135
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          },
          "range": [
            89,
            137
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSMappedType",
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
                  160,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 3
                  },
                  "start": {
                    "column": 75,
                    "line": 3
                  }
                }
              },
              "range": [
                160,
                161
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 3
                },
                "start": {
                  "column": 75,
                  "line": 3
                }
              }
            },
            "range": [
              154,
              161
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 3
              },
              "start": {
                "column": 69,
                "line": 3
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "range": [
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 3
              },
              "start": {
                "column": 64,
                "line": 3
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  170,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 3
                  },
                  "start": {
                    "column": 85,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                170,
                171
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 3
                },
                "start": {
                  "column": 85,
                  "line": 3
                }
              }
            },
            "range": [
              164,
              171
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 3
              },
              "start": {
                "column": 79,
                "line": 3
              }
            }
          },
          "range": [
            146,
            173
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 3
            },
            "start": {
              "column": 61,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            188,
            193
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              180,
              181
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "range": [
            180,
            181
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        },
        "range": [
          89,
          193
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 27,
            "line": 2
          }
        },
        "range": [
          79,
          82
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
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              80,
              81
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 28,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        52,
        193
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 5
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
        "name": "test",
        "optional": false,
        "range": [
          268,
          272
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            297,
            351
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 8
                          },
                          "start": {
                            "column": 43,
                            "line": 8
                          }
                        },
                        "range": [
                          306,
                          314
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            308,
                            314
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 8
                            },
                            "start": {
                              "column": 45,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        301,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 8
                        },
                        "start": {
                          "column": 38,
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
                        "column": 60,
                        "line": 8
                      },
                      "start": {
                        "column": 52,
                        "line": 8
                      }
                    },
                    "range": [
                      315,
                      323
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        317,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 8
                        },
                        "start": {
                          "column": 54,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    300,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 8
                    },
                    "start": {
                      "column": 37,
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      325,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 8
                      },
                      "start": {
                        "column": 62,
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
                        "column": 73,
                        "line": 8
                      },
                      "start": {
                        "column": 65,
                        "line": 8
                      }
                    },
                    "range": [
                      328,
                      336
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        330,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 8
                        },
                        "start": {
                          "column": 67,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    325,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 8
                    },
                    "start": {
                      "column": 62,
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
                    "name": "bar",
                    "optional": false,
                    "range": [
                      338,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 8
                      },
                      "start": {
                        "column": 75,
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
                        "column": 85,
                        "line": 8
                      },
                      "start": {
                        "column": 78,
                        "line": 8
                      }
                    },
                    "range": [
                      341,
                      348
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'baz'",
                        "value": "baz",
                        "range": [
                          343,
                          348
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 8
                          },
                          "start": {
                            "column": 80,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        343,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 8
                        },
                        "start": {
                          "column": 80,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    338,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 8
                    },
                    "start": {
                      "column": 75,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                298,
                350
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 8
                },
                "start": {
                  "column": 35,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 8
            },
            "start": {
              "column": 34,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeysWithoutStringIndex",
          "optional": false,
          "range": [
            275,
            297
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        },
        "range": [
          275,
          351
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        }
      },
      "range": [
        263,
        351
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        449,
        513
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RemoveIdxSgn",
          "optional": false,
          "range": [
            461,
            473
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              483,
              513
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
                    484,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                },
                "range": [
                  484,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    509,
                    512
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
                          510,
                          511
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 10
                          },
                          "start": {
                            "column": 61,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        510,
                        511
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 10
                        },
                        "start": {
                          "column": 61,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 10
                    },
                    "start": {
                      "column": 60,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KeysWithoutStringIndex",
                  "optional": false,
                  "range": [
                    487,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 10
                    },
                    "start": {
                      "column": 38,
                      "line": 10
                    }
                  }
                },
                "range": [
                  487,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 10
                  },
                  "start": {
                    "column": 38,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 10
              },
              "start": {
                "column": 34,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "range": [
              479,
              483
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 10
              },
              "start": {
                "column": 30,
                "line": 10
              }
            }
          },
          "range": [
            479,
            513
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 10
            },
            "start": {
              "column": 30,
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
            473,
            476
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
                  474,
                  475
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
                474,
                475
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
          456,
          513
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 64,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 63,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
