__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    324
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "range": [
          27,
          31
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              34,
              40
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          {
            "type": "TSObjectKeyword",
            "range": [
              43,
              49
            ],
            "loc": {
              "end": {
                "column": 27,
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
          34,
          49
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "range": [
        22,
        50
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          73,
          100
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
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
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
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
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              },
              "range": [
                88,
                97
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  90,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              77,
              98
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 21,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyncableObject",
        "optional": false,
        "range": [
          58,
          72
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        52,
        100
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
          151,
          153
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 51,
            "line": 9
          },
          "start": {
            "column": 49,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyncableRef",
        "optional": false,
        "range": [
          112,
          123
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 9
          }
        },
        "range": [
          123,
          150
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
                "name": "ISyncableObject",
                "optional": false,
                "range": [
                  134,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 9
                  },
                  "start": {
                    "column": 32,
                    "line": 9
                  }
                }
              },
              "range": [
                134,
                149
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 9
                },
                "start": {
                  "column": 32,
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
                124,
                125
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              124,
              149
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        102,
        153
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          216,
          218
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 63,
            "line": 11
          },
          "start": {
            "column": 61,
            "line": 11
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
            "name": "SyncableObject",
            "optional": false,
            "range": [
              201,
              215
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 11
              },
              "start": {
                "column": 46,
                "line": 11
              }
            }
          },
          "range": [
            201,
            215
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 11
            },
            "start": {
              "column": 46,
              "line": 11
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISyncableObject",
        "optional": false,
        "range": [
          165,
          180
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 11
          },
          "start": {
            "column": 25,
            "line": 11
          }
        },
        "range": [
          180,
          192
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSObjectKeyword",
              "range": [
                185,
                191
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 30,
                  "line": 11
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
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              181,
              191
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 26,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        155,
        218
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__ValueDescriptorType",
        "optional": false,
        "range": [
          225,
          246
        ],
        "loc": {
          "end": {
            "column": 26,
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
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              276,
              277
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 13
              },
              "start": {
                "column": 56,
                "line": 13
              }
            }
          },
          "range": [
            276,
            277
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 13
            },
            "start": {
              "column": 56,
              "line": 13
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ISyncableObject",
            "optional": false,
            "range": [
              286,
              301
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 13
              },
              "start": {
                "column": 66,
                "line": 13
              }
            }
          },
          "range": [
            286,
            301
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 13
            },
            "start": {
              "column": 66,
              "line": 13
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              321,
              322
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 13
              },
              "start": {
                "column": 101,
                "line": 13
              }
            }
          },
          "range": [
            321,
            322
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 13
            },
            "start": {
              "column": 101,
              "line": 13
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              315,
              318
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
                    316,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 13
                    },
                    "start": {
                      "column": 96,
                      "line": 13
                    }
                  }
                },
                "range": [
                  316,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 13
                  },
                  "start": {
                    "column": 96,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 13
              },
              "start": {
                "column": 95,
                "line": 13
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyncableRef",
            "optional": false,
            "range": [
              304,
              315
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 13
              },
              "start": {
                "column": 84,
                "line": 13
              }
            }
          },
          "range": [
            304,
            318
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 13
            },
            "start": {
              "column": 84,
              "line": 13
            }
          }
        },
        "range": [
          276,
          322
        ],
        "loc": {
          "end": {
            "column": 102,
            "line": 13
          },
          "start": {
            "column": 56,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 13
          },
          "start": {
            "column": 26,
            "line": 13
          }
        },
        "range": [
          246,
          273
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    257,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 13
                    },
                    "start": {
                      "column": 37,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSObjectKeyword",
                  "range": [
                    266,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 13
                    },
                    "start": {
                      "column": 46,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                257,
                272
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 13
                },
                "start": {
                  "column": 37,
                  "line": 13
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
                247,
                248
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 27,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              247,
              272
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 13
              },
              "start": {
                "column": 27,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        220,
        323
      ],
      "loc": {
        "end": {
          "column": 103,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
