__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    293
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        82
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CanBeExpanded",
          "optional": false,
          "range": [
            34,
            47
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
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
                "name": "value",
                "optional": false,
                "range": [
                  72,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
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
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                },
                "range": [
                  77,
                  80
                ],
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
                        "column": 10,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    79,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                72,
                80
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            68,
            82
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 46,
              "line": 3
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          },
          "range": [
            47,
            65
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  58,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
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
                  48,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                48,
                64
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          29,
          82
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expand__",
        "optional": false,
        "range": [
          89,
          97
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
            "name": "N",
            "optional": false,
            "range": [
              115,
              116
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          "range": [
            115,
            116
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 8
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Depth",
            "optional": false,
            "range": [
              125,
              130
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "range": [
            125,
            130
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              }
            },
            "range": [
              155,
              156
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                178,
                183
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    179,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 30,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false,
              "range": [
                165,
                178
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            },
            "range": [
              165,
              183
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                239,
                240
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "range": [
              239,
              240
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 12
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                204,
                226
              ],
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'value'",
                      "value": "value",
                      "range": [
                        207,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 21,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      207,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
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
                        205,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 19,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      205,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 19,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    205,
                    215
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
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "range": [
                      217,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 31,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    217,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 11
                    },
                    "start": {
                      "column": 31,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Depth",
                    "optional": false,
                    "range": [
                      220,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    220,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Expand__",
              "optional": false,
              "range": [
                196,
                204
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              }
            },
            "range": [
              196,
              226
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 11
              }
            }
          },
          "range": [
            155,
            240
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        },
        "trueType": {
          "type": "TSUnknownKeyword",
          "range": [
            139,
            146
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        },
        "range": [
          115,
          240
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 12
          },
          "start": {
            "column": 2,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 7
          }
        },
        "range": [
          97,
          110
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              98,
              99
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
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
              "name": "N",
              "optional": false,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              101,
              102
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
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
              "name": "Depth",
              "optional": false,
              "range": [
                104,
                109
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              104,
              109
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        84,
        240
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 12
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
        242,
        292
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UseQueryOptions",
          "optional": false,
          "range": [
            254,
            269
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              283,
              292
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
                    284,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 42,
                      "line": 14
                    }
                  }
                },
                "range": [
                  284,
                  285
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    287,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 14
                    },
                    "start": {
                      "column": 45,
                      "line": 14
                    }
                  }
                },
                "range": [
                  287,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 14
                  },
                  "start": {
                    "column": 45,
                    "line": 14
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    290,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 14
                    },
                    "start": {
                      "column": 48,
                      "line": 14
                    }
                  }
                },
                "range": [
                  290,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 14
                  },
                  "start": {
                    "column": 48,
                    "line": 14
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 14
              },
              "start": {
                "column": 41,
                "line": 14
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expand__",
            "optional": false,
            "range": [
              275,
              283
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 14
              },
              "start": {
                "column": 33,
                "line": 14
              }
            }
          },
          "range": [
            275,
            292
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 14
            },
            "start": {
              "column": 33,
              "line": 14
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 14
            },
            "start": {
              "column": 27,
              "line": 14
            }
          },
          "range": [
            269,
            272
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
                  270,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 28,
                    "line": 14
                  }
                }
              },
              "out": false,
              "range": [
                270,
                271
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 28,
                  "line": 14
                }
              }
            }
          ]
        },
        "range": [
          249,
          292
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 50,
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
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
