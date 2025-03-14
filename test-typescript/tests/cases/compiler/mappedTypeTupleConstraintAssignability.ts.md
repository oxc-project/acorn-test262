__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    81,
    1173
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Writeable",
        "optional": false,
        "range": [
          86,
          95
        ],
        "loc": {
          "end": {
            "column": 14,
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
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 44,
                  "line": 3
                }
              }
            },
            "range": [
              125,
              126
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 44,
                "line": 3
              }
            }
          },
          "range": [
            119,
            126
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 38,
              "line": 3
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            114,
            115
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 33,
              "line": 3
            }
          }
        },
        "nameType": null,
        "readonly": "-",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                131,
                132
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              }
            },
            "range": [
              131,
              132
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
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
                129,
                130
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 3
                },
                "start": {
                  "column": 48,
                  "line": 3
                }
              }
            },
            "range": [
              129,
              130
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 3
              },
              "start": {
                "column": 48,
                "line": 3
              }
            }
          },
          "range": [
            129,
            133
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 3
            },
            "start": {
              "column": 48,
              "line": 3
            }
          }
        },
        "range": [
          101,
          135
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          95,
          98
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
                96,
                97
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              96,
              97
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        81,
        136
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 3
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
        "name": "EnumValues",
        "optional": false,
        "range": [
          142,
          152
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
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "range": [
              156,
              162
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  167,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              },
              "range": [
                167,
                175
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            },
            "range": [
              164,
              175
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 27,
                "line": 4
              }
            }
          }
        ],
        "range": [
          155,
          176
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "range": [
        137,
        177
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "range": [
          183,
          189
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSNumberKeyword",
            "range": [
              224,
              230
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 5
              },
              "start": {
                "column": 46,
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
                222,
                223
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 44,
                  "line": 5
                }
              }
            },
            "range": [
              222,
              223
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 44,
                "line": 5
              }
            }
          },
          "range": [
            222,
            231
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 5
            },
            "start": {
              "column": 44,
              "line": 5
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            217,
            218
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 5
            },
            "start": {
              "column": 39,
              "line": 5
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "range": [
              234,
              235
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 5
              },
              "start": {
                "column": 56,
                "line": 5
              }
            }
          },
          "range": [
            234,
            235
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 5
            },
            "start": {
              "column": 56,
              "line": 5
            }
          }
        },
        "range": [
          214,
          238
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 5
          },
          "start": {
            "column": 36,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        },
        "range": [
          189,
          211
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
                "name": "EnumValues",
                "optional": false,
                "range": [
                  200,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              },
              "range": [
                200,
                210
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
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
                190,
                191
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              190,
              210
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        178,
        239
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          296,
          323
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enum",
              "optional": false,
              "range": [
                304,
                308
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                308,
                321
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                },
                "range": [
                  310,
                  321
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      318,
                      321
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
                            319,
                            320
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          319,
                          320
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 21,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Values",
                    "optional": false,
                    "range": [
                      312,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    312,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              300,
              321
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 55,
            "line": 7
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodEnum",
        "optional": false,
        "range": [
          255,
          262
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
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 7
          },
          "start": {
            "column": 21,
            "line": 7
          }
        },
        "range": [
          262,
          295
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    274,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 7
                    },
                    "start": {
                      "column": 33,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        285,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 7
                        },
                        "start": {
                          "column": 44,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      285,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 7
                      },
                      "start": {
                        "column": 44,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    282,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 7
                    },
                    "start": {
                      "column": 41,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                273,
                294
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
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
                263,
                264
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              263,
              294
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        241,
        323
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "createZodEnum",
        "optional": false,
        "range": [
          342,
          355
        ],
        "loc": {
          "end": {
            "column": 30,
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
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 91,
                "line": 11
              },
              "start": {
                "column": 88,
                "line": 11
              }
            },
            "range": [
              413,
              416
            ],
            "typeAnnotation": {
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
                    "column": 91,
                    "line": 11
                  },
                  "start": {
                    "column": 90,
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
                  "column": 91,
                  "line": 11
                },
                "start": {
                  "column": 90,
                  "line": 11
                }
              }
            }
          },
          "range": [
            407,
            416
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 11
            },
            "start": {
              "column": 82,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 115,
            "line": 11
          },
          "start": {
            "column": 92,
            "line": 11
          }
        },
        "range": [
          417,
          440
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              426,
              440
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    436,
                    439
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
                          437,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 113,
                            "line": 11
                          },
                          "start": {
                            "column": 112,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        437,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 113,
                          "line": 11
                        },
                        "start": {
                          "column": 112,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 11
                    },
                    "start": {
                      "column": 111,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Writeable",
                  "optional": false,
                  "range": [
                    427,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 111,
                      "line": 11
                    },
                    "start": {
                      "column": 102,
                      "line": 11
                    }
                  }
                },
                "range": [
                  427,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 11
                  },
                  "start": {
                    "column": 102,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 115,
                "line": 11
              },
              "start": {
                "column": 101,
                "line": 11
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodEnum",
            "optional": false,
            "range": [
              419,
              426
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 11
              },
              "start": {
                "column": 94,
                "line": 11
              }
            }
          },
          "range": [
            419,
            440
          ],
          "loc": {
            "end": {
              "column": 115,
              "line": 11
            },
            "start": {
              "column": 94,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 81,
            "line": 11
          },
          "start": {
            "column": 30,
            "line": 11
          }
        },
        "range": [
          355,
          406
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                366,
                372
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 11
                },
                "start": {
                  "column": 41,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                356,
                357
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
            "out": false,
            "range": [
              356,
              372
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 11
              },
              "start": {
                "column": 31,
                "line": 11
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
                  392,
                  405
                ],
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            394,
                            395
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 11
                            },
                            "start": {
                              "column": 69,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          394,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 11
                          },
                          "start": {
                            "column": 69,
                            "line": 11
                          }
                        }
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                400,
                                401
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 11
                                },
                                "start": {
                                  "column": 75,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              400,
                              401
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 11
                              },
                              "start": {
                                "column": 75,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            400,
                            403
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 11
                            },
                            "start": {
                              "column": 75,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          397,
                          403
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 11
                          },
                          "start": {
                            "column": 72,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      393,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 11
                      },
                      "start": {
                        "column": 68,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 11
                  },
                  "start": {
                    "column": 67,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "range": [
                  384,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 11
                  },
                  "start": {
                    "column": 59,
                    "line": 11
                  }
                }
              },
              "range": [
                384,
                405
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 11
                },
                "start": {
                  "column": 59,
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
                374,
                375
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 11
                },
                "start": {
                  "column": 49,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              374,
              405
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 11
              },
              "start": {
                "column": 49,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        325,
        441
      ],
      "loc": {
        "end": {
          "column": 116,
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
        "name": "Maybe",
        "optional": false,
        "range": [
          529,
          534
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                540,
                541
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "range": [
              540,
              541
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          },
          {
            "type": "TSNullKeyword",
            "range": [
              544,
              548
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              551,
              560
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 15
              },
              "start": {
                "column": 27,
                "line": 15
              }
            }
          }
        ],
        "range": [
          540,
          560
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 15
          },
          "start": {
            "column": 16,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        },
        "range": [
          534,
          537
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
                535,
                536
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              535,
              536
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        524,
        561
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyTuple",
        "optional": false,
        "range": [
          567,
          575
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSUnknownKeyword",
            "range": [
              579,
              586
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 16
              },
              "start": {
                "column": 17,
                "line": 16
              }
            }
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  591,
                  598
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 16
                  },
                  "start": {
                    "column": 29,
                    "line": 16
                  }
                }
              },
              "range": [
                591,
                600
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 16
                },
                "start": {
                  "column": 29,
                  "line": 16
                }
              }
            },
            "range": [
              588,
              600
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 26,
                "line": 16
              }
            }
          }
        ],
        "range": [
          578,
          601
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 16
          }
        }
      },
      "range": [
        562,
        602
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "range": [
          608,
          617
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 17
                    },
                    "start": {
                      "column": 21,
                      "line": 17
                    }
                  },
                  "range": [
                    624,
                    632
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      626,
                      632
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 17
                      },
                      "start": {
                        "column": 23,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  623,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 17
                  },
                  "start": {
                    "column": 20,
                    "line": 17
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
                  "column": 35,
                  "line": 17
                },
                "start": {
                  "column": 30,
                  "line": 17
                }
              },
              "range": [
                633,
                638
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  635,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 17
                  },
                  "start": {
                    "column": 32,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              622,
              638
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 17
              },
              "start": {
                "column": 19,
                "line": 17
              }
            }
          }
        ],
        "range": [
          620,
          640
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "range": [
        603,
        641
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Flags",
        "optional": false,
        "range": [
          647,
          652
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"s\"",
              "value": "s",
              "range": [
                655,
                658
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "range": [
              655,
              658
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 18
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"d\"",
              "value": "d",
              "range": [
                661,
                664
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 18
                }
              }
            },
            "range": [
              661,
              664
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 19,
                "line": 18
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                667,
                669
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
                }
              }
            },
            "range": [
              667,
              669
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 25,
                "line": 18
              }
            }
          }
        ],
        "range": [
          655,
          669
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 18
          },
          "start": {
            "column": 13,
            "line": 18
          }
        }
      },
      "range": [
        642,
        670
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 18
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
          734,
          802
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__flags",
              "optional": false,
              "range": [
                738,
                745
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 2,
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
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              },
              "range": [
                745,
                748
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "range": [
                    747,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 21
                    },
                    "start": {
                      "column": 11,
                      "line": 21
                    }
                  }
                },
                "range": [
                  747,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              738,
              749
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__context",
              "optional": false,
              "range": [
                752,
                761
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 22
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
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              },
              "range": [
                761,
                764
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    763,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  763,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              752,
              765
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__outputType",
              "optional": false,
              "range": [
                768,
                780
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
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
                  "line": 23
                },
                "start": {
                  "column": 14,
                  "line": 23
                }
              },
              "range": [
                780,
                783
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    782,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 16,
                      "line": 23
                    }
                  }
                },
                "range": [
                  782,
                  783
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 16,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              768,
              784
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__default",
              "optional": false,
              "range": [
                787,
                796
              ],
              "loc": {
                "end": {
                  "column": 11,
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
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              },
              "range": [
                796,
                799
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    798,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                },
                "range": [
                  798,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
              787,
              800
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 24
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
            "line": 25
          },
          "start": {
            "column": 62,
            "line": 20
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISchema",
        "optional": false,
        "range": [
          682,
          689
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
          }
        },
        "range": [
          689,
          733
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
                690,
                691
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 18,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              690,
              691
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 18,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                697,
                700
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 25,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                693,
                694
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 21,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              693,
              700
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "range": [
                  712,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 20
                  },
                  "start": {
                    "column": 40,
                    "line": 20
                  }
                }
              },
              "range": [
                712,
                717
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 20
                },
                "start": {
                  "column": 40,
                  "line": 20
                }
              }
            },
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                720,
                723
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 20
                },
                "start": {
                  "column": 48,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                702,
                703
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              702,
              723
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 20
              },
              "start": {
                "column": 30,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                729,
                732
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 20
                },
                "start": {
                  "column": 57,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                725,
                726
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 20
                },
                "start": {
                  "column": 53,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              725,
              732
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 20
              },
              "start": {
                "column": 53,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        672,
        802
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          965,
          1027
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                969,
                980
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                980,
                1025
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schemas",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 33
                      },
                      "start": {
                        "column": 21,
                        "line": 33
                      }
                    },
                    "range": [
                      988,
                      1023
                    ],
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              998,
                              1003
                            ],
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "range": [
                                  999,
                                  1002
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 33
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 33
                              },
                              "start": {
                                "column": 31,
                                "line": 33
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ISchema",
                            "optional": false,
                            "range": [
                              991,
                              998
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 33
                              },
                              "start": {
                                "column": 24,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            991,
                            1003
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 33
                            },
                            "start": {
                              "column": 24,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1015,
                                  1020
                                ],
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1016,
                                      1019
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 33
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 33
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ISchema",
                                "optional": false,
                                "range": [
                                  1008,
                                  1015
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                1008,
                                1020
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 33
                                },
                                "start": {
                                  "column": 41,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              1008,
                              1022
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 33
                              },
                              "start": {
                                "column": 41,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1005,
                            1022
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 33
                            },
                            "start": {
                              "column": 38,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        990,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 33
                        },
                        "start": {
                          "column": 23,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    981,
                    1023
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 33
                    },
                    "start": {
                      "column": 14,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 33
                },
                "start": {
                  "column": 13,
                  "line": 33
                }
              }
            },
            "range": [
              969,
              1025
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 33
              },
              "start": {
                "column": 2,
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
            "column": 2,
            "line": 32
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleSchema",
        "optional": false,
        "range": [
          818,
          829
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 27
          },
          "start": {
            "column": 14,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 25,
            "line": 27
          }
        },
        "range": [
          829,
          964
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
                  852,
                  862
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnyTuple",
                      "optional": false,
                      "range": [
                        853,
                        861
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 28
                        },
                        "start": {
                          "column": 22,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      853,
                      861
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 28
                      },
                      "start": {
                        "column": 22,
                        "line": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 21,
                    "line": 28
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Maybe",
                "optional": false,
                "range": [
                  847,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 28
                  },
                  "start": {
                    "column": 16,
                    "line": 28
                  }
                }
              },
              "range": [
                847,
                862
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              }
            },
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnyTuple",
                    "optional": false,
                    "range": [
                      865,
                      873
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 28
                      },
                      "start": {
                        "column": 34,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    865,
                    873
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 28
                    },
                    "start": {
                      "column": 34,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    876,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 28
                    },
                    "start": {
                      "column": 45,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                865,
                885
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 28
                },
                "start": {
                  "column": 34,
                  "line": 28
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "range": [
                833,
                838
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 28
                },
                "start": {
                  "column": 2,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              833,
              885
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
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
                "name": "AnyObject",
                "optional": false,
                "range": [
                  900,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                }
              },
              "range": [
                900,
                909
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                889,
                897
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              889,
              909
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUndefinedKeyword",
              "range": [
                924,
                933
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 13,
                  "line": 30
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDefault",
              "optional": false,
              "range": [
                913,
                921
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              913,
              933
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "range": [
                  952,
                  957
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 31
                  },
                  "start": {
                    "column": 17,
                    "line": 31
                  }
                }
              },
              "range": [
                952,
                957
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 31
                },
                "start": {
                  "column": 17,
                  "line": 31
                }
              }
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  960,
                  962
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 31
                  },
                  "start": {
                    "column": 25,
                    "line": 31
                  }
                }
              },
              "range": [
                960,
                962
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 31
                },
                "start": {
                  "column": 25,
                  "line": 31
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFlags",
              "optional": false,
              "range": [
                937,
                943
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 31
                },
                "start": {
                  "column": 2,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              937,
              962
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        804,
        1027
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1029,
        1172
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "schemas",
                    "optional": false,
                    "range": [
                      1161,
                      1168
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 39
                      },
                      "start": {
                        "column": 40,
                        "line": 39
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TupleSchema",
                  "optional": false,
                  "range": [
                    1134,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1145,
                    1160
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1146,
                              1147
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 39
                              },
                              "start": {
                                "column": 25,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            1146,
                            1147
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 39
                            },
                            "start": {
                              "column": 25,
                              "line": 39
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            1150,
                            1159
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 39
                            },
                            "start": {
                              "column": 29,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        1146,
                        1159
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 39
                        },
                        "start": {
                          "column": 25,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 39
                    },
                    "start": {
                      "column": 24,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1130,
                  1169
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 39
                  },
                  "start": {
                    "column": 9,
                    "line": 39
                  }
                }
              },
              "range": [
                1123,
                1170
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 39
                },
                "start": {
                  "column": 2,
                  "line": 39
                }
              }
            }
          ],
          "range": [
            1119,
            1172
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 40
            },
            "start": {
              "column": 3,
              "line": 38
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "range": [
            1045,
            1051
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 36
            },
            "start": {
              "column": 16,
              "line": 36
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "schemas",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 38
                },
                "start": {
                  "column": 50,
                  "line": 36
                }
              },
              "range": [
                1079,
                1117
              ],
              "typeAnnotation": {
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
                        1097,
                        1098
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 37
                        },
                        "start": {
                          "column": 14,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1097,
                      1098
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 37
                      },
                      "start": {
                        "column": 14,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1091,
                    1098
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1086,
                    1087
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 37
                    },
                    "start": {
                      "column": 3,
                      "line": 37
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1108,
                      1114
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              1111,
                              1112
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 37
                              },
                              "start": {
                                "column": 28,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            1111,
                            1112
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 37
                            },
                            "start": {
                              "column": 28,
                              "line": 37
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
                              1109,
                              1110
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 37
                              },
                              "start": {
                                "column": 26,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            1109,
                            1110
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 37
                            },
                            "start": {
                              "column": 26,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          1109,
                          1113
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 37
                          },
                          "start": {
                            "column": 26,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 37
                      },
                      "start": {
                        "column": 25,
                        "line": 37
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ISchema",
                    "optional": false,
                    "range": [
                      1101,
                      1108
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 37
                      },
                      "start": {
                        "column": 18,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1101,
                    1114
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 37
                    },
                    "start": {
                      "column": 18,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1081,
                  1117
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 38
                  },
                  "start": {
                    "column": 52,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              1072,
              1117
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 38
              },
              "start": {
                "column": 43,
                "line": 36
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 42,
              "line": 36
            },
            "start": {
              "column": 22,
              "line": 36
            }
          },
          "range": [
            1051,
            1071
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
                  "name": "AnyTuple",
                  "optional": false,
                  "range": [
                    1062,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 36
                    },
                    "start": {
                      "column": 33,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1062,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 36
                  },
                  "start": {
                    "column": 33,
                    "line": 36
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
                  1052,
                  1053
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 36
                  },
                  "start": {
                    "column": 23,
                    "line": 36
                  }
                }
              },
              "out": false,
              "range": [
                1052,
                1070
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 36
                },
                "start": {
                  "column": 23,
                  "line": 36
                }
              }
            }
          ]
        },
        "range": [
          1036,
          1172
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
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
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
