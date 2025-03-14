__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    198
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          18,
          47
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "\"$$whatever\"",
              "value": "$$whatever",
              "range": [
                24,
                36
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                36,
                44
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  38,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              24,
              45
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Statics",
        "optional": false,
        "range": [
          10,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonReactStatics",
              "optional": false,
              "range": [
                98,
                113
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
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
                    133,
                    157
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
                            140,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 5
                            },
                            "start": {
                              "column": 51,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          140,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 5
                          },
                          "start": {
                            "column": 51,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        134,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 5
                        },
                        "start": {
                          "column": 45,
                          "line": 5
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
                          "name": "Statics",
                          "optional": false,
                          "range": [
                            149,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 5
                            },
                            "start": {
                              "column": 60,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          149,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 5
                          },
                          "start": {
                            "column": 60,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        143,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 5
                        },
                        "start": {
                          "column": 54,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 5
                    },
                    "start": {
                      "column": 44,
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
                    126,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 5
                    },
                    "start": {
                      "column": 37,
                      "line": 5
                    }
                  }
                },
                "range": [
                  126,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
                    "line": 5
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "range": [
                  121,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 5
                  },
                  "start": {
                    "column": 32,
                    "line": 5
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      162,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 5
                      },
                      "start": {
                        "column": 73,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    162,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 5
                    },
                    "start": {
                      "column": 73,
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
                      160,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 5
                      },
                      "start": {
                        "column": 71,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    160,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 5
                    },
                    "start": {
                      "column": 71,
                      "line": 5
                    }
                  }
                },
                "range": [
                  160,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 5
                  },
                  "start": {
                    "column": 71,
                    "line": 5
                  }
                }
              },
              "range": [
                119,
                165
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              },
              "range": [
                113,
                116
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
                      114,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    114,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              93,
              165
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          87,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 39,
            "line": 4
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          66,
          86
        ],
        "decorators": [],
        "name": "hoistNonReactStatics",
        "optional": false,
        "loc": {
          "end": {
            "column": 38,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "kind": "namespace",
      "range": [
        48,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoistNonReactStatics",
        "optional": false,
        "range": [
          177,
          197
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "range": [
        168,
        198
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 30,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    680
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"hoist-non-react-statics\"",
        "value": "hoist-non-react-statics",
        "range": [
          38,
          63
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 1
          },
          "start": {
            "column": 38,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "hoistNonReactStatics",
            "optional": false,
            "range": [
              12,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        64
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 1
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
        65,
        97
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            95,
            97
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 30,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefaultTheme",
          "optional": false,
          "range": [
            82,
            94
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          72,
          97
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        98,
        323
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponent",
          "optional": false,
          "range": [
            110,
            125
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
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                208,
                214
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
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  240,
                  273
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "range": [
                        241,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      241,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 5
                      },
                      "start": {
                        "column": 26,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTheme",
                      "optional": false,
                      "range": [
                        247,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      247,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TStyle",
                      "optional": false,
                      "range": [
                        255,
                        261
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 5
                        },
                        "start": {
                          "column": 40,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      255,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 5
                      },
                      "start": {
                        "column": 40,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TWhatever",
                      "optional": false,
                      "range": [
                        263,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 5
                        },
                        "start": {
                          "column": 48,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      263,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 5
                      },
                      "start": {
                        "column": 48,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StyledComponentBase",
                "optional": false,
                "range": [
                  221,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                }
              },
              "range": [
                221,
                273
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 5
                },
                "start": {
                  "column": 6,
                  "line": 5
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  316,
                  322
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "range": [
                        317,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 6
                        },
                        "start": {
                          "column": 43,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      317,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 6
                      },
                      "start": {
                        "column": 43,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hoistNonReactStatics",
                  "optional": false,
                  "range": [
                    280,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonReactStatics",
                  "optional": false,
                  "range": [
                    301,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 6
                    },
                    "start": {
                      "column": 27,
                      "line": 6
                    }
                  }
                },
                "range": [
                  280,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 6
                  },
                  "start": {
                    "column": 6,
                    "line": 6
                  }
                }
              },
              "range": [
                280,
                322
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            208,
            322
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 103,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          },
          "range": [
            125,
            201
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  139,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 3
                  },
                  "start": {
                    "column": 41,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "range": [
                  126,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                126,
                145
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "range": [
                    156,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 3
                    },
                    "start": {
                      "column": 58,
                      "line": 3
                    }
                  }
                },
                "range": [
                  156,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 3
                  },
                  "start": {
                    "column": 58,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "range": [
                  147,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 49,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                147,
                168
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 3
                },
                "start": {
                  "column": 49,
                  "line": 3
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  179,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 3
                  },
                  "start": {
                    "column": 81,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "range": [
                  170,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 3
                  },
                  "start": {
                    "column": 72,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                170,
                181
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 3
                },
                "start": {
                  "column": 72,
                  "line": 3
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSNeverKeyword",
                "range": [
                  195,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 3
                  },
                  "start": {
                    "column": 97,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "range": [
                  183,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 94,
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
                183,
                200
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 3
                },
                "start": {
                  "column": 85,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          105,
          323
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 6
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
          "column": 49,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        324,
        518
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            437,
            518
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "range": [
                  443,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                },
                "range": [
                  446,
                  452
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTag",
                    "optional": false,
                    "range": [
                      448,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    448,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                443,
                453
              ],
              "loc": {
                "end": {
                  "column": 14,
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
                "name": "theme",
                "optional": false,
                "range": [
                  458,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 9,
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
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                },
                "range": [
                  463,
                  471
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTheme",
                    "optional": false,
                    "range": [
                      465,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    465,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                458,
                472
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "style",
                "optional": false,
                "range": [
                  477,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                },
                "range": [
                  482,
                  490
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TStyle",
                    "optional": false,
                    "range": [
                      484,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    484,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                477,
                491
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "whatever",
                "optional": false,
                "range": [
                  496,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
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
                    "column": 23,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                },
                "range": [
                  504,
                  515
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TWhatever",
                    "optional": false,
                    "range": [
                      506,
                      515
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    506,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                496,
                516
              ],
              "loc": {
                "end": {
                  "column": 24,
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
              "column": 113,
              "line": 7
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponentBase",
          "optional": false,
          "range": [
            341,
            360
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 112,
              "line": 7
            },
            "start": {
              "column": 36,
              "line": 7
            }
          },
          "range": [
            360,
            436
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  374,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "range": [
                  361,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 37,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                361,
                380
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 7
                },
                "start": {
                  "column": 37,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "range": [
                    391,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 7
                    },
                    "start": {
                      "column": 67,
                      "line": 7
                    }
                  }
                },
                "range": [
                  391,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 7
                  },
                  "start": {
                    "column": 67,
                    "line": 7
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "range": [
                  382,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 7
                  },
                  "start": {
                    "column": 58,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                382,
                403
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 7
                },
                "start": {
                  "column": 58,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  414,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 7
                  },
                  "start": {
                    "column": 90,
                    "line": 7
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "range": [
                  405,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 7
                  },
                  "start": {
                    "column": 81,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                405,
                416
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 7
                },
                "start": {
                  "column": 81,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSNeverKeyword",
                "range": [
                  430,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 111,
                    "line": 7
                  },
                  "start": {
                    "column": 106,
                    "line": 7
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "range": [
                  418,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 7
                  },
                  "start": {
                    "column": 94,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                418,
                435
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 7
                },
                "start": {
                  "column": 94,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          331,
          518
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
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
        519,
        617
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            552,
            617
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "range": [
                  558,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
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
                    "column": 60,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                },
                "range": [
                  561,
                  614
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 14
                          },
                          "start": {
                            "column": 11,
                            "line": 14
                          }
                        },
                        "range": [
                          565,
                          587
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplateStringsArray",
                            "optional": false,
                            "range": [
                              567,
                              587
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 14
                              },
                              "start": {
                                "column": 13,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            567,
                            587
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 14
                            },
                            "start": {
                              "column": 13,
                              "line": 14
                            }
                          }
                        }
                      },
                      "range": [
                        564,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 10,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 14
                      },
                      "start": {
                        "column": 35,
                        "line": 14
                      }
                    },
                    "range": [
                      589,
                      614
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          607,
                          614
                        ],
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"div\"",
                              "value": "div",
                              "range": [
                                608,
                                613
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 14
                                },
                                "start": {
                                  "column": 54,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              608,
                              613
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 14
                              },
                              "start": {
                                "column": 54,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 14
                          },
                          "start": {
                            "column": 53,
                            "line": 14
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StyledComponent",
                        "optional": false,
                        "range": [
                          592,
                          607
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 14
                          },
                          "start": {
                            "column": 38,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        592,
                        614
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 14
                        },
                        "start": {
                          "column": 38,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    563,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 14
                    },
                    "start": {
                      "column": 9,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                558,
                615
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 33,
              "line": 13
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledInterface",
          "optional": false,
          "range": [
            536,
            551
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 13
            },
            "start": {
              "column": 17,
              "line": 13
            }
          }
        },
        "range": [
          526,
          617
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "styled",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              },
              "range": [
                639,
                656
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledInterface",
                  "optional": false,
                  "range": [
                    641,
                    656
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  }
                },
                "range": [
                  641,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 17
                  },
                  "start": {
                    "column": 22,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              633,
              656
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 17
              },
              "start": {
                "column": 14,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            633,
            656
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 17
            },
            "start": {
              "column": 14,
              "line": 17
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        619,
        657
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "styled",
        "optional": false,
        "range": [
          673,
          679
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 18
          },
          "start": {
            "column": 15,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "range": [
        658,
        680
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 22,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    172
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"styled-components\"",
        "value": "styled-components",
        "range": [
          19,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            13
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "styled",
            "optional": false,
            "range": [
              7,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "A",
            "optional": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "quasi": {
              "type": "TemplateLiteral",
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    61,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                61,
                63
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "tag": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "range": [
                  51,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "range": [
                  58,
                  61
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
              "range": [
                51,
                61
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "range": [
              51,
              63
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            47,
            63
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        41,
        64
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 3
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
            "name": "B",
            "optional": false,
            "range": [
              71,
              72
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
          "init": {
            "type": "TaggedTemplateExpression",
            "quasi": {
              "type": "TemplateLiteral",
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    85,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                85,
                87
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "tag": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "range": [
                  75,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "range": [
                  82,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "range": [
                75,
                85
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "range": [
              75,
              87
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            71,
            87
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        65,
        88
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 4
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
        89,
        119
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                102,
                103
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "quasi": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      116,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 5
                  }
                }
              },
              "tag": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "styled",
                  "optional": false,
                  "range": [
                    106,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "div",
                  "optional": false,
                  "range": [
                    113,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "range": [
                  106,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              },
              "range": [
                106,
                118
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "range": [
              102,
              118
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          96,
          119
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 30,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              150,
              151
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 29,
                "line": 7
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    159,
                    160
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    159,
                    160
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
                "range": [
                  159,
                  160
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
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    166,
                    167
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    166,
                    167
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
                "range": [
                  166,
                  167
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
              }
            ],
            "range": [
              153,
              169
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 32,
                "line": 7
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
            "name": "Object",
            "optional": false,
            "range": [
              136,
              142
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "assign",
            "optional": false,
            "range": [
              143,
              149
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          },
          "range": [
            136,
            149
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          136,
          170
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "range": [
        121,
        171
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
