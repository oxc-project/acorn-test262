__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    31,
    5440
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Getters",
        "optional": false,
        "range": [
          36,
          43
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "type": "TSIntersectionType",
          "types": [
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
                    63,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 32,
                      "line": 3
                    }
                  }
                },
                "range": [
                  63,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              },
              "range": [
                57,
                64
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                67,
                73
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
            }
          ],
          "range": [
            57,
            73
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
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            52,
            53
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "get",
                "raw": "get"
              },
              "range": [
                77,
                83
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 46,
                  "line": 3
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                96,
                98
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 3
                },
                "start": {
                  "column": 65,
                  "line": 3
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  93,
                  96
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
                        94,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 3
                        },
                        "start": {
                          "column": 63,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      94,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 3
                      },
                      "start": {
                        "column": 63,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "range": [
                  83,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              },
              "range": [
                83,
                96
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            77,
            98
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 80,
                "line": 3
              },
              "start": {
                "column": 73,
                "line": 3
              }
            },
            "range": [
              104,
              111
            ],
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
                    109,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 3
                    },
                    "start": {
                      "column": 78,
                      "line": 3
                    }
                  }
                },
                "range": [
                  109,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 3
                  },
                  "start": {
                    "column": 78,
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
                    107,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 3
                    },
                    "start": {
                      "column": 76,
                      "line": 3
                    }
                  }
                },
                "range": [
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 3
                  },
                  "start": {
                    "column": 76,
                    "line": 3
                  }
                }
              },
              "range": [
                107,
                111
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 3
                },
                "start": {
                  "column": 76,
                  "line": 3
                }
              }
            }
          },
          "range": [
            101,
            111
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 3
            },
            "start": {
              "column": 70,
              "line": 3
            }
          }
        },
        "range": [
          49,
          113
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          43,
          46
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
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              44,
              45
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        31,
        114
      ],
      "loc": {
        "end": {
          "column": 83,
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
        "name": "TG1",
        "optional": false,
        "range": [
          120,
          123
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            133,
            184
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      136,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
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
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    },
                    "range": [
                      139,
                      147
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        141,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    136,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
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
                      149,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
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
                        "column": 45,
                        "line": 4
                      },
                      "start": {
                        "column": 37,
                        "line": 4
                      }
                    },
                    "range": [
                      152,
                      160
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        154,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 4
                        },
                        "start": {
                          "column": 39,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    149,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "range": [
                      162,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
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
                        "column": 66,
                        "line": 4
                      },
                      "start": {
                        "column": 50,
                        "line": 4
                      }
                    },
                    "range": [
                      165,
                      181
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
                            "name": "z",
                            "optional": false,
                            "range": [
                              169,
                              170
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 4
                              },
                              "start": {
                                "column": 54,
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
                                "column": 64,
                                "line": 4
                              },
                              "start": {
                                "column": 55,
                                "line": 4
                              }
                            },
                            "range": [
                              170,
                              179
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                172,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 4
                                },
                                "start": {
                                  "column": 57,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            169,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 4
                            },
                            "start": {
                              "column": 54,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        167,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 4
                        },
                        "start": {
                          "column": 52,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    162,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 4
                    },
                    "start": {
                      "column": 47,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                134,
                183
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 4
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Getters",
          "optional": false,
          "range": [
            126,
            133
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 11,
              "line": 4
            }
          }
        },
        "range": [
          126,
          184
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "range": [
        115,
        185
      ],
      "loc": {
        "end": {
          "column": 70,
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
        "name": "PropDef",
        "optional": false,
        "range": [
          262,
          269
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
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
              "name": "name",
              "optional": false,
              "range": [
                298,
                302
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 8
                },
                "start": {
                  "column": 41,
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
                  "column": 48,
                  "line": 8
                },
                "start": {
                  "column": 45,
                  "line": 8
                }
              },
              "range": [
                302,
                305
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    304,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 8
                    },
                    "start": {
                      "column": 47,
                      "line": 8
                    }
                  }
                },
                "range": [
                  304,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 8
                  },
                  "start": {
                    "column": 47,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              298,
              306
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 8
              },
              "start": {
                "column": 41,
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
              "name": "type",
              "optional": false,
              "range": [
                307,
                311
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 8
                },
                "start": {
                  "column": 50,
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
                  "column": 57,
                  "line": 8
                },
                "start": {
                  "column": 54,
                  "line": 8
                }
              },
              "range": [
                311,
                314
              ],
              "typeAnnotation": {
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
                      "column": 57,
                      "line": 8
                    },
                    "start": {
                      "column": 56,
                      "line": 8
                    }
                  }
                },
                "range": [
                  313,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 8
                  },
                  "start": {
                    "column": 56,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              307,
              314
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 8
              },
              "start": {
                "column": 50,
                "line": 8
              }
            }
          }
        ],
        "range": [
          296,
          316
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 8
          },
          "start": {
            "column": 39,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        },
        "range": [
          269,
          293
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  286,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 8
                  },
                  "start": {
                    "column": 29,
                    "line": 8
                  }
                }
              },
              "range": [
                280,
                289
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
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
                270,
                271
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              270,
              289
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
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
              "name": "T",
              "optional": false,
              "range": [
                291,
                292
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 8
                },
                "start": {
                  "column": 34,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              291,
              292
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 34,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        257,
        317
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 8
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
        "name": "TypeFromDefs",
        "optional": false,
        "range": [
          324,
          336
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
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
                "column": 64,
                "line": 10
              },
              "start": {
                "column": 63,
                "line": 10
              }
            }
          },
          "range": [
            382,
            383
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 10
            },
            "start": {
              "column": 63,
              "line": 10
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            377,
            378
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 10
            },
            "start": {
              "column": 58,
              "line": 10
            }
          }
        },
        "nameType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'name'",
              "value": "name",
              "range": [
                389,
                395
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 10
                },
                "start": {
                  "column": 70,
                  "line": 10
                }
              }
            },
            "range": [
              389,
              395
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 10
              },
              "start": {
                "column": 70,
                "line": 10
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                387,
                388
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 10
                },
                "start": {
                  "column": 68,
                  "line": 10
                }
              }
            },
            "range": [
              387,
              388
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 10
              },
              "start": {
                "column": 68,
                "line": 10
              }
            }
          },
          "range": [
            387,
            396
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 10
            },
            "start": {
              "column": 68,
              "line": 10
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'type'",
              "value": "type",
              "range": [
                401,
                407
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 10
                },
                "start": {
                  "column": 82,
                  "line": 10
                }
              }
            },
            "range": [
              401,
              407
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 10
              },
              "start": {
                "column": 82,
                "line": 10
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                399,
                400
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 10
                },
                "start": {
                  "column": 80,
                  "line": 10
                }
              }
            },
            "range": [
              399,
              400
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 10
              },
              "start": {
                "column": 80,
                "line": 10
              }
            }
          },
          "range": [
            399,
            408
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 10
            },
            "start": {
              "column": 80,
              "line": 10
            }
          }
        },
        "range": [
          374,
          410
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 10
          },
          "start": {
            "column": 55,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        },
        "range": [
          336,
          371
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
                  354,
                  370
                ],
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        361,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 10
                        },
                        "start": {
                          "column": 42,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      355,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 10
                      },
                      "start": {
                        "column": 36,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      366,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 10
                      },
                      "start": {
                        "column": 47,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropDef",
                "optional": false,
                "range": [
                  347,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 28,
                    "line": 10
                  }
                }
              },
              "range": [
                347,
                370
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 10
                },
                "start": {
                  "column": 28,
                  "line": 10
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
                337,
                338
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              337,
              370
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 18,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        319,
        411
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TP1",
        "optional": false,
        "range": [
          418,
          421
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            436,
            526
          ],
          "params": [
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          439,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 12
                          },
                          "start": {
                            "column": 26,
                            "line": 12
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
                            "column": 35,
                            "line": 12
                          },
                          "start": {
                            "column": 30,
                            "line": 12
                          }
                        },
                        "range": [
                          443,
                          448
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              445,
                              448
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 12
                              },
                              "start": {
                                "column": 32,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            445,
                            448
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 12
                            },
                            "start": {
                              "column": 32,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        439,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 12
                        },
                        "start": {
                          "column": 26,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          450,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 12
                          },
                          "start": {
                            "column": 37,
                            "line": 12
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
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 41,
                            "line": 12
                          }
                        },
                        "range": [
                          454,
                          462
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            456,
                            462
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 12
                            },
                            "start": {
                              "column": 43,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        450,
                        462
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 12
                        },
                        "start": {
                          "column": 37,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    437,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 12
                    },
                    "start": {
                      "column": 24,
                      "line": 12
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          469,
                          473
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 12
                          },
                          "start": {
                            "column": 56,
                            "line": 12
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
                            "column": 65,
                            "line": 12
                          },
                          "start": {
                            "column": 60,
                            "line": 12
                          }
                        },
                        "range": [
                          473,
                          478
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'b'",
                            "value": "b",
                            "range": [
                              475,
                              478
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 12
                              },
                              "start": {
                                "column": 62,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            475,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 12
                            },
                            "start": {
                              "column": 62,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        469,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 12
                        },
                        "start": {
                          "column": 56,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          480,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 12
                          },
                          "start": {
                            "column": 67,
                            "line": 12
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
                            "column": 79,
                            "line": 12
                          },
                          "start": {
                            "column": 71,
                            "line": 12
                          }
                        },
                        "range": [
                          484,
                          492
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            486,
                            492
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 12
                            },
                            "start": {
                              "column": 73,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        480,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 12
                        },
                        "start": {
                          "column": 67,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    467,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 12
                    },
                    "start": {
                      "column": 54,
                      "line": 12
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          499,
                          503
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 12
                          },
                          "start": {
                            "column": 86,
                            "line": 12
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
                            "column": 95,
                            "line": 12
                          },
                          "start": {
                            "column": 90,
                            "line": 12
                          }
                        },
                        "range": [
                          503,
                          508
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              505,
                              508
                            ],
                            "loc": {
                              "end": {
                                "column": 95,
                                "line": 12
                              },
                              "start": {
                                "column": 92,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            505,
                            508
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 12
                            },
                            "start": {
                              "column": 92,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        499,
                        509
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 12
                        },
                        "start": {
                          "column": 86,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          510,
                          514
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 12
                          },
                          "start": {
                            "column": 97,
                            "line": 12
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
                            "column": 110,
                            "line": 12
                          },
                          "start": {
                            "column": 101,
                            "line": 12
                          }
                        },
                        "range": [
                          514,
                          523
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            516,
                            523
                          ],
                          "loc": {
                            "end": {
                              "column": 110,
                              "line": 12
                            },
                            "start": {
                              "column": 103,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        510,
                        523
                      ],
                      "loc": {
                        "end": {
                          "column": 110,
                          "line": 12
                        },
                        "start": {
                          "column": 97,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    497,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 112,
                      "line": 12
                    },
                    "start": {
                      "column": 84,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                437,
                525
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 113,
              "line": 12
            },
            "start": {
              "column": 23,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeFromDefs",
          "optional": false,
          "range": [
            424,
            436
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 12
            },
            "start": {
              "column": 11,
              "line": 12
            }
          }
        },
        "range": [
          424,
          526
        ],
        "loc": {
          "end": {
            "column": 113,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 12
          }
        }
      },
      "range": [
        413,
        527
      ],
      "loc": {
        "end": {
          "column": 114,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TA1",
        "optional": false,
        "range": [
          596,
          599
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            609,
            619
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  610,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
                  }
                }
              },
              "range": [
                610,
                618
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 16
            },
            "start": {
              "column": 18,
              "line": 16
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Getters",
          "optional": false,
          "range": [
            602,
            609
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 16
            },
            "start": {
              "column": 11,
              "line": 16
            }
          }
        },
        "range": [
          602,
          619
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 16
          },
          "start": {
            "column": 11,
            "line": 16
          }
        }
      },
      "range": [
        591,
        620
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "name": "TA2",
        "optional": false,
        "range": [
          626,
          629
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            639,
            658
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    641,
                    647
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 20,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    649,
                    656
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                640,
                657
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 17
                },
                "start": {
                  "column": 19,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 17
            },
            "start": {
              "column": 18,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Getters",
          "optional": false,
          "range": [
            632,
            639
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 17
            },
            "start": {
              "column": 11,
              "line": 17
            }
          }
        },
        "range": [
          632,
          658
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        }
      },
      "range": [
        621,
        659
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
        "name": "Methods",
        "optional": false,
        "range": [
          700,
          707
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
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
                727,
                728
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 21
                },
                "start": {
                  "column": 32,
                  "line": 21
                }
              }
            },
            "range": [
              727,
              728
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 21
              },
              "start": {
                "column": 32,
                "line": 21
              }
            }
          },
          "range": [
            721,
            728
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 21
            },
            "start": {
              "column": 26,
              "line": 21
            }
          }
        },
        "key": {
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
              "column": 22,
              "line": 21
            },
            "start": {
              "column": 21,
              "line": 21
            }
          }
        },
        "nameType": {
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
                  734,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 21
                  },
                  "start": {
                    "column": 39,
                    "line": 21
                  }
                }
              },
              "range": [
                734,
                735
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 21
                },
                "start": {
                  "column": 39,
                  "line": 21
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
                  732,
                  733
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 37,
                    "line": 21
                  }
                }
              },
              "range": [
                732,
                733
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 37,
                  "line": 21
                }
              }
            },
            "range": [
              732,
              736
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 21
              },
              "start": {
                "column": 37,
                "line": 21
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                745,
                753
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 21
                },
                "start": {
                  "column": 50,
                  "line": 21
                }
              }
            },
            "range": [
              745,
              753
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 21
              },
              "start": {
                "column": 50,
                "line": 21
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              760,
              765
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 21
              },
              "start": {
                "column": 65,
                "line": 21
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                756,
                757
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 21
                },
                "start": {
                  "column": 61,
                  "line": 21
                }
              }
            },
            "range": [
              756,
              757
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 21
              },
              "start": {
                "column": 61,
                "line": 21
              }
            }
          },
          "range": [
            732,
            765
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 21
            },
            "start": {
              "column": 37,
              "line": 21
            }
          }
        },
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
                770,
                771
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 21
                },
                "start": {
                  "column": 75,
                  "line": 21
                }
              }
            },
            "range": [
              770,
              771
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 21
              },
              "start": {
                "column": 75,
                "line": 21
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
                768,
                769
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 21
                },
                "start": {
                  "column": 73,
                  "line": 21
                }
              }
            },
            "range": [
              768,
              769
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 21
              },
              "start": {
                "column": 73,
                "line": 21
              }
            }
          },
          "range": [
            768,
            772
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 21
            },
            "start": {
              "column": 73,
              "line": 21
            }
          }
        },
        "range": [
          713,
          774
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 21
          },
          "start": {
            "column": 18,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 12,
            "line": 21
          }
        },
        "range": [
          707,
          710
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
                708,
                709
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
              708,
              709
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
          }
        ]
      },
      "range": [
        695,
        775
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TM1",
        "optional": false,
        "range": [
          781,
          784
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            794,
            860
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      797,
                      800
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 22
                      },
                      "start": {
                        "column": 21,
                        "line": 22
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
                        "column": 34,
                        "line": 22
                      },
                      "start": {
                        "column": 26,
                        "line": 22
                      }
                    },
                    "range": [
                      802,
                      810
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        804,
                        810
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 22
                        },
                        "start": {
                          "column": 28,
                          "line": 22
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    797,
                    811
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 22
                    },
                    "start": {
                      "column": 21,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      812,
                      815
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 22
                      },
                      "start": {
                        "column": 36,
                        "line": 22
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 22
                          },
                          "start": {
                            "column": 41,
                            "line": 22
                          }
                        },
                        "range": [
                          817,
                          825
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            819,
                            825
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 22
                            },
                            "start": {
                              "column": 43,
                              "line": 22
                            }
                          }
                        }
                      },
                      "range": [
                        816,
                        825
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 22
                        },
                        "start": {
                          "column": 40,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 22
                      },
                      "start": {
                        "column": 50,
                        "line": 22
                      }
                    },
                    "range": [
                      826,
                      835
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        828,
                        835
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 22
                        },
                        "start": {
                          "column": 52,
                          "line": 22
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    812,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 22
                    },
                    "start": {
                      "column": 36,
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
                    "name": "baz",
                    "optional": false,
                    "range": [
                      837,
                      840
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 22
                      },
                      "start": {
                        "column": 61,
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
                        "column": 81,
                        "line": 22
                      },
                      "start": {
                        "column": 64,
                        "line": 22
                      }
                    },
                    "range": [
                      840,
                      857
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            842,
                            848
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 22
                            },
                            "start": {
                              "column": 66,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            851,
                            857
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 22
                            },
                            "start": {
                              "column": 75,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        842,
                        857
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 22
                        },
                        "start": {
                          "column": 66,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    837,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 22
                    },
                    "start": {
                      "column": 61,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                795,
                859
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 22
                },
                "start": {
                  "column": 19,
                  "line": 22
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 22
            },
            "start": {
              "column": 18,
              "line": 22
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Methods",
          "optional": false,
          "range": [
            787,
            794
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 22
            },
            "start": {
              "column": 11,
              "line": 22
            }
          }
        },
        "range": [
          787,
          860
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 22
          },
          "start": {
            "column": 11,
            "line": 22
          }
        }
      },
      "range": [
        776,
        861
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DoubleProp",
        "optional": false,
        "range": [
          918,
          928
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
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
                    948,
                    949
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 26
                    },
                    "start": {
                      "column": 35,
                      "line": 26
                    }
                  }
                },
                "range": [
                  948,
                  949
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 26
                  },
                  "start": {
                    "column": 35,
                    "line": 26
                  }
                }
              },
              "range": [
                942,
                949
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 26
                },
                "start": {
                  "column": 29,
                  "line": 26
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                952,
                958
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 26
                },
                "start": {
                  "column": 39,
                  "line": 26
                }
              }
            }
          ],
          "range": [
            942,
            958
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 26
            },
            "start": {
              "column": 29,
              "line": 26
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            937,
            938
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 26
            },
            "start": {
              "column": 24,
              "line": 26
            }
          }
        },
        "nameType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    962,
                    965
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 26
                    },
                    "start": {
                      "column": 49,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "1",
                    "raw": "1"
                  },
                  "range": [
                    966,
                    969
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 26
                    },
                    "start": {
                      "column": 53,
                      "line": 26
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      965,
                      966
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 26
                      },
                      "start": {
                        "column": 52,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    965,
                    966
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 26
                    },
                    "start": {
                      "column": 52,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                962,
                969
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 26
                },
                "start": {
                  "column": 49,
                  "line": 26
                }
              }
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    972,
                    975
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 26
                    },
                    "start": {
                      "column": 59,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  },
                  "range": [
                    976,
                    979
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 26
                    },
                    "start": {
                      "column": 63,
                      "line": 26
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      975,
                      976
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 26
                      },
                      "start": {
                        "column": 62,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    975,
                    976
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 26
                    },
                    "start": {
                      "column": 62,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                972,
                979
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 26
                },
                "start": {
                  "column": 59,
                  "line": 26
                }
              }
            }
          ],
          "range": [
            962,
            979
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 26
            },
            "start": {
              "column": 49,
              "line": 26
            }
          }
        },
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
                984,
                985
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 26
                },
                "start": {
                  "column": 71,
                  "line": 26
                }
              }
            },
            "range": [
              984,
              985
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 26
              },
              "start": {
                "column": 71,
                "line": 26
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
                982,
                983
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 26
                },
                "start": {
                  "column": 69,
                  "line": 26
                }
              }
            },
            "range": [
              982,
              983
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 26
              },
              "start": {
                "column": 69,
                "line": 26
              }
            }
          },
          "range": [
            982,
            986
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 26
            },
            "start": {
              "column": 69,
              "line": 26
            }
          }
        },
        "range": [
          934,
          988
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 26
          },
          "start": {
            "column": 21,
            "line": 26
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 26
          },
          "start": {
            "column": 15,
            "line": 26
          }
        },
        "range": [
          928,
          931
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
                929,
                930
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 26
                },
                "start": {
                  "column": 16,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              929,
              930
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 26
              },
              "start": {
                "column": 16,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        913,
        988
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD1",
        "optional": false,
        "range": [
          994,
          997
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1010,
            1036
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1013,
                      1014
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 27
                      },
                      "start": {
                        "column": 24,
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
                        "column": 33,
                        "line": 27
                      },
                      "start": {
                        "column": 25,
                        "line": 27
                      }
                    },
                    "range": [
                      1014,
                      1022
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1016,
                        1022
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 27
                        },
                        "start": {
                          "column": 27,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    1013,
                    1023
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 27
                    },
                    "start": {
                      "column": 24,
                      "line": 27
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
                      1024,
                      1025
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 27
                      },
                      "start": {
                        "column": 35,
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
                        "column": 44,
                        "line": 27
                      },
                      "start": {
                        "column": 36,
                        "line": 27
                      }
                    },
                    "range": [
                      1025,
                      1033
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1027,
                        1033
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 27
                        },
                        "start": {
                          "column": 38,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    1024,
                    1033
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 27
                    },
                    "start": {
                      "column": 35,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                1011,
                1035
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 27
            },
            "start": {
              "column": 21,
              "line": 27
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DoubleProp",
          "optional": false,
          "range": [
            1000,
            1010
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 27
            },
            "start": {
              "column": 11,
              "line": 27
            }
          }
        },
        "range": [
          1000,
          1036
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 27
          },
          "start": {
            "column": 11,
            "line": 27
          }
        }
      },
      "range": [
        989,
        1037
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD2",
        "optional": false,
        "range": [
          1098,
          1101
        ],
        "loc": {
          "end": {
            "column": 8,
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
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TD1",
            "optional": false,
            "range": [
              1110,
              1113
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 28
              },
              "start": {
                "column": 17,
                "line": 28
              }
            }
          },
          "range": [
            1110,
            1113
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 28
            },
            "start": {
              "column": 17,
              "line": 28
            }
          }
        },
        "range": [
          1104,
          1113
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 28
          },
          "start": {
            "column": 11,
            "line": 28
          }
        }
      },
      "range": [
        1093,
        1114
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD3",
        "optional": false,
        "range": [
          1150,
          1153
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
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
              1175,
              1178
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    1176,
                    1177
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 31,
                      "line": 29
                    }
                  }
                },
                "range": [
                  1176,
                  1177
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 29
                  },
                  "start": {
                    "column": 31,
                    "line": 29
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 29
              },
              "start": {
                "column": 30,
                "line": 29
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DoubleProp",
            "optional": false,
            "range": [
              1165,
              1175
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 29
              },
              "start": {
                "column": 20,
                "line": 29
              }
            }
          },
          "range": [
            1165,
            1178
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 29
            },
            "start": {
              "column": 20,
              "line": 29
            }
          }
        },
        "range": [
          1159,
          1178
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 29
          },
          "start": {
            "column": 14,
            "line": 29
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 29
          },
          "start": {
            "column": 8,
            "line": 29
          }
        },
        "range": [
          1153,
          1156
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1154,
                1155
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              1154,
              1155
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 29
              },
              "start": {
                "column": 9,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        1145,
        1179
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD4",
        "optional": false,
        "range": [
          1208,
          1211
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1217,
            1243
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1220,
                      1221
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 30
                      },
                      "start": {
                        "column": 17,
                        "line": 30
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
                        "column": 26,
                        "line": 30
                      },
                      "start": {
                        "column": 18,
                        "line": 30
                      }
                    },
                    "range": [
                      1221,
                      1229
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1223,
                        1229
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 30
                        },
                        "start": {
                          "column": 20,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    1220,
                    1230
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 30
                    },
                    "start": {
                      "column": 17,
                      "line": 30
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
                      1231,
                      1232
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 28,
                        "line": 30
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
                        "column": 37,
                        "line": 30
                      },
                      "start": {
                        "column": 29,
                        "line": 30
                      }
                    },
                    "range": [
                      1232,
                      1240
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1234,
                        1240
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 30
                        },
                        "start": {
                          "column": 31,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    1231,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 30
                    },
                    "start": {
                      "column": 28,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                1218,
                1242
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 30
                },
                "start": {
                  "column": 15,
                  "line": 30
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 30
            },
            "start": {
              "column": 14,
              "line": 30
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TD3",
          "optional": false,
          "range": [
            1214,
            1217
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 30
            },
            "start": {
              "column": 11,
              "line": 30
            }
          }
        },
        "range": [
          1214,
          1243
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 30
          },
          "start": {
            "column": 11,
            "line": 30
          }
        }
      },
      "range": [
        1203,
        1244
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lazyify",
        "optional": false,
        "range": [
          1303,
          1310
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
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
                1334,
                1335
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 35
                },
                "start": {
                  "column": 16,
                  "line": 35
                }
              }
            },
            "range": [
              1334,
              1335
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 35
              },
              "start": {
                "column": 16,
                "line": 35
              }
            }
          },
          "range": [
            1328,
            1335
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 35
            },
            "start": {
              "column": 10,
              "line": 35
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            1323,
            1324
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 35
            },
            "start": {
              "column": 5,
              "line": 35
            }
          }
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "get",
                "raw": "get"
              },
              "range": [
                1339,
                1345
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 35
                },
                "start": {
                  "column": 21,
                  "line": 35
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                1367,
                1369
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 35
                },
                "start": {
                  "column": 49,
                  "line": 35
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1355,
                  1367
                ],
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            1356,
                            1357
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 35
                            },
                            "start": {
                              "column": 38,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1356,
                          1357
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 35
                          },
                          "start": {
                            "column": 38,
                            "line": 35
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1360,
                          1366
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 35
                          },
                          "start": {
                            "column": 42,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "range": [
                      1356,
                      1366
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 35
                      },
                      "start": {
                        "column": 38,
                        "line": 35
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 35
                  },
                  "start": {
                    "column": 37,
                    "line": 35
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "range": [
                  1345,
                  1355
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 35
                  },
                  "start": {
                    "column": 27,
                    "line": 35
                  }
                }
              },
              "range": [
                1345,
                1367
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 35
                },
                "start": {
                  "column": 27,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            1339,
            1369
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 35
            },
            "start": {
              "column": 21,
              "line": 35
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 35
              },
              "start": {
                "column": 57,
                "line": 35
              }
            },
            "range": [
              1375,
              1382
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1380,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 35
                    },
                    "start": {
                      "column": 62,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1380,
                  1381
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 35
                  },
                  "start": {
                    "column": 62,
                    "line": 35
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
                    1378,
                    1379
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 35
                    },
                    "start": {
                      "column": 60,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1378,
                  1379
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 35
                  },
                  "start": {
                    "column": 60,
                    "line": 35
                  }
                }
              },
              "range": [
                1378,
                1382
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 35
                },
                "start": {
                  "column": 60,
                  "line": 35
                }
              }
            }
          },
          "range": [
            1372,
            1382
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 35
            },
            "start": {
              "column": 54,
              "line": 35
            }
          }
        },
        "range": [
          1316,
          1384
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 18,
            "line": 34
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 34
          },
          "start": {
            "column": 12,
            "line": 34
          }
        },
        "range": [
          1310,
          1313
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
                1311,
                1312
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              1311,
              1312
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 34
              },
              "start": {
                "column": 13,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        1298,
        1385
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1404,
          1474
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                1419,
                1423
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 39
                },
                "start": {
                  "column": 13,
                  "line": 39
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 39
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              },
              "range": [
                1423,
                1431
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1425,
                  1431
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 39
                  },
                  "start": {
                    "column": 19,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              1410,
              1432
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "range": [
                1437,
                1440
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
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
                  "line": 40
                },
                "start": {
                  "column": 7,
                  "line": 40
                }
              },
              "range": [
                1440,
                1448
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1442,
                  1448
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 40
                  },
                  "start": {
                    "column": 9,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              1437,
              1449
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "range": [
                1454,
                1462
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
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
                  "column": 21,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 41
                }
              },
              "range": [
                1463,
                1471
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1465,
                  1471
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 41
                  },
                  "start": {
                    "column": 15,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              1454,
              1472
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 17,
            "line": 38
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "range": [
          1397,
          1403
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 38
          },
          "start": {
            "column": 10,
            "line": 38
          }
        }
      },
      "range": [
        1387,
        1474
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LazyPerson",
        "optional": false,
        "range": [
          1481,
          1491
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 44
          },
          "start": {
            "column": 5,
            "line": 44
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1501,
            1509
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Person",
                "optional": false,
                "range": [
                  1502,
                  1508
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 26,
                    "line": 44
                  }
                }
              },
              "range": [
                1502,
                1508
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 26,
                  "line": 44
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 44
            },
            "start": {
              "column": 25,
              "line": 44
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lazyify",
          "optional": false,
          "range": [
            1494,
            1501
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 44
            },
            "start": {
              "column": 18,
              "line": 44
            }
          }
        },
        "range": [
          1494,
          1509
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 44
          },
          "start": {
            "column": 18,
            "line": 44
          }
        }
      },
      "range": [
        1476,
        1510
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "range": [
          1539,
          1546
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 48
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
              "name": "foo",
              "optional": false,
              "range": [
                1550,
                1553
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 48
                },
                "start": {
                  "column": 16,
                  "line": 48
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
                  "column": 27,
                  "line": 48
                },
                "start": {
                  "column": 19,
                  "line": 48
                }
              },
              "range": [
                1553,
                1561
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1555,
                  1561
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 48
                  },
                  "start": {
                    "column": 21,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1550,
              1562
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 48
              },
              "start": {
                "column": 16,
                "line": 48
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
                1563,
                1566
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 48
                },
                "start": {
                  "column": 29,
                  "line": 48
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
                  "column": 40,
                  "line": 48
                },
                "start": {
                  "column": 32,
                  "line": 48
                }
              },
              "range": [
                1566,
                1574
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1568,
                  1574
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 48
                  },
                  "start": {
                    "column": 34,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1563,
              1574
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 48
              },
              "start": {
                "column": 29,
                "line": 48
              }
            }
          }
        ],
        "range": [
          1549,
          1575
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 48
          },
          "start": {
            "column": 15,
            "line": 48
          }
        }
      },
      "range": [
        1534,
        1576
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PickByValueType",
        "optional": false,
        "range": [
          1583,
          1598
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
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
                1623,
                1624
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 51
                },
                "start": {
                  "column": 14,
                  "line": 51
                }
              }
            },
            "range": [
              1623,
              1624
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 51
              },
              "start": {
                "column": 14,
                "line": 51
              }
            }
          },
          "range": [
            1617,
            1624
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 51
            },
            "start": {
              "column": 8,
              "line": 51
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            1612,
            1613
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 51
            },
            "start": {
              "column": 3,
              "line": 51
            }
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1630,
                  1631
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 51
                  },
                  "start": {
                    "column": 21,
                    "line": 51
                  }
                }
              },
              "range": [
                1630,
                1631
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 51
                },
                "start": {
                  "column": 21,
                  "line": 51
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
                  1628,
                  1629
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 51
                  },
                  "start": {
                    "column": 19,
                    "line": 51
                  }
                }
              },
              "range": [
                1628,
                1629
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 51
                },
                "start": {
                  "column": 19,
                  "line": 51
                }
              }
            },
            "range": [
              1628,
              1632
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 51
              },
              "start": {
                "column": 19,
                "line": 51
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1641,
                1642
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 51
                },
                "start": {
                  "column": 32,
                  "line": 51
                }
              }
            },
            "range": [
              1641,
              1642
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 51
              },
              "start": {
                "column": 32,
                "line": 51
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1649,
              1654
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 51
              },
              "start": {
                "column": 40,
                "line": 51
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1645,
                1646
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 51
                },
                "start": {
                  "column": 36,
                  "line": 51
                }
              }
            },
            "range": [
              1645,
              1646
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 51
              },
              "start": {
                "column": 36,
                "line": 51
              }
            }
          },
          "range": [
            1628,
            1654
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 51
            },
            "start": {
              "column": 19,
              "line": 51
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1659,
                1660
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 51
                },
                "start": {
                  "column": 50,
                  "line": 51
                }
              }
            },
            "range": [
              1659,
              1660
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 51
              },
              "start": {
                "column": 50,
                "line": 51
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
                1657,
                1658
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 51
                },
                "start": {
                  "column": 48,
                  "line": 51
                }
              }
            },
            "range": [
              1657,
              1658
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 51
              },
              "start": {
                "column": 48,
                "line": 51
              }
            }
          },
          "range": [
            1657,
            1661
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 51
            },
            "start": {
              "column": 48,
              "line": 51
            }
          }
        },
        "range": [
          1607,
          1663
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 29,
            "line": 50
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 50
          },
          "start": {
            "column": 20,
            "line": 50
          }
        },
        "range": [
          1598,
          1604
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
                1599,
                1600
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 50
                },
                "start": {
                  "column": 21,
                  "line": 50
                }
              }
            },
            "out": false,
            "range": [
              1599,
              1600
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 50
              },
              "start": {
                "column": 21,
                "line": 50
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
              "name": "U",
              "optional": false,
              "range": [
                1602,
                1603
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 50
                },
                "start": {
                  "column": 24,
                  "line": 50
                }
              }
            },
            "out": false,
            "range": [
              1602,
              1603
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 50
              },
              "start": {
                "column": 24,
                "line": 50
              }
            }
          }
        ]
      },
      "range": [
        1578,
        1664
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          1671,
          1673
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 54
          },
          "start": {
            "column": 5,
            "line": 54
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1691,
            1708
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "range": [
                  1692,
                  1699
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 54
                  },
                  "start": {
                    "column": 26,
                    "line": 54
                  }
                }
              },
              "range": [
                1692,
                1699
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 54
                },
                "start": {
                  "column": 26,
                  "line": 54
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                1701,
                1707
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 54
                },
                "start": {
                  "column": 35,
                  "line": 54
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 54
            },
            "start": {
              "column": 25,
              "line": 54
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "PickByValueType",
          "optional": false,
          "range": [
            1676,
            1691
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 54
            },
            "start": {
              "column": 10,
              "line": 54
            }
          }
        },
        "range": [
          1676,
          1708
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 54
          },
          "start": {
            "column": 10,
            "line": 54
          }
        }
      },
      "range": [
        1666,
        1709
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 55
                },
                "start": {
                  "column": 8,
                  "line": 55
                }
              },
              "range": [
                1718,
                1722
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "range": [
                    1720,
                    1722
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 55
                    },
                    "start": {
                      "column": 10,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1720,
                  1722
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 55
                  },
                  "start": {
                    "column": 10,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1716,
              1722
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 55
              },
              "start": {
                "column": 6,
                "line": 55
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    1731,
                    1734
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    1736,
                    1743
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 56
                    },
                    "start": {
                      "column": 9,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1731,
                  1743
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              }
            ],
            "range": [
              1725,
              1745
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 57
              },
              "start": {
                "column": 15,
                "line": 55
              }
            }
          },
          "range": [
            1716,
            1745
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1710,
        1746
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          1752,
          1754
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 58
          },
          "start": {
            "column": 5,
            "line": 58
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "range": [
              1763,
              1765
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 58
              },
              "start": {
                "column": 16,
                "line": 58
              }
            }
          },
          "range": [
            1763,
            1765
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 58
            },
            "start": {
              "column": 16,
              "line": 58
            }
          }
        },
        "range": [
          1757,
          1765
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 58
          },
          "start": {
            "column": 10,
            "line": 58
          }
        }
      },
      "range": [
        1747,
        1766
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 59
                },
                "start": {
                  "column": 8,
                  "line": 59
                }
              },
              "range": [
                1775,
                1779
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "range": [
                    1777,
                    1779
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 59
                    },
                    "start": {
                      "column": 10,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1777,
                  1779
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 59
                  },
                  "start": {
                    "column": 10,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1773,
              1779
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 59
              },
              "start": {
                "column": 6,
                "line": 59
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              1782,
              1787
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 59
              },
              "start": {
                "column": 15,
                "line": 59
              }
            }
          },
          "range": [
            1773,
            1787
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1767,
        1788
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1826,
          1907
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                1832,
                1836
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
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
                  "line": 64
                },
                "start": {
                  "column": 8,
                  "line": 64
                }
              },
              "range": [
                1836,
                1844
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1838,
                  1844
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 64
                  },
                  "start": {
                    "column": 10,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              1832,
              1845
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "seats",
              "optional": false,
              "range": [
                1850,
                1855
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
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
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              },
              "range": [
                1855,
                1863
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1857,
                  1863
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1850,
              1864
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
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "engine",
              "optional": false,
              "range": [
                1869,
                1875
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
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
                  "column": 18,
                  "line": 66
                },
                "start": {
                  "column": 10,
                  "line": 66
                }
              },
              "range": [
                1875,
                1883
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Engine",
                  "optional": false,
                  "range": [
                    1877,
                    1883
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 66
                    },
                    "start": {
                      "column": 12,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1877,
                  1883
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 66
                  },
                  "start": {
                    "column": 12,
                    "line": 66
                  }
                }
              }
            },
            "range": [
              1869,
              1884
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wheels",
              "optional": false,
              "range": [
                1889,
                1895
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
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
                  "column": 19,
                  "line": 67
                },
                "start": {
                  "column": 10,
                  "line": 67
                }
              },
              "range": [
                1895,
                1904
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Wheel",
                    "optional": false,
                    "range": [
                      1897,
                      1902
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 67
                      },
                      "start": {
                        "column": 12,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1897,
                    1902
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 67
                    },
                    "start": {
                      "column": 12,
                      "line": 67
                    }
                  }
                },
                "range": [
                  1897,
                  1904
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 67
                  },
                  "start": {
                    "column": 12,
                    "line": 67
                  }
                }
              }
            },
            "range": [
              1889,
              1905
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 67
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
            "line": 68
          },
          "start": {
            "column": 14,
            "line": 63
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Car",
        "optional": false,
        "range": [
          1822,
          1825
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 63
          },
          "start": {
            "column": 10,
            "line": 63
          }
        }
      },
      "range": [
        1812,
        1907
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1926,
          1979
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "manufacturer",
              "optional": false,
              "range": [
                1932,
                1944
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
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
                  "line": 71
                },
                "start": {
                  "column": 16,
                  "line": 71
                }
              },
              "range": [
                1944,
                1952
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1946,
                  1952
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 71
                  },
                  "start": {
                    "column": 18,
                    "line": 71
                  }
                }
              }
            },
            "range": [
              1932,
              1953
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "horsepower",
              "optional": false,
              "range": [
                1958,
                1968
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
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
                  "column": 22,
                  "line": 72
                },
                "start": {
                  "column": 14,
                  "line": 72
                }
              },
              "range": [
                1968,
                1976
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1970,
                  1976
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 72
                  },
                  "start": {
                    "column": 16,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1958,
              1977
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 17,
            "line": 70
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Engine",
        "optional": false,
        "range": [
          1919,
          1925
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 70
          },
          "start": {
            "column": 10,
            "line": 70
          }
        }
      },
      "range": [
        1909,
        1979
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1997,
          2051
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                2003,
                2007
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
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
                  "column": 29,
                  "line": 76
                },
                "start": {
                  "column": 8,
                  "line": 76
                }
              },
              "range": [
                2007,
                2028
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"summer\"",
                      "value": "summer",
                      "range": [
                        2009,
                        2017
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 76
                        },
                        "start": {
                          "column": 10,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      2009,
                      2017
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 76
                      },
                      "start": {
                        "column": 10,
                        "line": 76
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"winter\"",
                      "value": "winter",
                      "range": [
                        2020,
                        2028
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 76
                        },
                        "start": {
                          "column": 21,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      2020,
                      2028
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 76
                      },
                      "start": {
                        "column": 21,
                        "line": 76
                      }
                    }
                  }
                ],
                "range": [
                  2009,
                  2028
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 76
                  },
                  "start": {
                    "column": 10,
                    "line": 76
                  }
                }
              }
            },
            "range": [
              2003,
              2029
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "range": [
                2034,
                2040
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
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
                  "column": 18,
                  "line": 77
                },
                "start": {
                  "column": 10,
                  "line": 77
                }
              },
              "range": [
                2040,
                2048
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2042,
                  2048
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 77
                  },
                  "start": {
                    "column": 12,
                    "line": 77
                  }
                }
              }
            },
            "range": [
              2034,
              2049
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 16,
            "line": 75
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wheel",
        "optional": false,
        "range": [
          1991,
          1996
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 75
          },
          "start": {
            "column": 10,
            "line": 75
          }
        }
      },
      "range": [
        1981,
        2051
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Primitive",
        "optional": false,
        "range": [
          2058,
          2067
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 80
          },
          "start": {
            "column": 5,
            "line": 80
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              2070,
              2076
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 80
              },
              "start": {
                "column": 17,
                "line": 80
              }
            }
          },
          {
            "type": "TSNumberKeyword",
            "range": [
              2079,
              2085
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 80
              },
              "start": {
                "column": 26,
                "line": 80
              }
            }
          },
          {
            "type": "TSBooleanKeyword",
            "range": [
              2088,
              2095
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 80
              },
              "start": {
                "column": 35,
                "line": 80
              }
            }
          }
        ],
        "range": [
          2070,
          2095
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 80
          },
          "start": {
            "column": 17,
            "line": 80
          }
        }
      },
      "range": [
        2053,
        2096
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OnlyPrimitives",
        "optional": false,
        "range": [
          2102,
          2116
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 81
          },
          "start": {
            "column": 5,
            "line": 81
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
                2136,
                2137
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 81
                },
                "start": {
                  "column": 39,
                  "line": 81
                }
              }
            },
            "range": [
              2136,
              2137
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 81
              },
              "start": {
                "column": 39,
                "line": 81
              }
            }
          },
          "range": [
            2130,
            2137
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 81
            },
            "start": {
              "column": 33,
              "line": 81
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            2125,
            2126
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 81
            },
            "start": {
              "column": 28,
              "line": 81
            }
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  2143,
                  2144
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 81
                  },
                  "start": {
                    "column": 46,
                    "line": 81
                  }
                }
              },
              "range": [
                2143,
                2144
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 81
                },
                "start": {
                  "column": 46,
                  "line": 81
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
                  2141,
                  2142
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 81
                  },
                  "start": {
                    "column": 44,
                    "line": 81
                  }
                }
              },
              "range": [
                2141,
                2142
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 81
                },
                "start": {
                  "column": 44,
                  "line": 81
                }
              }
            },
            "range": [
              2141,
              2145
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 81
              },
              "start": {
                "column": 44,
                "line": 81
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Primitive",
              "optional": false,
              "range": [
                2154,
                2163
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 81
                },
                "start": {
                  "column": 57,
                  "line": 81
                }
              }
            },
            "range": [
              2154,
              2163
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 81
              },
              "start": {
                "column": 57,
                "line": 81
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              2170,
              2175
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 81
              },
              "start": {
                "column": 73,
                "line": 81
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                2166,
                2167
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 81
                },
                "start": {
                  "column": 69,
                  "line": 81
                }
              }
            },
            "range": [
              2166,
              2167
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 81
              },
              "start": {
                "column": 69,
                "line": 81
              }
            }
          },
          "range": [
            2141,
            2175
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 81
            },
            "start": {
              "column": 44,
              "line": 81
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                2180,
                2181
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 81
                },
                "start": {
                  "column": 83,
                  "line": 81
                }
              }
            },
            "range": [
              2180,
              2181
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 81
              },
              "start": {
                "column": 83,
                "line": 81
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
                2178,
                2179
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 81
                },
                "start": {
                  "column": 81,
                  "line": 81
                }
              }
            },
            "range": [
              2178,
              2179
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 81
              },
              "start": {
                "column": 81,
                "line": 81
              }
            }
          },
          "range": [
            2178,
            2182
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 81
            },
            "start": {
              "column": 81,
              "line": 81
            }
          }
        },
        "range": [
          2122,
          2184
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 81
          },
          "start": {
            "column": 25,
            "line": 81
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 81
          },
          "start": {
            "column": 19,
            "line": 81
          }
        },
        "range": [
          2116,
          2119
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
                2117,
                2118
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 81
                },
                "start": {
                  "column": 20,
                  "line": 81
                }
              }
            },
            "out": false,
            "range": [
              2117,
              2118
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 81
              },
              "start": {
                "column": 20,
                "line": 81
              }
            }
          }
        ]
      },
      "range": [
        2097,
        2185
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
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
            "name": "primitiveCar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 83
                },
                "start": {
                  "column": 16,
                  "line": 83
                }
              },
              "range": [
                2203,
                2224
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2219,
                    2224
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Car",
                        "optional": false,
                        "range": [
                          2220,
                          2223
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 83
                          },
                          "start": {
                            "column": 33,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        2220,
                        2223
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 83
                        },
                        "start": {
                          "column": 33,
                          "line": 83
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 83
                    },
                    "start": {
                      "column": 32,
                      "line": 83
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OnlyPrimitives",
                  "optional": false,
                  "range": [
                    2205,
                    2219
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 83
                    },
                    "start": {
                      "column": 18,
                      "line": 83
                    }
                  }
                },
                "range": [
                  2205,
                  2224
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 83
                  },
                  "start": {
                    "column": 18,
                    "line": 83
                  }
                }
              }
            },
            "range": [
              2191,
              2224
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          },
          "init": null,
          "range": [
            2191,
            2224
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 83
            },
            "start": {
              "column": 4,
              "line": 83
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2187,
        2225
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
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
            "name": "keys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 84
                },
                "start": {
                  "column": 8,
                  "line": 84
                }
              },
              "range": [
                2271,
                2298
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2293,
                      2298
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Car",
                          "optional": false,
                          "range": [
                            2294,
                            2297
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 84
                            },
                            "start": {
                              "column": 31,
                              "line": 84
                            }
                          }
                        },
                        "range": [
                          2294,
                          2297
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 84
                          },
                          "start": {
                            "column": 31,
                            "line": 84
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 84
                      },
                      "start": {
                        "column": 30,
                        "line": 84
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnlyPrimitives",
                    "optional": false,
                    "range": [
                      2279,
                      2293
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 84
                      },
                      "start": {
                        "column": 16,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2279,
                    2298
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 84
                    },
                    "start": {
                      "column": 16,
                      "line": 84
                    }
                  }
                },
                "range": [
                  2273,
                  2298
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 84
                  },
                  "start": {
                    "column": 10,
                    "line": 84
                  }
                }
              }
            },
            "range": [
              2267,
              2298
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          "init": null,
          "range": [
            2267,
            2298
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 84
            },
            "start": {
              "column": 4,
              "line": 84
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2263,
        2299
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeysOfPrimitives",
        "optional": false,
        "range": [
          2328,
          2344
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 86
          },
          "start": {
            "column": 5,
            "line": 86
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
              2370,
              2373
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
                    2371,
                    2372
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 86
                    },
                    "start": {
                      "column": 48,
                      "line": 86
                    }
                  }
                },
                "range": [
                  2371,
                  2372
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 86
                  },
                  "start": {
                    "column": 48,
                    "line": 86
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 86
              },
              "start": {
                "column": 47,
                "line": 86
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnlyPrimitives",
            "optional": false,
            "range": [
              2356,
              2370
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 86
              },
              "start": {
                "column": 33,
                "line": 86
              }
            }
          },
          "range": [
            2356,
            2373
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 86
            },
            "start": {
              "column": 33,
              "line": 86
            }
          }
        },
        "range": [
          2350,
          2373
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 86
          },
          "start": {
            "column": 27,
            "line": 86
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 86
          },
          "start": {
            "column": 21,
            "line": 86
          }
        },
        "range": [
          2344,
          2347
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
                2345,
                2346
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 86
                },
                "start": {
                  "column": 22,
                  "line": 86
                }
              }
            },
            "out": false,
            "range": [
              2345,
              2346
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 86
              },
              "start": {
                "column": 22,
                "line": 86
              }
            }
          }
        ]
      },
      "range": [
        2323,
        2374
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
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
            "name": "carKeys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 88
                },
                "start": {
                  "column": 11,
                  "line": 88
                }
              },
              "range": [
                2387,
                2410
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2405,
                    2410
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Car",
                        "optional": false,
                        "range": [
                          2406,
                          2409
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 88
                          },
                          "start": {
                            "column": 30,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        2406,
                        2409
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 88
                        },
                        "start": {
                          "column": 30,
                          "line": 88
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 88
                    },
                    "start": {
                      "column": 29,
                      "line": 88
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KeysOfPrimitives",
                  "optional": false,
                  "range": [
                    2389,
                    2405
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 88
                    },
                    "start": {
                      "column": 13,
                      "line": 88
                    }
                  }
                },
                "range": [
                  2389,
                  2410
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 88
                  },
                  "start": {
                    "column": 13,
                    "line": 88
                  }
                }
              }
            },
            "range": [
              2380,
              2410
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          "init": null,
          "range": [
            2380,
            2410
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 88
            },
            "start": {
              "column": 4,
              "line": 88
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2376,
        2411
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Equal",
        "optional": false,
        "range": [
          2461,
          2466
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 92
          },
          "start": {
            "column": 5,
            "line": 92
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 92
              },
              "start": {
                "column": 26,
                "line": 92
              }
            },
            "range": [
              2482,
              2504
            ],
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
                    2485,
                    2486
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 92
                    },
                    "start": {
                      "column": 29,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2485,
                  2486
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 92
                  },
                  "start": {
                    "column": 29,
                    "line": 92
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    2495,
                    2496
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 92
                    },
                    "start": {
                      "column": 39,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2495,
                  2496
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 92
                  },
                  "start": {
                    "column": 39,
                    "line": 92
                  }
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2503,
                    2504
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 92
                    },
                    "start": {
                      "column": 47,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2503,
                  2504
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 92
                  },
                  "start": {
                    "column": 47,
                    "line": 92
                  }
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2499,
                    2500
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 92
                    },
                    "start": {
                      "column": 43,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2499,
                  2500
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 92
                  },
                  "start": {
                    "column": 43,
                    "line": 92
                  }
                }
              },
              "range": [
                2485,
                2504
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 92
                },
                "start": {
                  "column": 29,
                  "line": 92
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 23,
                "line": 92
              },
              "start": {
                "column": 20,
                "line": 92
              }
            },
            "range": [
              2476,
              2479
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
                    2477,
                    2478
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 92
                    },
                    "start": {
                      "column": 21,
                      "line": 92
                    }
                  }
                },
                "out": false,
                "range": [
                  2477,
                  2478
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 92
                  },
                  "start": {
                    "column": 21,
                    "line": 92
                  }
                }
              }
            ]
          },
          "range": [
            2476,
            2504
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 92
            },
            "start": {
              "column": 20,
              "line": 92
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 87,
                "line": 92
              },
              "start": {
                "column": 65,
                "line": 92
              }
            },
            "range": [
              2521,
              2543
            ],
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
                    2524,
                    2525
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 92
                    },
                    "start": {
                      "column": 68,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2524,
                  2525
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 92
                  },
                  "start": {
                    "column": 68,
                    "line": 92
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    2534,
                    2535
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 92
                    },
                    "start": {
                      "column": 78,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2534,
                  2535
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 92
                  },
                  "start": {
                    "column": 78,
                    "line": 92
                  }
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2542,
                    2543
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 92
                    },
                    "start": {
                      "column": 86,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2542,
                  2543
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 92
                  },
                  "start": {
                    "column": 86,
                    "line": 92
                  }
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2538,
                    2539
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 92
                    },
                    "start": {
                      "column": 82,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2538,
                  2539
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 92
                  },
                  "start": {
                    "column": 82,
                    "line": 92
                  }
                }
              },
              "range": [
                2524,
                2543
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 92
                },
                "start": {
                  "column": 68,
                  "line": 92
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 62,
                "line": 92
              },
              "start": {
                "column": 59,
                "line": 92
              }
            },
            "range": [
              2515,
              2518
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
                    2516,
                    2517
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 92
                    },
                    "start": {
                      "column": 60,
                      "line": 92
                    }
                  }
                },
                "out": false,
                "range": [
                  2516,
                  2517
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 92
                  },
                  "start": {
                    "column": 60,
                    "line": 92
                  }
                }
              }
            ]
          },
          "range": [
            2515,
            2543
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 92
            },
            "start": {
              "column": 59,
              "line": 92
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              2554,
              2559
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 92
              },
              "start": {
                "column": 98,
                "line": 92
              }
            }
          },
          "range": [
            2554,
            2559
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 92
            },
            "start": {
              "column": 98,
              "line": 92
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              2547,
              2551
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 92
              },
              "start": {
                "column": 91,
                "line": 92
              }
            }
          },
          "range": [
            2547,
            2551
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 92
            },
            "start": {
              "column": 91,
              "line": 92
            }
          }
        },
        "range": [
          2475,
          2559
        ],
        "loc": {
          "end": {
            "column": 103,
            "line": 92
          },
          "start": {
            "column": 19,
            "line": 92
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 92
          },
          "start": {
            "column": 10,
            "line": 92
          }
        },
        "range": [
          2466,
          2472
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                2467,
                2468
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 92
                },
                "start": {
                  "column": 11,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              2467,
              2468
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 92
              },
              "start": {
                "column": 11,
                "line": 92
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
              "name": "B",
              "optional": false,
              "range": [
                2470,
                2471
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 92
                },
                "start": {
                  "column": 14,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              2470,
              2471
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 92
              },
              "start": {
                "column": 14,
                "line": 92
              }
            }
          }
        ]
      },
      "range": [
        2456,
        2560
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "If",
        "optional": false,
        "range": [
          2567,
          2569
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 94
          },
          "start": {
            "column": 5,
            "line": 94
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
            "name": "Cond",
            "optional": false,
            "range": [
              2606,
              2610
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 94
              },
              "start": {
                "column": 44,
                "line": 94
              }
            }
          },
          "range": [
            2606,
            2610
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 94
            },
            "start": {
              "column": 44,
              "line": 94
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              2619,
              2623
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 94
              },
              "start": {
                "column": 57,
                "line": 94
              }
            }
          },
          "range": [
            2619,
            2623
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 94
            },
            "start": {
              "column": 57,
              "line": 94
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Else",
            "optional": false,
            "range": [
              2633,
              2637
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 94
              },
              "start": {
                "column": 71,
                "line": 94
              }
            }
          },
          "range": [
            2633,
            2637
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 94
            },
            "start": {
              "column": 71,
              "line": 94
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Then",
            "optional": false,
            "range": [
              2626,
              2630
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 94
              },
              "start": {
                "column": 64,
                "line": 94
              }
            }
          },
          "range": [
            2626,
            2630
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 94
            },
            "start": {
              "column": 64,
              "line": 94
            }
          }
        },
        "range": [
          2606,
          2637
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 94
          },
          "start": {
            "column": 44,
            "line": 94
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 94
          },
          "start": {
            "column": 7,
            "line": 94
          }
        },
        "range": [
          2569,
          2603
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "range": [
                2583,
                2590
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 94
                },
                "start": {
                  "column": 21,
                  "line": 94
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cond",
              "optional": false,
              "range": [
                2570,
                2574
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 94
                },
                "start": {
                  "column": 8,
                  "line": 94
                }
              }
            },
            "out": false,
            "range": [
              2570,
              2590
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 94
              },
              "start": {
                "column": 8,
                "line": 94
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
              "name": "Then",
              "optional": false,
              "range": [
                2592,
                2596
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 94
                },
                "start": {
                  "column": 30,
                  "line": 94
                }
              }
            },
            "out": false,
            "range": [
              2592,
              2596
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 94
              },
              "start": {
                "column": 30,
                "line": 94
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
              "name": "Else",
              "optional": false,
              "range": [
                2598,
                2602
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 94
                },
                "start": {
                  "column": 36,
                  "line": 94
                }
              }
            },
            "out": false,
            "range": [
              2598,
              2602
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 94
              },
              "start": {
                "column": 36,
                "line": 94
              }
            }
          }
        ]
      },
      "range": [
        2562,
        2638
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetKey",
        "optional": false,
        "range": [
          2645,
          2651
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 96
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                "name": "S",
                "optional": false,
                "range": [
                  2681,
                  2682
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 96
                  },
                  "start": {
                    "column": 41,
                    "line": 96
                  }
                }
              },
              "range": [
                2681,
                2682
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 96
                },
                "start": {
                  "column": 41,
                  "line": 96
                }
              }
            },
            "range": [
              2675,
              2682
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 96
              },
              "start": {
                "column": 35,
                "line": 96
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "TP",
            "optional": false,
            "range": [
              2669,
              2671
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 96
              },
              "start": {
                "column": 29,
                "line": 96
              }
            }
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2691,
                  2701
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TP",
                        "optional": false,
                        "range": [
                          2694,
                          2696
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 96
                          },
                          "start": {
                            "column": 54,
                            "line": 96
                          }
                        }
                      },
                      "range": [
                        2694,
                        2696
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 96
                        },
                        "start": {
                          "column": 54,
                          "line": 96
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          2692,
                          2693
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 96
                          },
                          "start": {
                            "column": 52,
                            "line": 96
                          }
                        }
                      },
                      "range": [
                        2692,
                        2693
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 96
                        },
                        "start": {
                          "column": 52,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      2692,
                      2697
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 96
                      },
                      "start": {
                        "column": 52,
                        "line": 96
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        2699,
                        2700
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 96
                        },
                        "start": {
                          "column": 59,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      2699,
                      2700
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 96
                      },
                      "start": {
                        "column": 59,
                        "line": 96
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 96
                  },
                  "start": {
                    "column": 51,
                    "line": 96
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Equal",
                "optional": false,
                "range": [
                  2686,
                  2691
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 96
                  },
                  "start": {
                    "column": 46,
                    "line": 96
                  }
                }
              },
              "range": [
                2686,
                2701
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 96
                },
                "start": {
                  "column": 46,
                  "line": 96
                }
              }
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  2710,
                  2714
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 96
                  },
                  "start": {
                    "column": 70,
                    "line": 96
                  }
                }
              },
              "range": [
                2710,
                2714
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 96
                },
                "start": {
                  "column": 70,
                  "line": 96
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                2722,
                2727
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 96
                },
                "start": {
                  "column": 82,
                  "line": 96
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TP",
                "optional": false,
                "range": [
                  2717,
                  2719
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 96
                  },
                  "start": {
                    "column": 77,
                    "line": 96
                  }
                }
              },
              "range": [
                2717,
                2719
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 96
                },
                "start": {
                  "column": 77,
                  "line": 96
                }
              }
            },
            "range": [
              2686,
              2727
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 96
              },
              "start": {
                "column": 46,
                "line": 96
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              2730,
              2733
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 96
              },
              "start": {
                "column": 90,
                "line": 96
              }
            }
          },
          "range": [
            2666,
            2735
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 96
            },
            "start": {
              "column": 26,
              "line": 96
            }
          }
        },
        "range": [
          2660,
          2735
        ],
        "loc": {
          "end": {
            "column": 95,
            "line": 96
          },
          "start": {
            "column": 20,
            "line": 96
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 96
          },
          "start": {
            "column": 11,
            "line": 96
          }
        },
        "range": [
          2651,
          2657
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                2652,
                2653
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 96
                },
                "start": {
                  "column": 12,
                  "line": 96
                }
              }
            },
            "out": false,
            "range": [
              2652,
              2653
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 96
              },
              "start": {
                "column": 12,
                "line": 96
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
              "name": "V",
              "optional": false,
              "range": [
                2655,
                2656
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 96
                },
                "start": {
                  "column": 15,
                  "line": 96
                }
              }
            },
            "out": false,
            "range": [
              2655,
              2656
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 96
              },
              "start": {
                "column": 15,
                "line": 96
              }
            }
          }
        ]
      },
      "range": [
        2640,
        2736
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetKeyWithIf",
        "optional": false,
        "range": [
          2743,
          2755
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 98
          },
          "start": {
            "column": 5,
            "line": 98
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                "name": "S",
                "optional": false,
                "range": [
                  2785,
                  2786
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 98
                  },
                  "start": {
                    "column": 47,
                    "line": 98
                  }
                }
              },
              "range": [
                2785,
                2786
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 98
                },
                "start": {
                  "column": 47,
                  "line": 98
                }
              }
            },
            "range": [
              2779,
              2786
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 98
              },
              "start": {
                "column": 41,
                "line": 98
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "TP",
            "optional": false,
            "range": [
              2773,
              2775
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 98
              },
              "start": {
                "column": 35,
                "line": 98
              }
            }
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2792,
                2820
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2798,
                      2808
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TP",
                            "optional": false,
                            "range": [
                              2801,
                              2803
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 98
                              },
                              "start": {
                                "column": 63,
                                "line": 98
                              }
                            }
                          },
                          "range": [
                            2801,
                            2803
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 98
                            },
                            "start": {
                              "column": 63,
                              "line": 98
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              2799,
                              2800
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 98
                              },
                              "start": {
                                "column": 61,
                                "line": 98
                              }
                            }
                          },
                          "range": [
                            2799,
                            2800
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 98
                            },
                            "start": {
                              "column": 61,
                              "line": 98
                            }
                          }
                        },
                        "range": [
                          2799,
                          2804
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 98
                          },
                          "start": {
                            "column": 61,
                            "line": 98
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            2806,
                            2807
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 98
                            },
                            "start": {
                              "column": 68,
                              "line": 98
                            }
                          }
                        },
                        "range": [
                          2806,
                          2807
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 98
                          },
                          "start": {
                            "column": 68,
                            "line": 98
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 98
                      },
                      "start": {
                        "column": 60,
                        "line": 98
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Equal",
                    "optional": false,
                    "range": [
                      2793,
                      2798
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 98
                      },
                      "start": {
                        "column": 55,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    2793,
                    2808
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 98
                    },
                    "start": {
                      "column": 55,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TP",
                    "optional": false,
                    "range": [
                      2810,
                      2812
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 98
                      },
                      "start": {
                        "column": 72,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    2810,
                    2812
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 98
                    },
                    "start": {
                      "column": 72,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSNeverKeyword",
                  "range": [
                    2814,
                    2819
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 98
                    },
                    "start": {
                      "column": 76,
                      "line": 98
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 98
                },
                "start": {
                  "column": 54,
                  "line": 98
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "If",
              "optional": false,
              "range": [
                2790,
                2792
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 98
                },
                "start": {
                  "column": 52,
                  "line": 98
                }
              }
            },
            "range": [
              2790,
              2820
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 98
              },
              "start": {
                "column": 52,
                "line": 98
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              2823,
              2826
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 98
              },
              "start": {
                "column": 85,
                "line": 98
              }
            }
          },
          "range": [
            2770,
            2828
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 98
            },
            "start": {
              "column": 32,
              "line": 98
            }
          }
        },
        "range": [
          2764,
          2828
        ],
        "loc": {
          "end": {
            "column": 90,
            "line": 98
          },
          "start": {
            "column": 26,
            "line": 98
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 98
          },
          "start": {
            "column": 17,
            "line": 98
          }
        },
        "range": [
          2755,
          2761
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                2756,
                2757
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 98
                },
                "start": {
                  "column": 18,
                  "line": 98
                }
              }
            },
            "out": false,
            "range": [
              2756,
              2757
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 98
              },
              "start": {
                "column": 18,
                "line": 98
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
              "name": "V",
              "optional": false,
              "range": [
                2759,
                2760
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 98
                },
                "start": {
                  "column": 21,
                  "line": 98
                }
              }
            },
            "out": false,
            "range": [
              2759,
              2760
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 98
              },
              "start": {
                "column": 21,
                "line": 98
              }
            }
          }
        ]
      },
      "range": [
        2738,
        2829
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetObjWithIf",
        "optional": false,
        "range": [
          2836,
          2848
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 100
          },
          "start": {
            "column": 5,
            "line": 100
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
              "name": "S",
              "optional": false,
              "range": [
                2872,
                2873
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 100
                },
                "start": {
                  "column": 41,
                  "line": 100
                }
              }
            },
            "range": [
              2872,
              2873
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 100
              },
              "start": {
                "column": 41,
                "line": 100
              }
            }
          },
          "range": [
            2866,
            2873
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 100
            },
            "start": {
              "column": 35,
              "line": 100
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "TP",
          "optional": false,
          "range": [
            2860,
            2862
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 100
            },
            "start": {
              "column": 29,
              "line": 100
            }
          }
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2879,
              2907
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2885,
                    2895
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TP",
                          "optional": false,
                          "range": [
                            2888,
                            2890
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 100
                            },
                            "start": {
                              "column": 57,
                              "line": 100
                            }
                          }
                        },
                        "range": [
                          2888,
                          2890
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 100
                          },
                          "start": {
                            "column": 57,
                            "line": 100
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "range": [
                            2886,
                            2887
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 100
                            },
                            "start": {
                              "column": 55,
                              "line": 100
                            }
                          }
                        },
                        "range": [
                          2886,
                          2887
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 100
                          },
                          "start": {
                            "column": 55,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        2886,
                        2891
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 100
                        },
                        "start": {
                          "column": 55,
                          "line": 100
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          2893,
                          2894
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 100
                          },
                          "start": {
                            "column": 62,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        2893,
                        2894
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 100
                        },
                        "start": {
                          "column": 62,
                          "line": 100
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 100
                    },
                    "start": {
                      "column": 54,
                      "line": 100
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Equal",
                  "optional": false,
                  "range": [
                    2880,
                    2885
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 100
                    },
                    "start": {
                      "column": 49,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2880,
                  2895
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 100
                  },
                  "start": {
                    "column": 49,
                    "line": 100
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TP",
                  "optional": false,
                  "range": [
                    2897,
                    2899
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 100
                    },
                    "start": {
                      "column": 66,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2897,
                  2899
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 100
                  },
                  "start": {
                    "column": 66,
                    "line": 100
                  }
                }
              },
              {
                "type": "TSNeverKeyword",
                "range": [
                  2901,
                  2906
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 100
                  },
                  "start": {
                    "column": 70,
                    "line": 100
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 100
              },
              "start": {
                "column": 48,
                "line": 100
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "If",
            "optional": false,
            "range": [
              2877,
              2879
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 100
              },
              "start": {
                "column": 46,
                "line": 100
              }
            }
          },
          "range": [
            2877,
            2907
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 100
            },
            "start": {
              "column": 46,
              "line": 100
            }
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            2910,
            2913
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 100
            },
            "start": {
              "column": 79,
              "line": 100
            }
          }
        },
        "range": [
          2857,
          2915
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 100
          },
          "start": {
            "column": 26,
            "line": 100
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 100
          },
          "start": {
            "column": 17,
            "line": 100
          }
        },
        "range": [
          2848,
          2854
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                2849,
                2850
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 100
                },
                "start": {
                  "column": 18,
                  "line": 100
                }
              }
            },
            "out": false,
            "range": [
              2849,
              2850
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 100
              },
              "start": {
                "column": 18,
                "line": 100
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
              "name": "V",
              "optional": false,
              "range": [
                2852,
                2853
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 100
                },
                "start": {
                  "column": 21,
                  "line": 100
                }
              }
            },
            "out": false,
            "range": [
              2852,
              2853
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 100
              },
              "start": {
                "column": 21,
                "line": 100
              }
            }
          }
        ]
      },
      "range": [
        2831,
        2916
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Task",
        "optional": false,
        "range": [
          2923,
          2927
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 102
          },
          "start": {
            "column": 5,
            "line": 102
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
              "name": "isDone",
              "optional": false,
              "range": [
                2934,
                2940
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 103
                },
                "start": {
                  "column": 2,
                  "line": 103
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
                  "line": 103
                },
                "start": {
                  "column": 8,
                  "line": 103
                }
              },
              "range": [
                2940,
                2949
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2942,
                  2949
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 103
                  },
                  "start": {
                    "column": 10,
                    "line": 103
                  }
                }
              }
            },
            "range": [
              2934,
              2950
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 103
              },
              "start": {
                "column": 2,
                "line": 103
              }
            }
          }
        ],
        "range": [
          2930,
          2952
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 104
          },
          "start": {
            "column": 12,
            "line": 102
          }
        }
      },
      "range": [
        2918,
        2953
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "range": [
          2960,
          2966
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 106
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
              "name": "root",
              "optional": false,
              "range": [
                2973,
                2977
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 107
                },
                "start": {
                  "column": 2,
                  "line": 107
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
                  "line": 110
                },
                "start": {
                  "column": 6,
                  "line": 107
                }
              },
              "range": [
                2977,
                3019
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
                      "name": "title",
                      "optional": false,
                      "range": [
                        2985,
                        2990
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 108
                        },
                        "start": {
                          "column": 4,
                          "line": 108
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
                          "line": 108
                        },
                        "start": {
                          "column": 9,
                          "line": 108
                        }
                      },
                      "range": [
                        2990,
                        2998
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2992,
                          2998
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 108
                          },
                          "start": {
                            "column": 11,
                            "line": 108
                          }
                        }
                      }
                    },
                    "range": [
                      2985,
                      2999
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 108
                      },
                      "start": {
                        "column": 4,
                        "line": 108
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "task",
                      "optional": false,
                      "range": [
                        3004,
                        3008
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 109
                        },
                        "start": {
                          "column": 4,
                          "line": 109
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
                          "line": 109
                        },
                        "start": {
                          "column": 8,
                          "line": 109
                        }
                      },
                      "range": [
                        3008,
                        3014
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Task",
                          "optional": false,
                          "range": [
                            3010,
                            3014
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 109
                            },
                            "start": {
                              "column": 10,
                              "line": 109
                            }
                          }
                        },
                        "range": [
                          3010,
                          3014
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 109
                          },
                          "start": {
                            "column": 10,
                            "line": 109
                          }
                        }
                      }
                    },
                    "range": [
                      3004,
                      3015
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 109
                      },
                      "start": {
                        "column": 4,
                        "line": 109
                      }
                    }
                  }
                ],
                "range": [
                  2979,
                  3019
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 110
                  },
                  "start": {
                    "column": 8,
                    "line": 107
                  }
                }
              }
            },
            "range": [
              2973,
              3019
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 110
              },
              "start": {
                "column": 2,
                "line": 107
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Task",
              "optional": false,
              "range": [
                3022,
                3026
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 111
                },
                "start": {
                  "column": 2,
                  "line": 111
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
                  "line": 111
                },
                "start": {
                  "column": 6,
                  "line": 111
                }
              },
              "range": [
                3026,
                3032
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Task",
                  "optional": false,
                  "range": [
                    3028,
                    3032
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 111
                    },
                    "start": {
                      "column": 8,
                      "line": 111
                    }
                  }
                },
                "range": [
                  3028,
                  3032
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 111
                  },
                  "start": {
                    "column": 8,
                    "line": 111
                  }
                }
              }
            },
            "range": [
              3022,
              3033
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 111
              },
              "start": {
                "column": 2,
                "line": 111
              }
            }
          }
        ],
        "range": [
          2969,
          3035
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 112
          },
          "start": {
            "column": 14,
            "line": 106
          }
        }
      },
      "range": [
        2955,
        3036
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 106
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "range": [
          3043,
          3047
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 114
          },
          "start": {
            "column": 5,
            "line": 114
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3056,
            3088
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "range": [
                  3057,
                  3063
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 114
                  },
                  "start": {
                    "column": 19,
                    "line": 114
                  }
                }
              },
              "range": [
                3057,
                3063
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 114
                },
                "start": {
                  "column": 19,
                  "line": 114
                }
              }
            },
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'task'",
                  "value": "task",
                  "range": [
                    3080,
                    3086
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 114
                    },
                    "start": {
                      "column": 42,
                      "line": 114
                    }
                  }
                },
                "range": [
                  3080,
                  3086
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 114
                  },
                  "start": {
                    "column": 42,
                    "line": 114
                  }
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'root'",
                    "value": "root",
                    "range": [
                      3072,
                      3078
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 114
                      },
                      "start": {
                        "column": 34,
                        "line": 114
                      }
                    }
                  },
                  "range": [
                    3072,
                    3078
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 114
                    },
                    "start": {
                      "column": 34,
                      "line": 114
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema",
                    "optional": false,
                    "range": [
                      3065,
                      3071
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 114
                      },
                      "start": {
                        "column": 27,
                        "line": 114
                      }
                    }
                  },
                  "range": [
                    3065,
                    3071
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 114
                    },
                    "start": {
                      "column": 27,
                      "line": 114
                    }
                  }
                },
                "range": [
                  3065,
                  3079
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 114
                  },
                  "start": {
                    "column": 27,
                    "line": 114
                  }
                }
              },
              "range": [
                3065,
                3087
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 114
                },
                "start": {
                  "column": 27,
                  "line": 114
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 114
            },
            "start": {
              "column": 18,
              "line": 114
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetKey",
          "optional": false,
          "range": [
            3050,
            3056
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 114
            },
            "start": {
              "column": 12,
              "line": 114
            }
          }
        },
        "range": [
          3050,
          3088
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 114
          },
          "start": {
            "column": 12,
            "line": 114
          }
        }
      },
      "range": [
        3038,
        3089
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 114
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "range": [
          3106,
          3110
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 115
          },
          "start": {
            "column": 5,
            "line": 115
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3125,
            3157
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "range": [
                  3126,
                  3132
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 115
                  },
                  "start": {
                    "column": 25,
                    "line": 115
                  }
                }
              },
              "range": [
                3126,
                3132
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 115
                },
                "start": {
                  "column": 25,
                  "line": 115
                }
              }
            },
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'task'",
                  "value": "task",
                  "range": [
                    3149,
                    3155
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 115
                    },
                    "start": {
                      "column": 48,
                      "line": 115
                    }
                  }
                },
                "range": [
                  3149,
                  3155
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 115
                  },
                  "start": {
                    "column": 48,
                    "line": 115
                  }
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'root'",
                    "value": "root",
                    "range": [
                      3141,
                      3147
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 115
                      },
                      "start": {
                        "column": 40,
                        "line": 115
                      }
                    }
                  },
                  "range": [
                    3141,
                    3147
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 115
                    },
                    "start": {
                      "column": 40,
                      "line": 115
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema",
                    "optional": false,
                    "range": [
                      3134,
                      3140
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 115
                      },
                      "start": {
                        "column": 33,
                        "line": 115
                      }
                    }
                  },
                  "range": [
                    3134,
                    3140
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 115
                    },
                    "start": {
                      "column": 33,
                      "line": 115
                    }
                  }
                },
                "range": [
                  3134,
                  3148
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 115
                  },
                  "start": {
                    "column": 33,
                    "line": 115
                  }
                }
              },
              "range": [
                3134,
                3156
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 115
                },
                "start": {
                  "column": 33,
                  "line": 115
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 115
            },
            "start": {
              "column": 24,
              "line": 115
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetKeyWithIf",
          "optional": false,
          "range": [
            3113,
            3125
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 115
            },
            "start": {
              "column": 12,
              "line": 115
            }
          }
        },
        "range": [
          3113,
          3157
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 115
          },
          "start": {
            "column": 12,
            "line": 115
          }
        }
      },
      "range": [
        3101,
        3158
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "range": [
          3175,
          3179
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 116
          },
          "start": {
            "column": 5,
            "line": 116
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
              3200,
              3232
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "range": [
                    3201,
                    3207
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 116
                    },
                    "start": {
                      "column": 31,
                      "line": 116
                    }
                  }
                },
                "range": [
                  3201,
                  3207
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 116
                  },
                  "start": {
                    "column": 31,
                    "line": 116
                  }
                }
              },
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'task'",
                    "value": "task",
                    "range": [
                      3224,
                      3230
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 116
                      },
                      "start": {
                        "column": 54,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    3224,
                    3230
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 116
                    },
                    "start": {
                      "column": 54,
                      "line": 116
                    }
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'root'",
                      "value": "root",
                      "range": [
                        3216,
                        3222
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 116
                        },
                        "start": {
                          "column": 46,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3216,
                      3222
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 116
                      },
                      "start": {
                        "column": 46,
                        "line": 116
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "range": [
                        3209,
                        3215
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 116
                        },
                        "start": {
                          "column": 39,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3209,
                      3215
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 116
                      },
                      "start": {
                        "column": 39,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    3209,
                    3223
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 116
                    },
                    "start": {
                      "column": 39,
                      "line": 116
                    }
                  }
                },
                "range": [
                  3209,
                  3231
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 116
                  },
                  "start": {
                    "column": 39,
                    "line": 116
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 116
              },
              "start": {
                "column": 30,
                "line": 116
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GetObjWithIf",
            "optional": false,
            "range": [
              3188,
              3200
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 116
              },
              "start": {
                "column": 18,
                "line": 116
              }
            }
          },
          "range": [
            3188,
            3232
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 116
            },
            "start": {
              "column": 18,
              "line": 116
            }
          }
        },
        "range": [
          3182,
          3232
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 116
          },
          "start": {
            "column": 12,
            "line": 116
          }
        }
      },
      "range": [
        3170,
        3233
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 116
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeysExtendedBy",
        "optional": false,
        "range": [
          3273,
          3287
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 120
          },
          "start": {
            "column": 5,
            "line": 120
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  3316,
                  3317
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 120
                  },
                  "start": {
                    "column": 48,
                    "line": 120
                  }
                }
              },
              "range": [
                3316,
                3317
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 120
                },
                "start": {
                  "column": 48,
                  "line": 120
                }
              }
            },
            "range": [
              3310,
              3317
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 120
              },
              "start": {
                "column": 42,
                "line": 120
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              3305,
              3306
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 120
              },
              "start": {
                "column": 37,
                "line": 120
              }
            }
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3321,
                  3322
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 120
                  },
                  "start": {
                    "column": 53,
                    "line": 120
                  }
                }
              },
              "range": [
                3321,
                3322
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 120
                },
                "start": {
                  "column": 53,
                  "line": 120
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
                  "name": "K",
                  "optional": false,
                  "range": [
                    3333,
                    3334
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 120
                    },
                    "start": {
                      "column": 65,
                      "line": 120
                    }
                  }
                },
                "range": [
                  3333,
                  3334
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 120
                  },
                  "start": {
                    "column": 65,
                    "line": 120
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
                    3331,
                    3332
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 120
                    },
                    "start": {
                      "column": 63,
                      "line": 120
                    }
                  }
                },
                "range": [
                  3331,
                  3332
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 120
                  },
                  "start": {
                    "column": 63,
                    "line": 120
                  }
                }
              },
              "range": [
                3331,
                3335
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 120
                },
                "start": {
                  "column": 63,
                  "line": 120
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                3342,
                3347
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 120
                },
                "start": {
                  "column": 74,
                  "line": 120
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  3338,
                  3339
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 120
                  },
                  "start": {
                    "column": 70,
                    "line": 120
                  }
                }
              },
              "range": [
                3338,
                3339
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 120
                },
                "start": {
                  "column": 70,
                  "line": 120
                }
              }
            },
            "range": [
              3321,
              3347
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 120
              },
              "start": {
                "column": 53,
                "line": 120
              }
            }
          },
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  3353,
                  3354
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 120
                  },
                  "start": {
                    "column": 85,
                    "line": 120
                  }
                }
              },
              "range": [
                3353,
                3354
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 120
                },
                "start": {
                  "column": 85,
                  "line": 120
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
                  3351,
                  3352
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 120
                  },
                  "start": {
                    "column": 83,
                    "line": 120
                  }
                }
              },
              "range": [
                3351,
                3352
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 120
                },
                "start": {
                  "column": 83,
                  "line": 120
                }
              }
            },
            "range": [
              3351,
              3355
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 120
              },
              "start": {
                "column": 83,
                "line": 120
              }
            }
          },
          "range": [
            3302,
            3357
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 120
            },
            "start": {
              "column": 34,
              "line": 120
            }
          }
        },
        "range": [
          3296,
          3357
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 120
          },
          "start": {
            "column": 28,
            "line": 120
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 120
          },
          "start": {
            "column": 19,
            "line": 120
          }
        },
        "range": [
          3287,
          3293
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
                3288,
                3289
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 120
                },
                "start": {
                  "column": 20,
                  "line": 120
                }
              }
            },
            "out": false,
            "range": [
              3288,
              3289
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 120
              },
              "start": {
                "column": 20,
                "line": 120
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
              "name": "U",
              "optional": false,
              "range": [
                3291,
                3292
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 120
                },
                "start": {
                  "column": 23,
                  "line": 120
                }
              }
            },
            "out": false,
            "range": [
              3291,
              3292
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 120
              },
              "start": {
                "column": 23,
                "line": 120
              }
            }
          }
        ]
      },
      "range": [
        3268,
        3358
      ],
      "loc": {
        "end": {
          "column": 90,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 120
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3372,
          3406
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
                3378,
                3379
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 123
                },
                "start": {
                  "column": 4,
                  "line": 123
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
                  "line": 123
                },
                "start": {
                  "column": 5,
                  "line": 123
                }
              },
              "range": [
                3379,
                3388
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  3381,
                  3388
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 123
                  },
                  "start": {
                    "column": 7,
                    "line": 123
                  }
                }
              }
            },
            "range": [
              3378,
              3389
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
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
                3394,
                3395
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 124
                },
                "start": {
                  "column": 4,
                  "line": 124
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
                  "line": 124
                },
                "start": {
                  "column": 5,
                  "line": 124
                }
              },
              "range": [
                3395,
                3403
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  3397,
                  3403
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 124
                  },
                  "start": {
                    "column": 7,
                    "line": 124
                  }
                }
              }
            },
            "range": [
              3394,
              3404
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 124
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
            "line": 125
          },
          "start": {
            "column": 12,
            "line": 122
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "range": [
          3370,
          3371
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 122
          },
          "start": {
            "column": 10,
            "line": 122
          }
        }
      },
      "range": [
        3360,
        3406
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                3462,
                3463
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 128
                },
                "start": {
                  "column": 11,
                  "line": 128
                }
              }
            },
            "range": [
              3455,
              3464
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 128
              }
            }
          }
        ],
        "range": [
          3449,
          3466
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 129
          },
          "start": {
            "column": 41,
            "line": 127
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          3417,
          3418
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 127
          },
          "start": {
            "column": 9,
            "line": 127
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 127
              },
              "start": {
                "column": 12,
                "line": 127
              }
            },
            "range": [
              3420,
              3447
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3436,
                  3447
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        3437,
                        3438
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 127
                        },
                        "start": {
                          "column": 29,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      3437,
                      3438
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 127
                      },
                      "start": {
                        "column": 29,
                        "line": 127
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      3440,
                      3446
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 127
                      },
                      "start": {
                        "column": 32,
                        "line": 127
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 127
                  },
                  "start": {
                    "column": 28,
                    "line": 127
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeysExtendedBy",
                "optional": false,
                "range": [
                  3422,
                  3436
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 127
                  },
                  "start": {
                    "column": 14,
                    "line": 127
                  }
                }
              },
              "range": [
                3422,
                3447
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 127
                },
                "start": {
                  "column": 14,
                  "line": 127
                }
              }
            }
          },
          "range": [
            3419,
            3447
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 127
            },
            "start": {
              "column": 11,
              "line": 127
            }
          }
        }
      ],
      "range": [
        3408,
        3466
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 127
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
              3470,
              3473
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 131
              },
              "start": {
                "column": 2,
                "line": 131
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            3468,
            3469
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 131
            },
            "start": {
              "column": 0,
              "line": 131
            }
          }
        },
        "optional": false,
        "range": [
          3468,
          3474
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 131
          },
          "start": {
            "column": 0,
            "line": 131
          }
        }
      },
      "range": [
        3468,
        3475
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 131
        },
        "start": {
          "column": 0,
          "line": 131
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NameMap",
        "optional": false,
        "range": [
          3515,
          3522
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 133
          },
          "start": {
            "column": 5,
            "line": 133
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
              "type": "Literal",
              "raw": "'a'",
              "value": "a",
              "range": [
                3527,
                3530
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 133
                },
                "start": {
                  "column": 17,
                  "line": 133
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
                  "column": 25,
                  "line": 133
                },
                "start": {
                  "column": 20,
                  "line": 133
                }
              },
              "range": [
                3530,
                3535
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'x'",
                  "value": "x",
                  "range": [
                    3532,
                    3535
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 133
                    },
                    "start": {
                      "column": 22,
                      "line": 133
                    }
                  }
                },
                "range": [
                  3532,
                  3535
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 133
                  },
                  "start": {
                    "column": 22,
                    "line": 133
                  }
                }
              }
            },
            "range": [
              3527,
              3536
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 133
              },
              "start": {
                "column": 17,
                "line": 133
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "'b'",
              "value": "b",
              "range": [
                3537,
                3540
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 133
                },
                "start": {
                  "column": 27,
                  "line": 133
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
                  "column": 35,
                  "line": 133
                },
                "start": {
                  "column": 30,
                  "line": 133
                }
              },
              "range": [
                3540,
                3545
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'y'",
                  "value": "y",
                  "range": [
                    3542,
                    3545
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 133
                    },
                    "start": {
                      "column": 32,
                      "line": 133
                    }
                  }
                },
                "range": [
                  3542,
                  3545
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 133
                  },
                  "start": {
                    "column": 32,
                    "line": 133
                  }
                }
              }
            },
            "range": [
              3537,
              3546
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 133
              },
              "start": {
                "column": 27,
                "line": 133
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "'c'",
              "value": "c",
              "range": [
                3547,
                3550
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 133
                },
                "start": {
                  "column": 37,
                  "line": 133
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
                  "column": 45,
                  "line": 133
                },
                "start": {
                  "column": 40,
                  "line": 133
                }
              },
              "range": [
                3550,
                3555
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'z'",
                  "value": "z",
                  "range": [
                    3552,
                    3555
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 133
                    },
                    "start": {
                      "column": 42,
                      "line": 133
                    }
                  }
                },
                "range": [
                  3552,
                  3555
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 133
                  },
                  "start": {
                    "column": 42,
                    "line": 133
                  }
                }
              }
            },
            "range": [
              3547,
              3555
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 133
              },
              "start": {
                "column": 37,
                "line": 133
              }
            }
          }
        ],
        "range": [
          3525,
          3557
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 133
          },
          "start": {
            "column": 15,
            "line": 133
          }
        }
      },
      "range": [
        3510,
        3558
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 133
        },
        "start": {
          "column": 0,
          "line": 133
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS0",
        "optional": false,
        "range": [
          3602,
          3605
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 137
          },
          "start": {
            "column": 5,
            "line": 137
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  3631,
                  3632
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 137
                  },
                  "start": {
                    "column": 34,
                    "line": 137
                  }
                }
              },
              "range": [
                3631,
                3632
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 137
                },
                "start": {
                  "column": 34,
                  "line": 137
                }
              }
            },
            "range": [
              3625,
              3632
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 137
              },
              "start": {
                "column": 28,
                "line": 137
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              3620,
              3621
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 137
              },
              "start": {
                "column": 23,
                "line": 137
              }
            }
          },
          "nameType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3648,
                  3659
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
                        3649,
                        3650
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 137
                        },
                        "start": {
                          "column": 52,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      3649,
                      3650
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 137
                      },
                      "start": {
                        "column": 52,
                        "line": 137
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      3652,
                      3658
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 137
                      },
                      "start": {
                        "column": 55,
                        "line": 137
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 137
                  },
                  "start": {
                    "column": 51,
                    "line": 137
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  3642,
                  3648
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 137
                  },
                  "start": {
                    "column": 45,
                    "line": 137
                  }
                }
              },
              "range": [
                3642,
                3659
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 137
                },
                "start": {
                  "column": 45,
                  "line": 137
                }
              }
            },
            "range": [
              3636,
              3659
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 137
              },
              "start": {
                "column": 39,
                "line": 137
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              3662,
              3668
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 137
              },
              "start": {
                "column": 65,
                "line": 137
              }
            }
          },
          "range": [
            3617,
            3670
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 137
            },
            "start": {
              "column": 20,
              "line": 137
            }
          }
        },
        "range": [
          3611,
          3670
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 137
          },
          "start": {
            "column": 14,
            "line": 137
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 137
          },
          "start": {
            "column": 8,
            "line": 137
          }
        },
        "range": [
          3605,
          3608
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
                3606,
                3607
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 137
                },
                "start": {
                  "column": 9,
                  "line": 137
                }
              }
            },
            "out": false,
            "range": [
              3606,
              3607
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 137
              },
              "start": {
                "column": 9,
                "line": 137
              }
            }
          }
        ]
      },
      "range": [
        3597,
        3671
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 137
        },
        "start": {
          "column": 0,
          "line": 137
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS1",
        "optional": false,
        "range": [
          3677,
          3680
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 138
          },
          "start": {
            "column": 5,
            "line": 138
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  3706,
                  3707
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 138
                  },
                  "start": {
                    "column": 34,
                    "line": 138
                  }
                }
              },
              "range": [
                3706,
                3707
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 138
                },
                "start": {
                  "column": 34,
                  "line": 138
                }
              }
            },
            "range": [
              3700,
              3707
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 138
              },
              "start": {
                "column": 28,
                "line": 138
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              3695,
              3696
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 138
              },
              "start": {
                "column": 23,
                "line": 138
              }
            }
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3718,
                3738
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
                      3719,
                      3720
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 138
                      },
                      "start": {
                        "column": 47,
                        "line": 138
                      }
                    }
                  },
                  "range": [
                    3719,
                    3720
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 138
                    },
                    "start": {
                      "column": 47,
                      "line": 138
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          3722,
                          3725
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 138
                          },
                          "start": {
                            "column": 50,
                            "line": 138
                          }
                        }
                      },
                      "range": [
                        3722,
                        3725
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 138
                        },
                        "start": {
                          "column": 50,
                          "line": 138
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          3728,
                          3731
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 138
                          },
                          "start": {
                            "column": 56,
                            "line": 138
                          }
                        }
                      },
                      "range": [
                        3728,
                        3731
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 138
                        },
                        "start": {
                          "column": 56,
                          "line": 138
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'c'",
                        "value": "c",
                        "range": [
                          3734,
                          3737
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 138
                          },
                          "start": {
                            "column": 62,
                            "line": 138
                          }
                        }
                      },
                      "range": [
                        3734,
                        3737
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 138
                        },
                        "start": {
                          "column": 62,
                          "line": 138
                        }
                      }
                    }
                  ],
                  "range": [
                    3722,
                    3737
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 138
                    },
                    "start": {
                      "column": 50,
                      "line": 138
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 138
                },
                "start": {
                  "column": 46,
                  "line": 138
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "range": [
                3711,
                3718
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 138
                },
                "start": {
                  "column": 39,
                  "line": 138
                }
              }
            },
            "range": [
              3711,
              3738
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 138
              },
              "start": {
                "column": 39,
                "line": 138
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              3741,
              3747
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 138
              },
              "start": {
                "column": 69,
                "line": 138
              }
            }
          },
          "range": [
            3692,
            3749
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 138
            },
            "start": {
              "column": 20,
              "line": 138
            }
          }
        },
        "range": [
          3686,
          3749
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 138
          },
          "start": {
            "column": 14,
            "line": 138
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 138
          },
          "start": {
            "column": 8,
            "line": 138
          }
        },
        "range": [
          3680,
          3683
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
                3681,
                3682
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 138
                },
                "start": {
                  "column": 9,
                  "line": 138
                }
              }
            },
            "out": false,
            "range": [
              3681,
              3682
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 138
              },
              "start": {
                "column": 9,
                "line": 138
              }
            }
          }
        ]
      },
      "range": [
        3672,
        3750
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 138
        },
        "start": {
          "column": 0,
          "line": 138
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS2",
        "optional": false,
        "range": [
          3756,
          3759
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 139
          },
          "start": {
            "column": 5,
            "line": 139
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  3785,
                  3786
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 139
                  },
                  "start": {
                    "column": 34,
                    "line": 139
                  }
                }
              },
              "range": [
                3785,
                3786
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 139
                },
                "start": {
                  "column": 34,
                  "line": 139
                }
              }
            },
            "range": [
              3779,
              3786
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 139
              },
              "start": {
                "column": 28,
                "line": 139
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              3774,
              3775
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 139
              },
              "start": {
                "column": 23,
                "line": 139
              }
            }
          },
          "nameType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    3790,
                    3791
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 139
                    },
                    "start": {
                      "column": 39,
                      "line": 139
                    }
                  }
                },
                "range": [
                  3790,
                  3791
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 139
                  },
                  "start": {
                    "column": 39,
                    "line": 139
                  }
                }
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        3795,
                        3798
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 139
                        },
                        "start": {
                          "column": 44,
                          "line": 139
                        }
                      }
                    },
                    "range": [
                      3795,
                      3798
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 139
                      },
                      "start": {
                        "column": 44,
                        "line": 139
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        3801,
                        3804
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 139
                        },
                        "start": {
                          "column": 50,
                          "line": 139
                        }
                      }
                    },
                    "range": [
                      3801,
                      3804
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 139
                      },
                      "start": {
                        "column": 50,
                        "line": 139
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'c'",
                      "value": "c",
                      "range": [
                        3807,
                        3810
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 139
                        },
                        "start": {
                          "column": 56,
                          "line": 139
                        }
                      }
                    },
                    "range": [
                      3807,
                      3810
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 139
                      },
                      "start": {
                        "column": 56,
                        "line": 139
                      }
                    }
                  }
                ],
                "range": [
                  3795,
                  3810
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 139
                  },
                  "start": {
                    "column": 44,
                    "line": 139
                  }
                }
              }
            ],
            "range": [
              3790,
              3811
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 139
              },
              "start": {
                "column": 39,
                "line": 139
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              3814,
              3820
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 139
              },
              "start": {
                "column": 63,
                "line": 139
              }
            }
          },
          "range": [
            3771,
            3822
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 139
            },
            "start": {
              "column": 20,
              "line": 139
            }
          }
        },
        "range": [
          3765,
          3822
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 139
          },
          "start": {
            "column": 14,
            "line": 139
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 139
          },
          "start": {
            "column": 8,
            "line": 139
          }
        },
        "range": [
          3759,
          3762
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
                3760,
                3761
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 139
                },
                "start": {
                  "column": 9,
                  "line": 139
                }
              }
            },
            "out": false,
            "range": [
              3760,
              3761
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 139
              },
              "start": {
                "column": 9,
                "line": 139
              }
            }
          }
        ]
      },
      "range": [
        3751,
        3823
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 139
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS3",
        "optional": false,
        "range": [
          3829,
          3832
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 140
          },
          "start": {
            "column": 5,
            "line": 140
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  3858,
                  3859
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 140
                  },
                  "start": {
                    "column": 34,
                    "line": 140
                  }
                }
              },
              "range": [
                3858,
                3859
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 140
                },
                "start": {
                  "column": 34,
                  "line": 140
                }
              }
            },
            "range": [
              3852,
              3859
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 140
              },
              "start": {
                "column": 28,
                "line": 140
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              3847,
              3848
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 140
              },
              "start": {
                "column": 23,
                "line": 140
              }
            }
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3870,
                3890
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
                      3871,
                      3872
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 140
                      },
                      "start": {
                        "column": 47,
                        "line": 140
                      }
                    }
                  },
                  "range": [
                    3871,
                    3872
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 140
                    },
                    "start": {
                      "column": 47,
                      "line": 140
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          3874,
                          3877
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 140
                          },
                          "start": {
                            "column": 50,
                            "line": 140
                          }
                        }
                      },
                      "range": [
                        3874,
                        3877
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 140
                        },
                        "start": {
                          "column": 50,
                          "line": 140
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          3880,
                          3883
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 140
                          },
                          "start": {
                            "column": 56,
                            "line": 140
                          }
                        }
                      },
                      "range": [
                        3880,
                        3883
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 140
                        },
                        "start": {
                          "column": 56,
                          "line": 140
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'c'",
                        "value": "c",
                        "range": [
                          3886,
                          3889
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 140
                          },
                          "start": {
                            "column": 62,
                            "line": 140
                          }
                        }
                      },
                      "range": [
                        3886,
                        3889
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 140
                        },
                        "start": {
                          "column": 62,
                          "line": 140
                        }
                      }
                    }
                  ],
                  "range": [
                    3874,
                    3889
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 140
                    },
                    "start": {
                      "column": 50,
                      "line": 140
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 140
                },
                "start": {
                  "column": 46,
                  "line": 140
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exclude",
              "optional": false,
              "range": [
                3863,
                3870
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 140
                },
                "start": {
                  "column": 39,
                  "line": 140
                }
              }
            },
            "range": [
              3863,
              3890
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 140
              },
              "start": {
                "column": 39,
                "line": 140
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              3893,
              3899
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 140
              },
              "start": {
                "column": 69,
                "line": 140
              }
            }
          },
          "range": [
            3844,
            3901
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 140
            },
            "start": {
              "column": 20,
              "line": 140
            }
          }
        },
        "range": [
          3838,
          3901
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 140
          },
          "start": {
            "column": 14,
            "line": 140
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 140
          },
          "start": {
            "column": 8,
            "line": 140
          }
        },
        "range": [
          3832,
          3835
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
                3833,
                3834
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 140
                },
                "start": {
                  "column": 9,
                  "line": 140
                }
              }
            },
            "out": false,
            "range": [
              3833,
              3834
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 140
              },
              "start": {
                "column": 9,
                "line": 140
              }
            }
          }
        ]
      },
      "range": [
        3824,
        3902
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 140
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS4",
        "optional": false,
        "range": [
          3908,
          3911
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 141
          },
          "start": {
            "column": 5,
            "line": 141
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  3937,
                  3938
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 141
                  },
                  "start": {
                    "column": 34,
                    "line": 141
                  }
                }
              },
              "range": [
                3937,
                3938
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 141
                },
                "start": {
                  "column": 34,
                  "line": 141
                }
              }
            },
            "range": [
              3931,
              3938
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 141
              },
              "start": {
                "column": 28,
                "line": 141
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              3926,
              3927
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 141
              },
              "start": {
                "column": 23,
                "line": 141
              }
            }
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      3950,
                      3951
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 141
                      },
                      "start": {
                        "column": 47,
                        "line": 141
                      }
                    }
                  },
                  "range": [
                    3950,
                    3951
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 141
                    },
                    "start": {
                      "column": 47,
                      "line": 141
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
                      "name": "NameMap",
                      "optional": false,
                      "range": [
                        3960,
                        3967
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 141
                        },
                        "start": {
                          "column": 57,
                          "line": 141
                        }
                      }
                    },
                    "range": [
                      3960,
                      3967
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 141
                      },
                      "start": {
                        "column": 57,
                        "line": 141
                      }
                    }
                  },
                  "range": [
                    3954,
                    3967
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 141
                    },
                    "start": {
                      "column": 51,
                      "line": 141
                    }
                  }
                }
              ],
              "range": [
                3950,
                3967
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 141
                },
                "start": {
                  "column": 47,
                  "line": 141
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NameMap",
                "optional": false,
                "range": [
                  3942,
                  3949
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 141
                  },
                  "start": {
                    "column": 39,
                    "line": 141
                  }
                }
              },
              "range": [
                3942,
                3949
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 141
                },
                "start": {
                  "column": 39,
                  "line": 141
                }
              }
            },
            "range": [
              3942,
              3968
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 141
              },
              "start": {
                "column": 39,
                "line": 141
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              3971,
              3977
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 141
              },
              "start": {
                "column": 68,
                "line": 141
              }
            }
          },
          "range": [
            3923,
            3979
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 141
            },
            "start": {
              "column": 20,
              "line": 141
            }
          }
        },
        "range": [
          3917,
          3979
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 141
          },
          "start": {
            "column": 14,
            "line": 141
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 141
          },
          "start": {
            "column": 8,
            "line": 141
          }
        },
        "range": [
          3911,
          3914
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
                3912,
                3913
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 141
                },
                "start": {
                  "column": 9,
                  "line": 141
                }
              }
            },
            "out": false,
            "range": [
              3912,
              3913
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 141
              },
              "start": {
                "column": 9,
                "line": 141
              }
            }
          }
        ]
      },
      "range": [
        3903,
        3980
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 141
        },
        "start": {
          "column": 0,
          "line": 141
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS5",
        "optional": false,
        "range": [
          3986,
          3989
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 142
          },
          "start": {
            "column": 5,
            "line": 142
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSIntersectionType",
            "types": [
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
                      4015,
                      4016
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 142
                      },
                      "start": {
                        "column": 34,
                        "line": 142
                      }
                    }
                  },
                  "range": [
                    4015,
                    4016
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 142
                    },
                    "start": {
                      "column": 34,
                      "line": 142
                    }
                  }
                },
                "range": [
                  4009,
                  4016
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 142
                  },
                  "start": {
                    "column": 28,
                    "line": 142
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
                    "name": "NameMap",
                    "optional": false,
                    "range": [
                      4025,
                      4032
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 142
                      },
                      "start": {
                        "column": 44,
                        "line": 142
                      }
                    }
                  },
                  "range": [
                    4025,
                    4032
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 142
                    },
                    "start": {
                      "column": 44,
                      "line": 142
                    }
                  }
                },
                "range": [
                  4019,
                  4032
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 142
                  },
                  "start": {
                    "column": 38,
                    "line": 142
                  }
                }
              }
            ],
            "range": [
              4009,
              4032
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 142
              },
              "start": {
                "column": 28,
                "line": 142
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4004,
              4005
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 142
              },
              "start": {
                "column": 23,
                "line": 142
              }
            }
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  4044,
                  4045
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 142
                  },
                  "start": {
                    "column": 63,
                    "line": 142
                  }
                }
              },
              "range": [
                4044,
                4045
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 142
                },
                "start": {
                  "column": 63,
                  "line": 142
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NameMap",
                "optional": false,
                "range": [
                  4036,
                  4043
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 142
                  },
                  "start": {
                    "column": 55,
                    "line": 142
                  }
                }
              },
              "range": [
                4036,
                4043
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 142
                },
                "start": {
                  "column": 55,
                  "line": 142
                }
              }
            },
            "range": [
              4036,
              4046
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 142
              },
              "start": {
                "column": 55,
                "line": 142
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4049,
              4055
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 142
              },
              "start": {
                "column": 68,
                "line": 142
              }
            }
          },
          "range": [
            4001,
            4057
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 142
            },
            "start": {
              "column": 20,
              "line": 142
            }
          }
        },
        "range": [
          3995,
          4057
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 142
          },
          "start": {
            "column": 14,
            "line": 142
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 142
          },
          "start": {
            "column": 8,
            "line": 142
          }
        },
        "range": [
          3989,
          3992
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
                3990,
                3991
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 142
                },
                "start": {
                  "column": 9,
                  "line": 142
                }
              }
            },
            "out": false,
            "range": [
              3990,
              3991
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 142
              },
              "start": {
                "column": 9,
                "line": 142
              }
            }
          }
        ]
      },
      "range": [
        3981,
        4058
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 142
        },
        "start": {
          "column": 0,
          "line": 142
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS6",
        "optional": false,
        "range": [
          4064,
          4067
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 143
          },
          "start": {
            "column": 5,
            "line": 143
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  4100,
                  4101
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 143
                  },
                  "start": {
                    "column": 41,
                    "line": 143
                  }
                }
              },
              "range": [
                4100,
                4101
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 143
                },
                "start": {
                  "column": 41,
                  "line": 143
                }
              }
            },
            "range": [
              4094,
              4101
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 143
              },
              "start": {
                "column": 35,
                "line": 143
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              4089,
              4090
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 143
              },
              "start": {
                "column": 30,
                "line": 143
              }
            }
          },
          "nameType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    4105,
                    4106
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 143
                    },
                    "start": {
                      "column": 46,
                      "line": 143
                    }
                  }
                },
                "range": [
                  4105,
                  4106
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 143
                  },
                  "start": {
                    "column": 46,
                    "line": 143
                  }
                }
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      4110,
                      4111
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 143
                      },
                      "start": {
                        "column": 51,
                        "line": 143
                      }
                    }
                  },
                  "range": [
                    4110,
                    4111
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 143
                    },
                    "start": {
                      "column": 51,
                      "line": 143
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      4120,
                      4121
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 143
                      },
                      "start": {
                        "column": 61,
                        "line": 143
                      }
                    }
                  },
                  "range": [
                    4120,
                    4121
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 143
                    },
                    "start": {
                      "column": 61,
                      "line": 143
                    }
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    4128,
                    4133
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 143
                    },
                    "start": {
                      "column": 69,
                      "line": 143
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      4124,
                      4125
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 143
                      },
                      "start": {
                        "column": 65,
                        "line": 143
                      }
                    }
                  },
                  "range": [
                    4124,
                    4125
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 143
                    },
                    "start": {
                      "column": 65,
                      "line": 143
                    }
                  }
                },
                "range": [
                  4110,
                  4133
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 143
                  },
                  "start": {
                    "column": 51,
                    "line": 143
                  }
                }
              }
            ],
            "range": [
              4105,
              4134
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 143
              },
              "start": {
                "column": 46,
                "line": 143
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4137,
              4143
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 143
              },
              "start": {
                "column": 78,
                "line": 143
              }
            }
          },
          "range": [
            4085,
            4145
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 143
            },
            "start": {
              "column": 26,
              "line": 143
            }
          }
        },
        "range": [
          4079,
          4145
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 143
          },
          "start": {
            "column": 20,
            "line": 143
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 143
          },
          "start": {
            "column": 8,
            "line": 143
          }
        },
        "range": [
          4067,
          4076
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
                4068,
                4069
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 143
                },
                "start": {
                  "column": 9,
                  "line": 143
                }
              }
            },
            "out": false,
            "range": [
              4068,
              4069
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 143
              },
              "start": {
                "column": 9,
                "line": 143
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
              "name": "U",
              "optional": false,
              "range": [
                4071,
                4072
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 143
                },
                "start": {
                  "column": 12,
                  "line": 143
                }
              }
            },
            "out": false,
            "range": [
              4071,
              4072
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 143
              },
              "start": {
                "column": 12,
                "line": 143
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
              "name": "V",
              "optional": false,
              "range": [
                4074,
                4075
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 143
                },
                "start": {
                  "column": 15,
                  "line": 143
                }
              }
            },
            "out": false,
            "range": [
              4074,
              4075
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 143
              },
              "start": {
                "column": 15,
                "line": 143
              }
            }
          }
        ]
      },
      "range": [
        4059,
        4146
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 143
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN0",
        "optional": false,
        "range": [
          4195,
          4198
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 147
          },
          "start": {
            "column": 5,
            "line": 147
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  4224,
                  4225
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 147
                  },
                  "start": {
                    "column": 34,
                    "line": 147
                  }
                }
              },
              "range": [
                4224,
                4225
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 147
                },
                "start": {
                  "column": 34,
                  "line": 147
                }
              }
            },
            "range": [
              4218,
              4225
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 147
              },
              "start": {
                "column": 28,
                "line": 147
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4213,
              4214
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 147
              },
              "start": {
                "column": 23,
                "line": 147
              }
            }
          },
          "nameType": {
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
                    4231,
                    4232
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 147
                    },
                    "start": {
                      "column": 41,
                      "line": 147
                    }
                  }
                },
                "range": [
                  4231,
                  4232
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 147
                  },
                  "start": {
                    "column": 41,
                    "line": 147
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
                    4229,
                    4230
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 147
                    },
                    "start": {
                      "column": 39,
                      "line": 147
                    }
                  }
                },
                "range": [
                  4229,
                  4230
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 147
                  },
                  "start": {
                    "column": 39,
                    "line": 147
                  }
                }
              },
              "range": [
                4229,
                4233
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 147
                },
                "start": {
                  "column": 39,
                  "line": 147
                }
              }
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "range": [
                4242,
                4248
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 147
                },
                "start": {
                  "column": 52,
                  "line": 147
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                4255,
                4260
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 147
                },
                "start": {
                  "column": 65,
                  "line": 147
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  4251,
                  4252
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 147
                  },
                  "start": {
                    "column": 61,
                    "line": 147
                  }
                }
              },
              "range": [
                4251,
                4252
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 147
                },
                "start": {
                  "column": 61,
                  "line": 147
                }
              }
            },
            "range": [
              4229,
              4260
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 147
              },
              "start": {
                "column": 39,
                "line": 147
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4263,
              4269
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 147
              },
              "start": {
                "column": 73,
                "line": 147
              }
            }
          },
          "range": [
            4210,
            4271
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 147
            },
            "start": {
              "column": 20,
              "line": 147
            }
          }
        },
        "range": [
          4204,
          4271
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 147
          },
          "start": {
            "column": 14,
            "line": 147
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 147
          },
          "start": {
            "column": 8,
            "line": 147
          }
        },
        "range": [
          4198,
          4201
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
                4199,
                4200
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 147
                },
                "start": {
                  "column": 9,
                  "line": 147
                }
              }
            },
            "out": false,
            "range": [
              4199,
              4200
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 147
              },
              "start": {
                "column": 9,
                "line": 147
              }
            }
          }
        ]
      },
      "range": [
        4190,
        4272
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 147
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN1",
        "optional": false,
        "range": [
          4278,
          4281
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 148
          },
          "start": {
            "column": 5,
            "line": 148
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  4307,
                  4308
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 148
                  },
                  "start": {
                    "column": 34,
                    "line": 148
                  }
                }
              },
              "range": [
                4307,
                4308
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 148
                },
                "start": {
                  "column": 34,
                  "line": 148
                }
              }
            },
            "range": [
              4301,
              4308
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 148
              },
              "start": {
                "column": 28,
                "line": 148
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4296,
              4297
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 148
              },
              "start": {
                "column": 23,
                "line": 148
              }
            }
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSNumberKeyword",
              "range": [
                4312,
                4318
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 148
                },
                "start": {
                  "column": 39,
                  "line": 148
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
                    4329,
                    4330
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 148
                    },
                    "start": {
                      "column": 56,
                      "line": 148
                    }
                  }
                },
                "range": [
                  4329,
                  4330
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 148
                  },
                  "start": {
                    "column": 56,
                    "line": 148
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
                    4327,
                    4328
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 148
                    },
                    "start": {
                      "column": 54,
                      "line": 148
                    }
                  }
                },
                "range": [
                  4327,
                  4328
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 148
                  },
                  "start": {
                    "column": 54,
                    "line": 148
                  }
                }
              },
              "range": [
                4327,
                4331
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 148
                },
                "start": {
                  "column": 54,
                  "line": 148
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                4338,
                4343
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 148
                },
                "start": {
                  "column": 65,
                  "line": 148
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  4334,
                  4335
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 148
                  },
                  "start": {
                    "column": 61,
                    "line": 148
                  }
                }
              },
              "range": [
                4334,
                4335
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 148
                },
                "start": {
                  "column": 61,
                  "line": 148
                }
              }
            },
            "range": [
              4312,
              4343
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 148
              },
              "start": {
                "column": 39,
                "line": 148
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4346,
              4352
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 148
              },
              "start": {
                "column": 73,
                "line": 148
              }
            }
          },
          "range": [
            4293,
            4354
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 148
            },
            "start": {
              "column": 20,
              "line": 148
            }
          }
        },
        "range": [
          4287,
          4354
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 148
          },
          "start": {
            "column": 14,
            "line": 148
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 148
          },
          "start": {
            "column": 8,
            "line": 148
          }
        },
        "range": [
          4281,
          4284
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
                4282,
                4283
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 148
                },
                "start": {
                  "column": 9,
                  "line": 148
                }
              }
            },
            "out": false,
            "range": [
              4282,
              4283
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 148
              },
              "start": {
                "column": 9,
                "line": 148
              }
            }
          }
        ]
      },
      "range": [
        4273,
        4355
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN2",
        "optional": false,
        "range": [
          4361,
          4364
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 149
          },
          "start": {
            "column": 5,
            "line": 149
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  4390,
                  4391
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 149
                  },
                  "start": {
                    "column": 34,
                    "line": 149
                  }
                }
              },
              "range": [
                4390,
                4391
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 149
                },
                "start": {
                  "column": 34,
                  "line": 149
                }
              }
            },
            "range": [
              4384,
              4391
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 149
              },
              "start": {
                "column": 28,
                "line": 149
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4379,
              4380
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 149
              },
              "start": {
                "column": 23,
                "line": 149
              }
            }
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  4395,
                  4398
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 149
                  },
                  "start": {
                    "column": 39,
                    "line": 149
                  }
                }
              },
              "range": [
                4395,
                4398
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 149
                },
                "start": {
                  "column": 39,
                  "line": 149
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  4407,
                  4408
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 149
                  },
                  "start": {
                    "column": 51,
                    "line": 149
                  }
                }
              },
              "range": [
                4407,
                4408
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 149
                },
                "start": {
                  "column": 51,
                  "line": 149
                }
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'y'",
                "value": "y",
                "range": [
                  4417,
                  4420
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 149
                  },
                  "start": {
                    "column": 61,
                    "line": 149
                  }
                }
              },
              "range": [
                4417,
                4420
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 149
                },
                "start": {
                  "column": 61,
                  "line": 149
                }
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'x'",
                "value": "x",
                "range": [
                  4411,
                  4414
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 149
                  },
                  "start": {
                    "column": 55,
                    "line": 149
                  }
                }
              },
              "range": [
                4411,
                4414
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 149
                },
                "start": {
                  "column": 55,
                  "line": 149
                }
              }
            },
            "range": [
              4395,
              4420
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 149
              },
              "start": {
                "column": 39,
                "line": 149
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4423,
              4429
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 149
              },
              "start": {
                "column": 67,
                "line": 149
              }
            }
          },
          "range": [
            4376,
            4431
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 149
            },
            "start": {
              "column": 20,
              "line": 149
            }
          }
        },
        "range": [
          4370,
          4431
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 149
          },
          "start": {
            "column": 14,
            "line": 149
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 149
          },
          "start": {
            "column": 8,
            "line": 149
          }
        },
        "range": [
          4364,
          4367
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
                4365,
                4366
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 149
                },
                "start": {
                  "column": 9,
                  "line": 149
                }
              }
            },
            "out": false,
            "range": [
              4365,
              4366
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 149
              },
              "start": {
                "column": 9,
                "line": 149
              }
            }
          }
        ]
      },
      "range": [
        4356,
        4432
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 149
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN3",
        "optional": false,
        "range": [
          4438,
          4441
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 150
          },
          "start": {
            "column": 5,
            "line": 150
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  4467,
                  4468
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 150
                  },
                  "start": {
                    "column": 34,
                    "line": 150
                  }
                }
              },
              "range": [
                4467,
                4468
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 150
                },
                "start": {
                  "column": 34,
                  "line": 150
                }
              }
            },
            "range": [
              4461,
              4468
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 150
              },
              "start": {
                "column": 28,
                "line": 150
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4456,
              4457
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 150
              },
              "start": {
                "column": 23,
                "line": 150
              }
            }
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                4479,
                4515
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      4487,
                      4509
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            4495,
                            4503
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
                                  4496,
                                  4497
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 150
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 150
                                  }
                                }
                              },
                              "range": [
                                4496,
                                4497
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 150
                                },
                                "start": {
                                  "column": 63,
                                  "line": 150
                                }
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "'c'",
                                "value": "c",
                                "range": [
                                  4499,
                                  4502
                                ],
                                "loc": {
                                  "end": {
                                    "column": 69,
                                    "line": 150
                                  },
                                  "start": {
                                    "column": 66,
                                    "line": 150
                                  }
                                }
                              },
                              "range": [
                                4499,
                                4502
                              ],
                              "loc": {
                                "end": {
                                  "column": 69,
                                  "line": 150
                                },
                                "start": {
                                  "column": 66,
                                  "line": 150
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 150
                            },
                            "start": {
                              "column": 62,
                              "line": 150
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "range": [
                            4488,
                            4495
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 150
                            },
                            "start": {
                              "column": 55,
                              "line": 150
                            }
                          }
                        },
                        "range": [
                          4488,
                          4503
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 150
                          },
                          "start": {
                            "column": 55,
                            "line": 150
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "'b'",
                          "value": "b",
                          "range": [
                            4505,
                            4508
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 150
                            },
                            "start": {
                              "column": 72,
                              "line": 150
                            }
                          }
                        },
                        "range": [
                          4505,
                          4508
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 150
                          },
                          "start": {
                            "column": 72,
                            "line": 150
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 150
                      },
                      "start": {
                        "column": 54,
                        "line": 150
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "range": [
                      4480,
                      4487
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 150
                      },
                      "start": {
                        "column": 47,
                        "line": 150
                      }
                    }
                  },
                  "range": [
                    4480,
                    4509
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 150
                    },
                    "start": {
                      "column": 47,
                      "line": 150
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      4511,
                      4514
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 150
                      },
                      "start": {
                        "column": 78,
                        "line": 150
                      }
                    }
                  },
                  "range": [
                    4511,
                    4514
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 150
                    },
                    "start": {
                      "column": 78,
                      "line": 150
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 150
                },
                "start": {
                  "column": 46,
                  "line": 150
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exclude",
              "optional": false,
              "range": [
                4472,
                4479
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 150
                },
                "start": {
                  "column": 39,
                  "line": 150
                }
              }
            },
            "range": [
              4472,
              4515
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 150
              },
              "start": {
                "column": 39,
                "line": 150
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4518,
              4524
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 150
              },
              "start": {
                "column": 85,
                "line": 150
              }
            }
          },
          "range": [
            4453,
            4526
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 150
            },
            "start": {
              "column": 20,
              "line": 150
            }
          }
        },
        "range": [
          4447,
          4526
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 150
          },
          "start": {
            "column": 14,
            "line": 150
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 150
          },
          "start": {
            "column": 8,
            "line": 150
          }
        },
        "range": [
          4441,
          4444
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
                4442,
                4443
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 150
                },
                "start": {
                  "column": 9,
                  "line": 150
                }
              }
            },
            "out": false,
            "range": [
              4442,
              4443
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 150
              },
              "start": {
                "column": 9,
                "line": 150
              }
            }
          }
        ]
      },
      "range": [
        4433,
        4527
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 150
        },
        "start": {
          "column": 0,
          "line": 150
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN4",
        "optional": false,
        "range": [
          4533,
          4536
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 151
          },
          "start": {
            "column": 5,
            "line": 151
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  4565,
                  4566
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 151
                  },
                  "start": {
                    "column": 37,
                    "line": 151
                  }
                }
              },
              "range": [
                4565,
                4566
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 151
                },
                "start": {
                  "column": 37,
                  "line": 151
                }
              }
            },
            "range": [
              4559,
              4566
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 151
              },
              "start": {
                "column": 31,
                "line": 151
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              4554,
              4555
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 151
              },
              "start": {
                "column": 26,
                "line": 151
              }
            }
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    4571,
                    4572
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 151
                    },
                    "start": {
                      "column": 43,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4571,
                  4572
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 151
                  },
                  "start": {
                    "column": 43,
                    "line": 151
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    4581,
                    4582
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 151
                    },
                    "start": {
                      "column": 53,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4581,
                  4582
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 151
                  },
                  "start": {
                    "column": 53,
                    "line": 151
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  4592,
                  4597
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 151
                  },
                  "start": {
                    "column": 64,
                    "line": 151
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
                    "name": "K",
                    "optional": false,
                    "range": [
                      4587,
                      4588
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 151
                      },
                      "start": {
                        "column": 59,
                        "line": 151
                      }
                    }
                  },
                  "range": [
                    4587,
                    4588
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 151
                    },
                    "start": {
                      "column": 59,
                      "line": 151
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
                      4585,
                      4586
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 151
                      },
                      "start": {
                        "column": 57,
                        "line": 151
                      }
                    }
                  },
                  "range": [
                    4585,
                    4586
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 151
                    },
                    "start": {
                      "column": 57,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4585,
                  4589
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 151
                  },
                  "start": {
                    "column": 57,
                    "line": 151
                  }
                }
              },
              "range": [
                4571,
                4597
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 151
                },
                "start": {
                  "column": 43,
                  "line": 151
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
                  "name": "K",
                  "optional": false,
                  "range": [
                    4609,
                    4610
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 151
                    },
                    "start": {
                      "column": 81,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4609,
                  4610
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 151
                  },
                  "start": {
                    "column": 81,
                    "line": 151
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
                    4607,
                    4608
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 151
                    },
                    "start": {
                      "column": 79,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4607,
                  4608
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 151
                  },
                  "start": {
                    "column": 79,
                    "line": 151
                  }
                }
              },
              "range": [
                4607,
                4611
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 151
                },
                "start": {
                  "column": 79,
                  "line": 151
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                4618,
                4623
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 151
                },
                "start": {
                  "column": 90,
                  "line": 151
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  4614,
                  4615
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 151
                  },
                  "start": {
                    "column": 86,
                    "line": 151
                  }
                }
              },
              "range": [
                4614,
                4615
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 151
                },
                "start": {
                  "column": 86,
                  "line": 151
                }
              }
            },
            "range": [
              4570,
              4623
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 151
              },
              "start": {
                "column": 42,
                "line": 151
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4626,
              4632
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 151
              },
              "start": {
                "column": 98,
                "line": 151
              }
            }
          },
          "range": [
            4551,
            4634
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 151
            },
            "start": {
              "column": 23,
              "line": 151
            }
          }
        },
        "range": [
          4545,
          4634
        ],
        "loc": {
          "end": {
            "column": 106,
            "line": 151
          },
          "start": {
            "column": 17,
            "line": 151
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 151
          },
          "start": {
            "column": 8,
            "line": 151
          }
        },
        "range": [
          4536,
          4542
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
                4537,
                4538
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 151
                },
                "start": {
                  "column": 9,
                  "line": 151
                }
              }
            },
            "out": false,
            "range": [
              4537,
              4538
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 151
              },
              "start": {
                "column": 9,
                "line": 151
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
              "name": "U",
              "optional": false,
              "range": [
                4540,
                4541
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 151
                },
                "start": {
                  "column": 12,
                  "line": 151
                }
              }
            },
            "out": false,
            "range": [
              4540,
              4541
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 151
              },
              "start": {
                "column": 12,
                "line": 151
              }
            }
          }
        ]
      },
      "range": [
        4528,
        4635
      ],
      "loc": {
        "end": {
          "column": 107,
          "line": 151
        },
        "start": {
          "column": 0,
          "line": 151
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN5",
        "optional": false,
        "range": [
          4641,
          4644
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 152
          },
          "start": {
            "column": 5,
            "line": 152
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  4673,
                  4674
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 152
                  },
                  "start": {
                    "column": 37,
                    "line": 152
                  }
                }
              },
              "range": [
                4673,
                4674
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 152
                },
                "start": {
                  "column": 37,
                  "line": 152
                }
              }
            },
            "range": [
              4667,
              4674
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 152
              },
              "start": {
                "column": 31,
                "line": 152
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              4662,
              4663
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 152
              },
              "start": {
                "column": 26,
                "line": 152
              }
            }
          },
          "nameType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    4692,
                    4693
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 152
                    },
                    "start": {
                      "column": 56,
                      "line": 152
                    }
                  }
                },
                "range": [
                  4692,
                  4693
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 152
                  },
                  "start": {
                    "column": 56,
                    "line": 152
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  4687,
                  4688
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 152
                  },
                  "start": {
                    "column": 51,
                    "line": 152
                  }
                }
              },
              "nameType": {
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
                        4699,
                        4700
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 152
                        },
                        "start": {
                          "column": 63,
                          "line": 152
                        }
                      }
                    },
                    "range": [
                      4699,
                      4700
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 152
                      },
                      "start": {
                        "column": 63,
                        "line": 152
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
                        4697,
                        4698
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 152
                        },
                        "start": {
                          "column": 61,
                          "line": 152
                        }
                      }
                    },
                    "range": [
                      4697,
                      4698
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 152
                      },
                      "start": {
                        "column": 61,
                        "line": 152
                      }
                    }
                  },
                  "range": [
                    4697,
                    4701
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 152
                    },
                    "start": {
                      "column": 61,
                      "line": 152
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      4710,
                      4711
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 152
                      },
                      "start": {
                        "column": 74,
                        "line": 152
                      }
                    }
                  },
                  "range": [
                    4710,
                    4711
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 152
                    },
                    "start": {
                      "column": 74,
                      "line": 152
                    }
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    4718,
                    4723
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 152
                    },
                    "start": {
                      "column": 82,
                      "line": 152
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      4714,
                      4715
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 152
                      },
                      "start": {
                        "column": 78,
                        "line": 152
                      }
                    }
                  },
                  "range": [
                    4714,
                    4715
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 152
                    },
                    "start": {
                      "column": 78,
                      "line": 152
                    }
                  }
                },
                "range": [
                  4697,
                  4723
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 152
                  },
                  "start": {
                    "column": 61,
                    "line": 152
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    4726,
                    4730
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 152
                    },
                    "start": {
                      "column": 90,
                      "line": 152
                    }
                  }
                },
                "range": [
                  4726,
                  4730
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 152
                  },
                  "start": {
                    "column": 90,
                    "line": 152
                  }
                }
              },
              "range": [
                4684,
                4732
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 152
                },
                "start": {
                  "column": 48,
                  "line": 152
                }
              }
            },
            "range": [
              4678,
              4732
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 152
              },
              "start": {
                "column": 42,
                "line": 152
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              4735,
              4741
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 152
              },
              "start": {
                "column": 99,
                "line": 152
              }
            }
          },
          "range": [
            4659,
            4743
          ],
          "loc": {
            "end": {
              "column": 107,
              "line": 152
            },
            "start": {
              "column": 23,
              "line": 152
            }
          }
        },
        "range": [
          4653,
          4743
        ],
        "loc": {
          "end": {
            "column": 107,
            "line": 152
          },
          "start": {
            "column": 17,
            "line": 152
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 152
          },
          "start": {
            "column": 8,
            "line": 152
          }
        },
        "range": [
          4644,
          4650
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
                4645,
                4646
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 152
                },
                "start": {
                  "column": 9,
                  "line": 152
                }
              }
            },
            "out": false,
            "range": [
              4645,
              4646
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 152
              },
              "start": {
                "column": 9,
                "line": 152
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
              "name": "U",
              "optional": false,
              "range": [
                4648,
                4649
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 152
                },
                "start": {
                  "column": 12,
                  "line": 152
                }
              }
            },
            "out": false,
            "range": [
              4648,
              4649
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 152
              },
              "start": {
                "column": 12,
                "line": 152
              }
            }
          }
        ]
      },
      "range": [
        4636,
        4744
      ],
      "loc": {
        "end": {
          "column": 108,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 152
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fruit",
        "optional": false,
        "range": [
          4818,
          4823
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 155
          },
          "start": {
            "column": 5,
            "line": 155
          }
        }
      },
      "typeAnnotation": {
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    4838,
                    4842
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 157
                    },
                    "start": {
                      "column": 6,
                      "line": 157
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
                      "column": 19,
                      "line": 157
                    },
                    "start": {
                      "column": 10,
                      "line": 157
                    }
                  },
                  "range": [
                    4842,
                    4851
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"apple\"",
                      "value": "apple",
                      "range": [
                        4844,
                        4851
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 157
                        },
                        "start": {
                          "column": 12,
                          "line": 157
                        }
                      }
                    },
                    "range": [
                      4844,
                      4851
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 157
                      },
                      "start": {
                        "column": 12,
                        "line": 157
                      }
                    }
                  }
                },
                "range": [
                  4838,
                  4852
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 157
                  },
                  "start": {
                    "column": 6,
                    "line": 157
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "range": [
                    4859,
                    4864
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 158
                    },
                    "start": {
                      "column": 6,
                      "line": 158
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
                      "column": 18,
                      "line": 158
                    },
                    "start": {
                      "column": 11,
                      "line": 158
                    }
                  },
                  "range": [
                    4864,
                    4871
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"red\"",
                      "value": "red",
                      "range": [
                        4866,
                        4871
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 158
                        },
                        "start": {
                          "column": 13,
                          "line": 158
                        }
                      }
                    },
                    "range": [
                      4866,
                      4871
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 158
                      },
                      "start": {
                        "column": 13,
                        "line": 158
                      }
                    }
                  }
                },
                "range": [
                  4859,
                  4872
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 158
                  },
                  "start": {
                    "column": 6,
                    "line": 158
                  }
                }
              }
            ],
            "range": [
              4830,
              4878
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 159
              },
              "start": {
                "column": 4,
                "line": 156
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    4891,
                    4895
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 161
                    },
                    "start": {
                      "column": 6,
                      "line": 161
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
                      "column": 20,
                      "line": 161
                    },
                    "start": {
                      "column": 10,
                      "line": 161
                    }
                  },
                  "range": [
                    4895,
                    4905
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"banana\"",
                      "value": "banana",
                      "range": [
                        4897,
                        4905
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 161
                        },
                        "start": {
                          "column": 12,
                          "line": 161
                        }
                      }
                    },
                    "range": [
                      4897,
                      4905
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 161
                      },
                      "start": {
                        "column": 12,
                        "line": 161
                      }
                    }
                  }
                },
                "range": [
                  4891,
                  4906
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 161
                  },
                  "start": {
                    "column": 6,
                    "line": 161
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "range": [
                    4913,
                    4918
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 162
                    },
                    "start": {
                      "column": 6,
                      "line": 162
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
                      "column": 21,
                      "line": 162
                    },
                    "start": {
                      "column": 11,
                      "line": 162
                    }
                  },
                  "range": [
                    4918,
                    4928
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"yellow\"",
                      "value": "yellow",
                      "range": [
                        4920,
                        4928
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 162
                        },
                        "start": {
                          "column": 13,
                          "line": 162
                        }
                      }
                    },
                    "range": [
                      4920,
                      4928
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 162
                      },
                      "start": {
                        "column": 13,
                        "line": 162
                      }
                    }
                  }
                },
                "range": [
                  4913,
                  4929
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 162
                  },
                  "start": {
                    "column": 6,
                    "line": 162
                  }
                }
              }
            ],
            "range": [
              4883,
              4935
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 163
              },
              "start": {
                "column": 4,
                "line": 160
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    4948,
                    4952
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 165
                    },
                    "start": {
                      "column": 6,
                      "line": 165
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
                      "column": 20,
                      "line": 165
                    },
                    "start": {
                      "column": 10,
                      "line": 165
                    }
                  },
                  "range": [
                    4952,
                    4962
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"orange\"",
                      "value": "orange",
                      "range": [
                        4954,
                        4962
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 165
                        },
                        "start": {
                          "column": 12,
                          "line": 165
                        }
                      }
                    },
                    "range": [
                      4954,
                      4962
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 165
                      },
                      "start": {
                        "column": 12,
                        "line": 165
                      }
                    }
                  }
                },
                "range": [
                  4948,
                  4963
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 165
                  },
                  "start": {
                    "column": 6,
                    "line": 165
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "range": [
                    4970,
                    4975
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 166
                    },
                    "start": {
                      "column": 6,
                      "line": 166
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
                      "column": 21,
                      "line": 166
                    },
                    "start": {
                      "column": 11,
                      "line": 166
                    }
                  },
                  "range": [
                    4975,
                    4985
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"orange\"",
                      "value": "orange",
                      "range": [
                        4977,
                        4985
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 166
                        },
                        "start": {
                          "column": 13,
                          "line": 166
                        }
                      }
                    },
                    "range": [
                      4977,
                      4985
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 166
                      },
                      "start": {
                        "column": 13,
                        "line": 166
                      }
                    }
                  }
                },
                "range": [
                  4970,
                  4986
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 166
                  },
                  "start": {
                    "column": 6,
                    "line": 166
                  }
                }
              }
            ],
            "range": [
              4940,
              4992
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 167
              },
              "start": {
                "column": 4,
                "line": 164
              }
            }
          }
        ],
        "range": [
          4828,
          4992
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 167
          },
          "start": {
            "column": 2,
            "line": 156
          }
        }
      },
      "range": [
        4813,
        4993
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 167
        },
        "start": {
          "column": 0,
          "line": 155
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "range": [
          4999,
          5006
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 168
          },
          "start": {
            "column": 5,
            "line": 168
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              5081,
              5082
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 169
              },
              "start": {
                "column": 10,
                "line": 169
              }
            }
          },
          "range": [
            5081,
            5082
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 169
            },
            "start": {
              "column": 10,
              "line": 169
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "range": [
            5074,
            5077
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 169
            },
            "start": {
              "column": 3,
              "line": 169
            }
          }
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                5086,
                5089
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 169
                },
                "start": {
                  "column": 15,
                  "line": 169
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": ":",
                "raw": ":"
              },
              "range": [
                5100,
                5104
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 169
                },
                "start": {
                  "column": 29,
                  "line": 169
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                5116,
                5118
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 169
                },
                "start": {
                  "column": 45,
                  "line": 169
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'name'",
                  "value": "name",
                  "range": [
                    5093,
                    5099
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 169
                    },
                    "start": {
                      "column": 22,
                      "line": 169
                    }
                  }
                },
                "range": [
                  5093,
                  5099
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 169
                  },
                  "start": {
                    "column": 22,
                    "line": 169
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "range": [
                    5089,
                    5092
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 169
                    },
                    "start": {
                      "column": 18,
                      "line": 169
                    }
                  }
                },
                "range": [
                  5089,
                  5092
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 169
                  },
                  "start": {
                    "column": 18,
                    "line": 169
                  }
                }
              },
              "range": [
                5089,
                5100
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 169
                },
                "start": {
                  "column": 18,
                  "line": 169
                }
              }
            },
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'color'",
                  "value": "color",
                  "range": [
                    5108,
                    5115
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 169
                    },
                    "start": {
                      "column": 37,
                      "line": 169
                    }
                  }
                },
                "range": [
                  5108,
                  5115
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 169
                  },
                  "start": {
                    "column": 37,
                    "line": 169
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "range": [
                    5104,
                    5107
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 169
                    },
                    "start": {
                      "column": 33,
                      "line": 169
                    }
                  }
                },
                "range": [
                  5104,
                  5107
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 169
                  },
                  "start": {
                    "column": 33,
                    "line": 169
                  }
                }
              },
              "range": [
                5104,
                5116
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 169
                },
                "start": {
                  "column": 33,
                  "line": 169
                }
              }
            }
          ],
          "range": [
            5086,
            5118
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 169
            },
            "start": {
              "column": 15,
              "line": 169
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "range": [
            5121,
            5128
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 169
            },
            "start": {
              "column": 50,
              "line": 169
            }
          }
        },
        "range": [
          5069,
          5130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 75,
            "line": 168
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 72,
            "line": 168
          },
          "start": {
            "column": 12,
            "line": 168
          }
        },
        "range": [
          5006,
          5066
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      5018,
                      5022
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 168
                      },
                      "start": {
                        "column": 24,
                        "line": 168
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
                        "column": 45,
                        "line": 168
                      },
                      "start": {
                        "column": 28,
                        "line": 168
                      }
                    },
                    "range": [
                      5022,
                      5039
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5024,
                            5030
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 168
                            },
                            "start": {
                              "column": 30,
                              "line": 168
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            5033,
                            5039
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 168
                            },
                            "start": {
                              "column": 39,
                              "line": 168
                            }
                          }
                        }
                      ],
                      "range": [
                        5024,
                        5039
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 168
                        },
                        "start": {
                          "column": 30,
                          "line": 168
                        }
                      }
                    }
                  },
                  "range": [
                    5018,
                    5040
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 168
                    },
                    "start": {
                      "column": 24,
                      "line": 168
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "range": [
                      5041,
                      5046
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 168
                      },
                      "start": {
                        "column": 47,
                        "line": 168
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
                        "column": 69,
                        "line": 168
                      },
                      "start": {
                        "column": 52,
                        "line": 168
                      }
                    },
                    "range": [
                      5046,
                      5063
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5048,
                            5054
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 168
                            },
                            "start": {
                              "column": 54,
                              "line": 168
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            5057,
                            5063
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 168
                            },
                            "start": {
                              "column": 63,
                              "line": 168
                            }
                          }
                        }
                      ],
                      "range": [
                        5048,
                        5063
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 168
                        },
                        "start": {
                          "column": 54,
                          "line": 168
                        }
                      }
                    }
                  },
                  "range": [
                    5041,
                    5063
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 168
                    },
                    "start": {
                      "column": 47,
                      "line": 168
                    }
                  }
                }
              ],
              "range": [
                5017,
                5065
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 168
                },
                "start": {
                  "column": 23,
                  "line": 168
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
                5007,
                5008
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 168
                },
                "start": {
                  "column": 13,
                  "line": 168
                }
              }
            },
            "out": false,
            "range": [
              5007,
              5065
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 168
              },
              "start": {
                "column": 13,
                "line": 168
              }
            }
          }
        ]
      },
      "range": [
        4994,
        5131
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 168
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "range": [
          5138,
          5145
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 171
          },
          "start": {
            "column": 5,
            "line": 171
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                5226,
                5227
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 172
                },
                "start": {
                  "column": 10,
                  "line": 172
                }
              }
            },
            "range": [
              5226,
              5227
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 172
              },
              "start": {
                "column": 10,
                "line": 172
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Key",
            "optional": false,
            "range": [
              5219,
              5222
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 172
              },
              "start": {
                "column": 3,
                "line": 172
              }
            }
          },
          "nameType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  5231,
                  5234
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 172
                  },
                  "start": {
                    "column": 15,
                    "line": 172
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": ":",
                  "raw": ":"
                },
                "range": [
                  5245,
                  5249
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 172
                  },
                  "start": {
                    "column": 29,
                    "line": 172
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  5261,
                  5263
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 172
                  },
                  "start": {
                    "column": 45,
                    "line": 172
                  }
                }
              }
            ],
            "types": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'name'",
                    "value": "name",
                    "range": [
                      5238,
                      5244
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 172
                      },
                      "start": {
                        "column": 22,
                        "line": 172
                      }
                    }
                  },
                  "range": [
                    5238,
                    5244
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 172
                    },
                    "start": {
                      "column": 22,
                      "line": 172
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      5234,
                      5237
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 172
                      },
                      "start": {
                        "column": 18,
                        "line": 172
                      }
                    }
                  },
                  "range": [
                    5234,
                    5237
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 172
                    },
                    "start": {
                      "column": 18,
                      "line": 172
                    }
                  }
                },
                "range": [
                  5234,
                  5245
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 172
                  },
                  "start": {
                    "column": 18,
                    "line": 172
                  }
                }
              },
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'color'",
                    "value": "color",
                    "range": [
                      5253,
                      5260
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 172
                      },
                      "start": {
                        "column": 37,
                        "line": 172
                      }
                    }
                  },
                  "range": [
                    5253,
                    5260
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 172
                    },
                    "start": {
                      "column": 37,
                      "line": 172
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      5249,
                      5252
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 172
                      },
                      "start": {
                        "column": 33,
                        "line": 172
                      }
                    }
                  },
                  "range": [
                    5249,
                    5252
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 172
                    },
                    "start": {
                      "column": 33,
                      "line": 172
                    }
                  }
                },
                "range": [
                  5249,
                  5261
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 172
                  },
                  "start": {
                    "column": 33,
                    "line": 172
                  }
                }
              }
            ],
            "range": [
              5231,
              5263
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 172
              },
              "start": {
                "column": 15,
                "line": 172
              }
            }
          },
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "range": [
              5266,
              5273
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 172
              },
              "start": {
                "column": 50,
                "line": 172
              }
            }
          },
          "range": [
            5214,
            5275
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 173
            },
            "start": {
              "column": 81,
              "line": 171
            }
          }
        },
        "range": [
          5208,
          5275
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 173
          },
          "start": {
            "column": 75,
            "line": 171
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 72,
            "line": 171
          },
          "start": {
            "column": 12,
            "line": 171
          }
        },
        "range": [
          5145,
          5205
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      5157,
                      5161
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 171
                      },
                      "start": {
                        "column": 24,
                        "line": 171
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
                        "column": 45,
                        "line": 171
                      },
                      "start": {
                        "column": 28,
                        "line": 171
                      }
                    },
                    "range": [
                      5161,
                      5178
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5163,
                            5169
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 171
                            },
                            "start": {
                              "column": 30,
                              "line": 171
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            5172,
                            5178
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 171
                            },
                            "start": {
                              "column": 39,
                              "line": 171
                            }
                          }
                        }
                      ],
                      "range": [
                        5163,
                        5178
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 171
                        },
                        "start": {
                          "column": 30,
                          "line": 171
                        }
                      }
                    }
                  },
                  "range": [
                    5157,
                    5179
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 171
                    },
                    "start": {
                      "column": 24,
                      "line": 171
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "range": [
                      5180,
                      5185
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 171
                      },
                      "start": {
                        "column": 47,
                        "line": 171
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
                        "column": 69,
                        "line": 171
                      },
                      "start": {
                        "column": 52,
                        "line": 171
                      }
                    },
                    "range": [
                      5185,
                      5202
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5187,
                            5193
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 171
                            },
                            "start": {
                              "column": 54,
                              "line": 171
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            5196,
                            5202
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 171
                            },
                            "start": {
                              "column": 63,
                              "line": 171
                            }
                          }
                        }
                      ],
                      "range": [
                        5187,
                        5202
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 171
                        },
                        "start": {
                          "column": 54,
                          "line": 171
                        }
                      }
                    }
                  },
                  "range": [
                    5180,
                    5202
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 171
                    },
                    "start": {
                      "column": 47,
                      "line": 171
                    }
                  }
                }
              ],
              "range": [
                5156,
                5204
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 171
                },
                "start": {
                  "column": 23,
                  "line": 171
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
                5146,
                5147
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 171
                },
                "start": {
                  "column": 13,
                  "line": 171
                }
              }
            },
            "out": false,
            "range": [
              5146,
              5204
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 171
              },
              "start": {
                "column": 13,
                "line": 171
              }
            }
          }
        ]
      },
      "range": [
        5133,
        5275
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 173
        },
        "start": {
          "column": 0,
          "line": 171
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          5281,
          5286
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 174
          },
          "start": {
            "column": 5,
            "line": 174
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
              5302,
              5309
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fruit",
                  "optional": false,
                  "range": [
                    5303,
                    5308
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 174
                    },
                    "start": {
                      "column": 27,
                      "line": 174
                    }
                  }
                },
                "range": [
                  5303,
                  5308
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 174
                  },
                  "start": {
                    "column": 27,
                    "line": 174
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 174
              },
              "start": {
                "column": 26,
                "line": 174
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result1",
            "optional": false,
            "range": [
              5295,
              5302
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 174
              },
              "start": {
                "column": 19,
                "line": 174
              }
            }
          },
          "range": [
            5295,
            5309
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 174
            },
            "start": {
              "column": 19,
              "line": 174
            }
          }
        },
        "range": [
          5289,
          5309
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 174
          },
          "start": {
            "column": 13,
            "line": 174
          }
        }
      },
      "range": [
        5276,
        5309
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 174
        },
        "start": {
          "column": 0,
          "line": 174
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "range": [
          5366,
          5371
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 175
          },
          "start": {
            "column": 5,
            "line": 175
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5381,
            5388
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fruit",
                "optional": false,
                "range": [
                  5382,
                  5387
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 175
                  },
                  "start": {
                    "column": 21,
                    "line": 175
                  }
                }
              },
              "range": [
                5382,
                5387
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 175
                },
                "start": {
                  "column": 21,
                  "line": 175
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 175
            },
            "start": {
              "column": 20,
              "line": 175
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Result2",
          "optional": false,
          "range": [
            5374,
            5381
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 175
            },
            "start": {
              "column": 13,
              "line": 175
            }
          }
        },
        "range": [
          5374,
          5388
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 175
          },
          "start": {
            "column": 13,
            "line": 175
          }
        }
      },
      "range": [
        5361,
        5388
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 176
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
