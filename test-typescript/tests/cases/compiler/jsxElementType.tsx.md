__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    2978
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          67,
          74
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              56,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        75
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
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
        "name": "React18ReactFragment",
        "optional": false,
        "range": [
          82,
          102
        ],
        "loc": {
          "end": {
            "column": 25,
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
            118,
            136
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "React18ReactNode",
                "optional": false,
                "range": [
                  119,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              },
              "range": [
                119,
                135
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 4
                },
                "start": {
                  "column": 42,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 4
            },
            "start": {
              "column": 41,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "range": [
            105,
            118
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 4
            },
            "start": {
              "column": 28,
              "line": 4
            }
          }
        },
        "range": [
          105,
          136
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 4
          },
          "start": {
            "column": 28,
            "line": 4
          }
        }
      },
      "range": [
        77,
        137
      ],
      "loc": {
        "end": {
          "column": 60,
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
        "name": "React18ReactNode",
        "optional": false,
        "range": [
          143,
          159
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                184,
                189
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    185,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 23,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "range": [
                  166,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactElement",
                "optional": false,
                "range": [
                  172,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "range": [
                166,
                184
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              166,
              189
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              194,
              200
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSNumberKeyword",
            "range": [
              205,
              211
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "React18ReactFragment",
              "optional": false,
              "range": [
                216,
                236
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              216,
              236
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "range": [
                  241,
                  246
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactPortal",
                "optional": false,
                "range": [
                  247,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "range": [
                241,
                258
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              241,
              258
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "TSBooleanKeyword",
            "range": [
              263,
              270
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSNullKeyword",
            "range": [
              275,
              279
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              284,
              293
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                305,
                323
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React18ReactNode",
                    "optional": false,
                    "range": [
                      306,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    306,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                298,
                305
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              298,
              323
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          164,
          323
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 14
          },
          "start": {
            "column": 2,
            "line": 6
          }
        }
      },
      "range": [
        138,
        324
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NewReactJSXElementConstructor",
        "optional": false,
        "range": [
          425,
          454
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 11,
                      "line": 18
                    }
                  },
                  "range": [
                    471,
                    474
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        473,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 18
                        },
                        "start": {
                          "column": 13,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      473,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  466,
                  474
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 18
                  },
                  "start": {
                    "column": 6,
                    "line": 18
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              },
              "range": [
                476,
                495
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React18ReactNode",
                  "optional": false,
                  "range": [
                    479,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 18
                    },
                    "start": {
                      "column": 19,
                      "line": 18
                    }
                  }
                },
                "range": [
                  479,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              465,
              495
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 18
              },
              "start": {
                "column": 5,
                "line": 18
              }
            }
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  },
                  "range": [
                    512,
                    515
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        514,
                        515
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 19
                        },
                        "start": {
                          "column": 17,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      514,
                      515
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  507,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 19
                }
              },
              "range": [
                517,
                543
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    535,
                    543
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
                          536,
                          537
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 19
                          },
                          "start": {
                            "column": 39,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        536,
                        537
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 19
                        },
                        "start": {
                          "column": 39,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        539,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 19
                        },
                        "start": {
                          "column": 42,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 38,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "range": [
                      520,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 23,
                        "line": 19
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "range": [
                      526,
                      535
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 19
                      },
                      "start": {
                        "column": 29,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    520,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 19
                    },
                    "start": {
                      "column": 23,
                      "line": 19
                    }
                  }
                },
                "range": [
                  520,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 23,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              502,
              543
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 5,
                "line": 19
              }
            }
          }
        ],
        "range": [
          462,
          544
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 19
          },
          "start": {
            "column": 2,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 17
          },
          "start": {
            "column": 34,
            "line": 17
          }
        },
        "range": [
          454,
          457
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
                455,
                456
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 17
                },
                "start": {
                  "column": 35,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              455,
              456
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 35,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        420,
        545
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "ElementType",
                    "optional": false,
                    "range": [
                      591,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          605,
                          611
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 23
                          },
                          "start": {
                            "column": 23,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            643,
                            648
                          ],
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "range": [
                                644,
                                647
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 23
                                },
                                "start": {
                                  "column": 62,
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
                              "column": 61,
                              "line": 23
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NewReactJSXElementConstructor",
                          "optional": false,
                          "range": [
                            614,
                            643
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 23
                            },
                            "start": {
                              "column": 32,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          614,
                          648
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 23
                          },
                          "start": {
                            "column": 32,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      605,
                      648
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 23
                      },
                      "start": {
                        "column": 23,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    586,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      682,
                      748
                    ],
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "key": {
                          "type": "Literal",
                          "raw": "'my-custom-element'",
                          "value": "my-custom-element",
                          "range": [
                            691,
                            710
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 25
                            },
                            "start": {
                              "column": 7,
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
                              "column": 57,
                              "line": 25
                            },
                            "start": {
                              "column": 27,
                              "line": 25
                            }
                          },
                          "range": [
                            711,
                            741
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                732,
                                741
                              ],
                              "params": [
                                {
                                  "type": "TSUnknownKeyword",
                                  "range": [
                                    733,
                                    740
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 25
                                },
                                "start": {
                                  "column": 48,
                                  "line": 25
                                }
                              }
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "range": [
                                  713,
                                  718
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 25
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DOMAttributes",
                                "optional": false,
                                "range": [
                                  719,
                                  732
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                713,
                                732
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 25
                                },
                                "start": {
                                  "column": 29,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              713,
                              741
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 25
                              },
                              "start": {
                                "column": 29,
                                "line": 25
                              }
                            }
                          }
                        },
                        "range": [
                          690,
                          742
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 25
                          },
                          "start": {
                            "column": 6,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 26
                      },
                      "start": {
                        "column": 32,
                        "line": 24
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "range": [
                      664,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 24
                      },
                      "start": {
                        "column": 14,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    654,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                580,
                752
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 27
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                576,
                579
              ],
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 12,
                  "line": 22
                }
              }
            },
            "kind": "namespace",
            "range": [
              566,
              752
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "range": [
          562,
          754
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 15,
            "line": 21
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          555,
          561
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 8,
            "line": 21
          }
        }
      },
      "kind": "global",
      "range": [
        547,
        754
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "Component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 30
                },
                "start": {
                  "column": 13,
                  "line": 30
                }
              },
              "range": [
                769,
                819
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    800,
                    819
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
                            "name": "title",
                            "optional": false,
                            "range": [
                              803,
                              808
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 30
                              },
                              "start": {
                                "column": 47,
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
                                "column": 60,
                                "line": 30
                              },
                              "start": {
                                "column": 52,
                                "line": 30
                              }
                            },
                            "range": [
                              808,
                              816
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                810,
                                816
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 30
                                },
                                "start": {
                                  "column": 54,
                                  "line": 30
                                }
                              }
                            }
                          },
                          "range": [
                            803,
                            816
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 30
                            },
                            "start": {
                              "column": 47,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        801,
                        818
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 30
                        },
                        "start": {
                          "column": 45,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 30
                    },
                    "start": {
                      "column": 44,
                      "line": 30
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NewReactJSXElementConstructor",
                  "optional": false,
                  "range": [
                    771,
                    800
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 30
                    },
                    "start": {
                      "column": 15,
                      "line": 30
                    }
                  }
                },
                "range": [
                  771,
                  819
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 30
                  },
                  "start": {
                    "column": 15,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              760,
              819
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": null,
          "range": [
            760,
            819
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        756,
        820
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "RenderElement",
            "optional": false,
            "range": [
              828,
              841
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "JSXElement",
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "range": [
                      884,
                      889
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 32
                      },
                      "start": {
                        "column": 62,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    883,
                    890
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 32
                    },
                    "start": {
                      "column": 61,
                      "line": 32
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    892,
                    895
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 32
                    },
                    "start": {
                      "column": 70,
                      "line": 32
                    }
                  }
                },
                "range": [
                  890,
                  896
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 32
                  },
                  "start": {
                    "column": 68,
                    "line": 32
                  }
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    879,
                    882
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 32
                    },
                    "start": {
                      "column": 57,
                      "line": 32
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  878,
                  883
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 32
                  },
                  "start": {
                    "column": 56,
                    "line": 32
                  }
                }
              },
              "range": [
                878,
                896
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 32
                },
                "start": {
                  "column": 56,
                  "line": 32
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "range": [
                        847,
                        852
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 32
                        },
                        "start": {
                          "column": 25,
                          "line": 32
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
                      "name": "title",
                      "optional": false,
                      "range": [
                        847,
                        852
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 32
                        },
                        "start": {
                          "column": 25,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      847,
                      852
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 32
                      },
                      "start": {
                        "column": 25,
                        "line": 32
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 32
                    },
                    "start": {
                      "column": 32,
                      "line": 32
                    }
                  },
                  "range": [
                    854,
                    873
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
                            858,
                            863
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 32
                            },
                            "start": {
                              "column": 36,
                              "line": 32
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
                              "line": 32
                            },
                            "start": {
                              "column": 41,
                              "line": 32
                            }
                          },
                          "range": [
                            863,
                            871
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              865,
                              871
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 32
                              },
                              "start": {
                                "column": 43,
                                "line": 32
                              }
                            }
                          }
                        },
                        "range": [
                          858,
                          871
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 32
                          },
                          "start": {
                            "column": 36,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "range": [
                      856,
                      873
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 32
                      },
                      "start": {
                        "column": 34,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  845,
                  873
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 32
                  },
                  "start": {
                    "column": 23,
                    "line": 32
                  }
                }
              }
            ],
            "range": [
              844,
              896
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 32
              },
              "start": {
                "column": 22,
                "line": 32
              }
            }
          },
          "range": [
            828,
            896
          ],
          "loc": {
            "end": {
              "column": 74,
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
        822,
        897
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            898,
            907
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderElement",
          "optional": false,
          "range": [
            910,
            923
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 33
            },
            "start": {
              "column": 12,
              "line": 33
            }
          }
        },
        "range": [
          898,
          923
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        898,
        924
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            925,
            942
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "range": [
              926,
              939
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 34
              },
              "start": {
                "column": 1,
                "line": 34
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 17,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "range": [
          925,
          942
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        925,
        943
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            944,
            975
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "range": [
                  959,
                  964
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"react\"",
                "value": "react",
                "range": [
                  965,
                  972
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 35
                  },
                  "start": {
                    "column": 21,
                    "line": 35
                  }
                }
              },
              "range": [
                959,
                972
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 35
                },
                "start": {
                  "column": 15,
                  "line": 35
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "range": [
              945,
              958
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 35
              },
              "start": {
                "column": 1,
                "line": 35
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 31,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "range": [
          944,
          975
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        944,
        976
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            977,
            1005
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "range": [
                  992,
                  1002
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 36
                  },
                  "start": {
                    "column": 15,
                    "line": 36
                  }
                }
              },
              "value": null,
              "range": [
                992,
                1002
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 36
                },
                "start": {
                  "column": 15,
                  "line": 36
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "range": [
              978,
              991
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 36
              },
              "start": {
                "column": 1,
                "line": 36
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 28,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "range": [
          977,
          1005
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        977,
        1006
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "RenderString",
            "optional": false,
            "range": [
              1014,
              1026
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "range": [
                1063,
                1068
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 38
                },
                "start": {
                  "column": 55,
                  "line": 38
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "range": [
                        1032,
                        1037
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 38
                        },
                        "start": {
                          "column": 24,
                          "line": 38
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
                      "name": "title",
                      "optional": false,
                      "range": [
                        1032,
                        1037
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 38
                        },
                        "start": {
                          "column": 24,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1032,
                      1037
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 38
                      },
                      "start": {
                        "column": 24,
                        "line": 38
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 38
                    },
                    "start": {
                      "column": 31,
                      "line": 38
                    }
                  },
                  "range": [
                    1039,
                    1058
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
                            1043,
                            1048
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 38
                            },
                            "start": {
                              "column": 35,
                              "line": 38
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
                              "line": 38
                            },
                            "start": {
                              "column": 40,
                              "line": 38
                            }
                          },
                          "range": [
                            1048,
                            1056
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1050,
                              1056
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 38
                              },
                              "start": {
                                "column": 42,
                                "line": 38
                              }
                            }
                          }
                        },
                        "range": [
                          1043,
                          1056
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 38
                          },
                          "start": {
                            "column": 35,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "range": [
                      1041,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 38
                      },
                      "start": {
                        "column": 33,
                        "line": 38
                      }
                    }
                  }
                },
                "range": [
                  1030,
                  1058
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 38
                  },
                  "start": {
                    "column": 22,
                    "line": 38
                  }
                }
              }
            ],
            "range": [
              1029,
              1068
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 38
              },
              "start": {
                "column": 21,
                "line": 38
              }
            }
          },
          "range": [
            1014,
            1068
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1008,
        1069
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1070,
            1079
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderString",
          "optional": false,
          "range": [
            1082,
            1094
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 39
            },
            "start": {
              "column": 12,
              "line": 39
            }
          }
        },
        "range": [
          1070,
          1094
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        1070,
        1095
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1096,
            1112
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "range": [
              1097,
              1109
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 40
              },
              "start": {
                "column": 1,
                "line": 40
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 16,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "range": [
          1096,
          1112
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1096,
        1113
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1114,
            1144
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "range": [
                  1128,
                  1133
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
              "value": {
                "type": "Literal",
                "raw": "\"react\"",
                "value": "react",
                "range": [
                  1134,
                  1141
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 41
                  },
                  "start": {
                    "column": 20,
                    "line": 41
                  }
                }
              },
              "range": [
                1128,
                1141
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 41
                },
                "start": {
                  "column": 14,
                  "line": 41
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "range": [
              1115,
              1127
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 41
              },
              "start": {
                "column": 1,
                "line": 41
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 30,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "range": [
          1114,
          1144
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1114,
        1145
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1146,
            1173
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "range": [
                  1160,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 42
                  },
                  "start": {
                    "column": 14,
                    "line": 42
                  }
                }
              },
              "value": null,
              "range": [
                1160,
                1170
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 42
                },
                "start": {
                  "column": 14,
                  "line": 42
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "range": [
              1147,
              1159
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 42
              },
              "start": {
                "column": 1,
                "line": 42
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 27,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "range": [
          1146,
          1173
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        1146,
        1174
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "RenderNumber",
            "optional": false,
            "range": [
              1182,
              1194
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "range": [
                  1231,
                  1236
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 44
                  },
                  "start": {
                    "column": 55,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  1237,
                  1243
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 44
                  },
                  "start": {
                    "column": 61,
                    "line": 44
                  }
                }
              },
              "range": [
                1231,
                1243
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 44
                },
                "start": {
                  "column": 55,
                  "line": 44
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "range": [
                        1200,
                        1205
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 44
                        },
                        "start": {
                          "column": 24,
                          "line": 44
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
                      "name": "title",
                      "optional": false,
                      "range": [
                        1200,
                        1205
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 44
                        },
                        "start": {
                          "column": 24,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1200,
                      1205
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 44
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 44
                    },
                    "start": {
                      "column": 31,
                      "line": 44
                    }
                  },
                  "range": [
                    1207,
                    1226
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
                            1211,
                            1216
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 44
                            },
                            "start": {
                              "column": 35,
                              "line": 44
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
                              "line": 44
                            },
                            "start": {
                              "column": 40,
                              "line": 44
                            }
                          },
                          "range": [
                            1216,
                            1224
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1218,
                              1224
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 44
                              },
                              "start": {
                                "column": 42,
                                "line": 44
                              }
                            }
                          }
                        },
                        "range": [
                          1211,
                          1224
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 44
                          },
                          "start": {
                            "column": 35,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "range": [
                      1209,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 44
                      },
                      "start": {
                        "column": 33,
                        "line": 44
                      }
                    }
                  }
                },
                "range": [
                  1198,
                  1226
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 44
                  }
                }
              }
            ],
            "range": [
              1197,
              1243
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 44
              },
              "start": {
                "column": 21,
                "line": 44
              }
            }
          },
          "range": [
            1182,
            1243
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1176,
        1244
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1245,
            1254
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderNumber",
          "optional": false,
          "range": [
            1257,
            1269
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 45
            },
            "start": {
              "column": 12,
              "line": 45
            }
          }
        },
        "range": [
          1245,
          1269
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1245,
        1270
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1271,
            1287
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "range": [
              1272,
              1284
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 46
              },
              "start": {
                "column": 1,
                "line": 46
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 16,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "range": [
          1271,
          1287
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1271,
        1288
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1289,
            1319
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "range": [
                  1303,
                  1308
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
              "value": {
                "type": "Literal",
                "raw": "\"react\"",
                "value": "react",
                "range": [
                  1309,
                  1316
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 47
                  },
                  "start": {
                    "column": 20,
                    "line": 47
                  }
                }
              },
              "range": [
                1303,
                1316
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 47
                },
                "start": {
                  "column": 14,
                  "line": 47
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "range": [
              1290,
              1302
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 47
              },
              "start": {
                "column": 1,
                "line": 47
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 30,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "range": [
          1289,
          1319
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        1289,
        1320
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1321,
            1348
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "range": [
                  1335,
                  1345
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 48
                  },
                  "start": {
                    "column": 14,
                    "line": 48
                  }
                }
              },
              "value": null,
              "range": [
                1335,
                1345
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 48
                },
                "start": {
                  "column": 14,
                  "line": 48
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "range": [
              1322,
              1334
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 48
              },
              "start": {
                "column": 1,
                "line": 48
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 27,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "range": [
          1321,
          1348
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        1321,
        1349
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "RenderArray",
            "optional": false,
            "range": [
              1357,
              1368
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 50
              },
              "start": {
                "column": 6,
                "line": 50
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "range": [
                    1406,
                    1411
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 50
                    },
                    "start": {
                      "column": 55,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                1405,
                1412
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 50
                },
                "start": {
                  "column": 54,
                  "line": 50
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "range": [
                        1374,
                        1379
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 50
                        },
                        "start": {
                          "column": 23,
                          "line": 50
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
                      "name": "title",
                      "optional": false,
                      "range": [
                        1374,
                        1379
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 50
                        },
                        "start": {
                          "column": 23,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1374,
                      1379
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 50
                      },
                      "start": {
                        "column": 23,
                        "line": 50
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 50
                    },
                    "start": {
                      "column": 30,
                      "line": 50
                    }
                  },
                  "range": [
                    1381,
                    1400
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
                            1385,
                            1390
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 50
                            },
                            "start": {
                              "column": 34,
                              "line": 50
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
                              "column": 47,
                              "line": 50
                            },
                            "start": {
                              "column": 39,
                              "line": 50
                            }
                          },
                          "range": [
                            1390,
                            1398
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1392,
                              1398
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 50
                              },
                              "start": {
                                "column": 41,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          1385,
                          1398
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 50
                          },
                          "start": {
                            "column": 34,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "range": [
                      1383,
                      1400
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 50
                      },
                      "start": {
                        "column": 32,
                        "line": 50
                      }
                    }
                  }
                },
                "range": [
                  1372,
                  1400
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 50
                  },
                  "start": {
                    "column": 21,
                    "line": 50
                  }
                }
              }
            ],
            "range": [
              1371,
              1412
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 50
              },
              "start": {
                "column": 20,
                "line": 50
              }
            }
          },
          "range": [
            1357,
            1412
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1351,
        1413
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1414,
            1423
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderArray",
          "optional": false,
          "range": [
            1426,
            1437
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 51
            },
            "start": {
              "column": 12,
              "line": 51
            }
          }
        },
        "range": [
          1414,
          1437
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1414,
        1438
      ],
      "loc": {
        "end": {
          "column": 24,
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
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1439,
            1454
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "range": [
              1440,
              1451
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 52
              },
              "start": {
                "column": 1,
                "line": 52
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 15,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "range": [
          1439,
          1454
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        1439,
        1455
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1456,
            1485
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "range": [
                  1469,
                  1474
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 53
                  },
                  "start": {
                    "column": 13,
                    "line": 53
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"react\"",
                "value": "react",
                "range": [
                  1475,
                  1482
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 53
                  },
                  "start": {
                    "column": 19,
                    "line": 53
                  }
                }
              },
              "range": [
                1469,
                1482
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 53
                },
                "start": {
                  "column": 13,
                  "line": 53
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "range": [
              1457,
              1468
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 53
              },
              "start": {
                "column": 1,
                "line": 53
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 29,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "range": [
          1456,
          1485
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        1456,
        1486
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1487,
            1513
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "range": [
                  1500,
                  1510
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 54
                  },
                  "start": {
                    "column": 13,
                    "line": 54
                  }
                }
              },
              "value": null,
              "range": [
                1500,
                1510
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 54
                },
                "start": {
                  "column": 13,
                  "line": 54
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "range": [
              1488,
              1499
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 54
              },
              "start": {
                "column": 1,
                "line": 54
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 26,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "range": [
          1487,
          1513
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1487,
        1514
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderPromise",
            "optional": false,
            "range": [
              1548,
              1561
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "Literal",
              "raw": "\"react\"",
              "value": "react",
              "range": [
                1604,
                1611
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 57
                },
                "start": {
                  "column": 62,
                  "line": 57
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "range": [
                        1573,
                        1578
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 57
                        },
                        "start": {
                          "column": 31,
                          "line": 57
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
                      "name": "title",
                      "optional": false,
                      "range": [
                        1573,
                        1578
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 57
                        },
                        "start": {
                          "column": 31,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1573,
                      1578
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 57
                      },
                      "start": {
                        "column": 31,
                        "line": 57
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 57
                    },
                    "start": {
                      "column": 38,
                      "line": 57
                    }
                  },
                  "range": [
                    1580,
                    1599
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
                            1584,
                            1589
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 57
                            },
                            "start": {
                              "column": 42,
                              "line": 57
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
                              "column": 55,
                              "line": 57
                            },
                            "start": {
                              "column": 47,
                              "line": 57
                            }
                          },
                          "range": [
                            1589,
                            1597
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1591,
                              1597
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 57
                              },
                              "start": {
                                "column": 49,
                                "line": 57
                              }
                            }
                          }
                        },
                        "range": [
                          1584,
                          1597
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 57
                          },
                          "start": {
                            "column": 42,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "range": [
                      1582,
                      1599
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 57
                      },
                      "start": {
                        "column": 40,
                        "line": 57
                      }
                    }
                  }
                },
                "range": [
                  1571,
                  1599
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 57
                  },
                  "start": {
                    "column": 29,
                    "line": 57
                  }
                }
              }
            ],
            "range": [
              1564,
              1611
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 57
              },
              "start": {
                "column": 22,
                "line": 57
              }
            }
          },
          "range": [
            1548,
            1611
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1542,
        1612
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1613,
            1622
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 58
            },
            "start": {
              "column": 0,
              "line": 58
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderPromise",
          "optional": false,
          "range": [
            1625,
            1638
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 58
            },
            "start": {
              "column": 12,
              "line": 58
            }
          }
        },
        "range": [
          1613,
          1638
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 58
          },
          "start": {
            "column": 0,
            "line": 58
          }
        }
      },
      "range": [
        1613,
        1639
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1640,
            1657
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "range": [
              1641,
              1654
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 59
              },
              "start": {
                "column": 1,
                "line": 59
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 17,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "range": [
          1640,
          1657
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        1640,
        1658
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1659,
            1690
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "range": [
                  1674,
                  1679
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 60
                  },
                  "start": {
                    "column": 15,
                    "line": 60
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"react\"",
                "value": "react",
                "range": [
                  1680,
                  1687
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 60
                  },
                  "start": {
                    "column": 21,
                    "line": 60
                  }
                }
              },
              "range": [
                1674,
                1687
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 60
                },
                "start": {
                  "column": 15,
                  "line": 60
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "range": [
              1660,
              1673
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 60
              },
              "start": {
                "column": 1,
                "line": 60
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 31,
              "line": 60
            },
            "start": {
              "column": 0,
              "line": 60
            }
          }
        },
        "range": [
          1659,
          1690
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        1659,
        1691
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1692,
            1720
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "range": [
                  1707,
                  1717
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 61
                  },
                  "start": {
                    "column": 15,
                    "line": 61
                  }
                }
              },
              "value": null,
              "range": [
                1707,
                1717
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 61
                },
                "start": {
                  "column": 15,
                  "line": 61
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "range": [
              1693,
              1706
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 61
              },
              "start": {
                "column": 1,
                "line": 61
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 28,
              "line": 61
            },
            "start": {
              "column": 0,
              "line": 61
            }
          }
        },
        "range": [
          1692,
          1720
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 61
          }
        }
      },
      "range": [
        1692,
        1721
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1821,
          1870
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                1825,
                1831
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 65
                },
                "start": {
                  "column": 2,
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
                1831,
                1868
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1847,
                            1851
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 66
                            },
                            "start": {
                              "column": 11,
                              "line": 66
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "range": [
                            1852,
                            1857
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 66
                            },
                            "start": {
                              "column": 16,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1847,
                          1857
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 66
                          },
                          "start": {
                            "column": 11,
                            "line": 66
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "title",
                        "optional": false,
                        "range": [
                          1858,
                          1863
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 66
                          },
                          "start": {
                            "column": 22,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1847,
                        1863
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 66
                        },
                        "start": {
                          "column": 11,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1840,
                      1864
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 66
                      },
                      "start": {
                        "column": 4,
                        "line": 66
                      }
                    }
                  }
                ],
                "range": [
                  1834,
                  1868
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 67
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 67
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              }
            },
            "range": [
              1825,
              1868
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 67
              },
              "start": {
                "column": 2,
                "line": 65
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
            "column": 67,
            "line": 64
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenderStringClass",
        "optional": false,
        "range": [
          1760,
          1777
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 64
          },
          "start": {
            "column": 6,
            "line": 64
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            1786,
            1791
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 64
            },
            "start": {
              "column": 32,
              "line": 64
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1792,
            1801
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 64
            },
            "start": {
              "column": 38,
              "line": 64
            }
          }
        },
        "range": [
          1786,
          1801
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 64
          },
          "start": {
            "column": 32,
            "line": 64
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          1801,
          1820
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
                  "name": "title",
                  "optional": false,
                  "range": [
                    1804,
                    1809
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 64
                    },
                    "start": {
                      "column": 50,
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
                      "column": 63,
                      "line": 64
                    },
                    "start": {
                      "column": 55,
                      "line": 64
                    }
                  },
                  "range": [
                    1809,
                    1817
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1811,
                      1817
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 64
                      },
                      "start": {
                        "column": 57,
                        "line": 64
                      }
                    }
                  }
                },
                "range": [
                  1804,
                  1817
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 64
                  },
                  "start": {
                    "column": 50,
                    "line": 64
                  }
                }
              }
            ],
            "range": [
              1802,
              1819
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 64
              },
              "start": {
                "column": 48,
                "line": 64
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 64
          },
          "start": {
            "column": 47,
            "line": 64
          }
        }
      },
      "range": [
        1754,
        1870
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1871,
            1880
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderStringClass",
          "optional": false,
          "range": [
            1883,
            1900
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 69
            },
            "start": {
              "column": 12,
              "line": 69
            }
          }
        },
        "range": [
          1871,
          1900
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1871,
        1901
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1902,
            1923
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "range": [
              1903,
              1920
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 70
              },
              "start": {
                "column": 1,
                "line": 70
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 21,
              "line": 70
            },
            "start": {
              "column": 0,
              "line": 70
            }
          }
        },
        "range": [
          1902,
          1923
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 70
          },
          "start": {
            "column": 0,
            "line": 70
          }
        }
      },
      "range": [
        1902,
        1924
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1925,
            1960
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "range": [
                  1944,
                  1949
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 71
                  },
                  "start": {
                    "column": 19,
                    "line": 71
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"react\"",
                "value": "react",
                "range": [
                  1950,
                  1957
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 71
                  },
                  "start": {
                    "column": 25,
                    "line": 71
                  }
                }
              },
              "range": [
                1944,
                1957
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 71
                },
                "start": {
                  "column": 19,
                  "line": 71
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "range": [
              1926,
              1943
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 71
              },
              "start": {
                "column": 1,
                "line": 71
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 35,
              "line": 71
            },
            "start": {
              "column": 0,
              "line": 71
            }
          }
        },
        "range": [
          1925,
          1960
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 71
          },
          "start": {
            "column": 0,
            "line": 71
          }
        }
      },
      "range": [
        1925,
        1961
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            1962,
            1994
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "range": [
                  1981,
                  1991
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 72
                  },
                  "start": {
                    "column": 19,
                    "line": 72
                  }
                }
              },
              "value": null,
              "range": [
                1981,
                1991
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 72
                },
                "start": {
                  "column": 19,
                  "line": 72
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "range": [
              1963,
              1980
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 72
              },
              "start": {
                "column": 1,
                "line": 72
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 32,
              "line": 72
            },
            "start": {
              "column": 0,
              "line": 72
            }
          }
        },
        "range": [
          1962,
          1994
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        1962,
        1995
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2030,
            2037
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "range": [
              2031,
              2034
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 75
              },
              "start": {
                "column": 1,
                "line": 75
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 7,
              "line": 75
            },
            "start": {
              "column": 0,
              "line": 75
            }
          }
        },
        "range": [
          2030,
          2037
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 75
          },
          "start": {
            "column": 0,
            "line": 75
          }
        }
      },
      "range": [
        2030,
        2038
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2039,
            2060
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "my-custom-element",
            "range": [
              2040,
              2057
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 76
              },
              "start": {
                "column": 1,
                "line": 76
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 21,
              "line": 76
            },
            "start": {
              "column": 0,
              "line": 76
            }
          }
        },
        "range": [
          2039,
          2060
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 76
          },
          "start": {
            "column": 0,
            "line": 76
          }
        }
      },
      "range": [
        2039,
        2061
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2114,
            2122
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "boop",
            "range": [
              2115,
              2119
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 1,
                "line": 78
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 8,
              "line": 78
            },
            "start": {
              "column": 0,
              "line": 78
            }
          }
        },
        "range": [
          2114,
          2122
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 78
          },
          "start": {
            "column": 0,
            "line": 78
          }
        }
      },
      "range": [
        2114,
        2123
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2124,
            2156
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "my-undeclared-custom-element",
            "range": [
              2125,
              2153
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 79
              },
              "start": {
                "column": 1,
                "line": 79
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 32,
              "line": 79
            },
            "start": {
              "column": 0,
              "line": 79
            }
          }
        },
        "range": [
          2124,
          2156
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 79
          },
          "start": {
            "column": 0,
            "line": 79
          }
        }
      },
      "range": [
        2124,
        2157
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2441,
          2443
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 43,
            "line": 84
          },
          "start": {
            "column": 41,
            "line": 84
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactNativeFlatListProps",
        "optional": false,
        "range": [
          2410,
          2434
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 84
          },
          "start": {
            "column": 10,
            "line": 84
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 84
          },
          "start": {
            "column": 34,
            "line": 84
          }
        },
        "range": [
          2434,
          2440
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "range": [
                2435,
                2439
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 84
                },
                "start": {
                  "column": 35,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              2435,
              2439
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 84
              },
              "start": {
                "column": 35,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        2400,
        2443
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
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
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2554,
                2558
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 89
                },
                "start": {
                  "column": 9,
                  "line": 89
                }
              }
            },
            "range": [
              2547,
              2559
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 89
              },
              "start": {
                "column": 2,
                "line": 89
              }
            }
          }
        ],
        "range": [
          2543,
          2561
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 2,
            "line": 88
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactNativeFlatList",
        "optional": false,
        "range": [
          2453,
          2472
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 85
          },
          "start": {
            "column": 9,
            "line": 85
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 11,
                "line": 86
              },
              "start": {
                "column": 7,
                "line": 86
              }
            },
            "range": [
              2481,
              2485
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                2483,
                2485
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 86
                },
                "start": {
                  "column": 9,
                  "line": 86
                }
              }
            }
          },
          "range": [
            2476,
            2485
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 86
            },
            "start": {
              "column": 2,
              "line": 86
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ref",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 87
              },
              "start": {
                "column": 5,
                "line": 87
              }
            },
            "range": [
              2492,
              2540
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2512,
                  2540
                ],
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactNativeFlatList",
                      "optional": false,
                      "range": [
                        2520,
                        2539
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 87
                        },
                        "start": {
                          "column": 33,
                          "line": 87
                        }
                      }
                    },
                    "range": [
                      2513,
                      2539
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 87
                      },
                      "start": {
                        "column": 26,
                        "line": 87
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 87
                  },
                  "start": {
                    "column": 25,
                    "line": 87
                  }
                }
              },
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "range": [
                    2494,
                    2499
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 87
                    },
                    "start": {
                      "column": 7,
                      "line": 87
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ForwardedRef",
                  "optional": false,
                  "range": [
                    2500,
                    2512
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 87
                    },
                    "start": {
                      "column": 13,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2494,
                  2512
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 87
                  },
                  "start": {
                    "column": 7,
                    "line": 87
                  }
                }
              },
              "range": [
                2494,
                2540
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 87
                },
                "start": {
                  "column": 7,
                  "line": 87
                }
              }
            }
          },
          "range": [
            2489,
            2540
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 87
            },
            "start": {
              "column": 2,
              "line": 87
            }
          }
        }
      ],
      "range": [
        2444,
        2561
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2562,
            2585
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "ReactNativeFlatList",
            "range": [
              2563,
              2582
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 91
              },
              "start": {
                "column": 1,
                "line": 91
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 23,
              "line": 91
            },
            "start": {
              "column": 0,
              "line": 91
            }
          }
        },
        "range": [
          2562,
          2585
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 91
          },
          "start": {
            "column": 0,
            "line": 91
          }
        }
      },
      "range": [
        2562,
        2586
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
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
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  2716,
                  2729
                ],
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Component",
                  "range": [
                    2717,
                    2726
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 95
                    },
                    "start": {
                      "column": 10,
                      "line": 95
                    }
                  }
                },
                "selfClosing": true,
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 95
                  },
                  "start": {
                    "column": 9,
                    "line": 95
                  }
                }
              },
              "range": [
                2716,
                2729
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 95
                },
                "start": {
                  "column": 9,
                  "line": 95
                }
              }
            },
            "range": [
              2709,
              2730
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 95
              },
              "start": {
                "column": 2,
                "line": 95
              }
            }
          }
        ],
        "range": [
          2705,
          2732
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 76,
            "line": 94
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          2638,
          2640
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 94
          },
          "start": {
            "column": 9,
            "line": 94
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 94
              },
              "start": {
                "column": 71,
                "line": 94
              }
            },
            "range": [
              2700,
              2703
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2702,
                  2703
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 94
                  },
                  "start": {
                    "column": 73,
                    "line": 94
                  }
                }
              },
              "range": [
                2702,
                2703
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 94
                },
                "start": {
                  "column": 73,
                  "line": 94
                }
              }
            }
          },
          "range": [
            2691,
            2703
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 94
            },
            "start": {
              "column": 62,
              "line": 94
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 94
          },
          "start": {
            "column": 11,
            "line": 94
          }
        },
        "range": [
          2640,
          2690
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 94
                      },
                      "start": {
                        "column": 28,
                        "line": 94
                      }
                    },
                    "range": [
                      2657,
                      2661
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        2659,
                        2661
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 94
                        },
                        "start": {
                          "column": 30,
                          "line": 94
                        }
                      }
                    }
                  },
                  "range": [
                    2652,
                    2661
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 94
                    },
                    "start": {
                      "column": 23,
                      "line": 94
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 94
                  },
                  "start": {
                    "column": 34,
                    "line": 94
                  }
                },
                "range": [
                  2663,
                  2689
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2684,
                      2689
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          2685,
                          2688
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 94
                          },
                          "start": {
                            "column": 56,
                            "line": 94
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 94
                      },
                      "start": {
                        "column": 55,
                        "line": 94
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        2666,
                        2671
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 94
                        },
                        "start": {
                          "column": 37,
                          "line": 94
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "range": [
                        2672,
                        2684
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 94
                        },
                        "start": {
                          "column": 43,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2666,
                      2684
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 94
                      },
                      "start": {
                        "column": 37,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    2666,
                    2689
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 94
                    },
                    "start": {
                      "column": 37,
                      "line": 94
                    }
                  }
                }
              },
              "range": [
                2651,
                2689
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 94
                },
                "start": {
                  "column": 22,
                  "line": 94
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
                2641,
                2642
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 94
                },
                "start": {
                  "column": 12,
                  "line": 94
                }
              }
            },
            "out": false,
            "range": [
              2641,
              2689
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 94
              },
              "start": {
                "column": 12,
                "line": 94
              }
            }
          }
        ]
      },
      "range": [
        2629,
        2732
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2734,
            2748
          ],
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "Unresolved",
            "range": [
              2735,
              2745
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 98
              },
              "start": {
                "column": 1,
                "line": 98
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 14,
              "line": 98
            },
            "start": {
              "column": 0,
              "line": 98
            }
          }
        },
        "range": [
          2734,
          2748
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 98
          },
          "start": {
            "column": 0,
            "line": 98
          }
        }
      },
      "range": [
        2734,
        2749
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2750,
            2774
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "range": [
                  2762,
                  2765
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 99
                  },
                  "start": {
                    "column": 12,
                    "line": 99
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  2766,
                  2771
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 99
                  },
                  "start": {
                    "column": 16,
                    "line": 99
                  }
                }
              },
              "range": [
                2762,
                2771
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 99
                },
                "start": {
                  "column": 12,
                  "line": 99
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "Unresolved",
            "range": [
              2751,
              2761
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 99
              },
              "start": {
                "column": 1,
                "line": 99
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 24,
              "line": 99
            },
            "start": {
              "column": 0,
              "line": 99
            }
          }
        },
        "range": [
          2750,
          2774
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 99
          },
          "start": {
            "column": 0,
            "line": 99
          }
        }
      },
      "range": [
        2750,
        2775
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      2848,
                      2891
                    ],
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "key": {
                          "type": "Literal",
                          "raw": "'a:b'",
                          "value": "a:b",
                          "range": [
                            2861,
                            2866
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 104
                            },
                            "start": {
                              "column": 11,
                              "line": 104
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
                              "line": 104
                            },
                            "start": {
                              "column": 17,
                              "line": 104
                            }
                          },
                          "range": [
                            2867,
                            2882
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
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    2871,
                                    2872
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 104
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
                                      "column": 30,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 104
                                    }
                                  },
                                  "range": [
                                    2872,
                                    2880
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      2874,
                                      2880
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 104
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 104
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2871,
                                  2880
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 104
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 104
                                  }
                                }
                              }
                            ],
                            "range": [
                              2869,
                              2882
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 104
                              },
                              "start": {
                                "column": 19,
                                "line": 104
                              }
                            }
                          }
                        },
                        "range": [
                          2860,
                          2883
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 104
                          },
                          "start": {
                            "column": 10,
                            "line": 104
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 105
                      },
                      "start": {
                        "column": 34,
                        "line": 103
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "range": [
                      2830,
                      2847
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 103
                      },
                      "start": {
                        "column": 16,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    2820,
                    2891
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 105
                    },
                    "start": {
                      "column": 6,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                2812,
                2895
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 106
                },
                "start": {
                  "column": 18,
                  "line": 102
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                2808,
                2811
              ],
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "loc": {
                "end": {
                  "column": 17,
                  "line": 102
                },
                "start": {
                  "column": 14,
                  "line": 102
                }
              }
            },
            "kind": "namespace",
            "range": [
              2798,
              2895
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          }
        ],
        "range": [
          2792,
          2897
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 107
          },
          "start": {
            "column": 15,
            "line": 101
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          2785,
          2791
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 101
          },
          "start": {
            "column": 8,
            "line": 101
          }
        }
      },
      "kind": "global",
      "range": [
        2777,
        2897
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2899,
            2919
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "range": [
                  2904,
                  2905
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 109
                  },
                  "start": {
                    "column": 5,
                    "line": 109
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"accepted\"",
                "value": "accepted",
                "range": [
                  2906,
                  2916
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 109
                  },
                  "start": {
                    "column": 7,
                    "line": 109
                  }
                }
              },
              "range": [
                2904,
                2916
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 109
                },
                "start": {
                  "column": 5,
                  "line": 109
                }
              }
            }
          ],
          "name": {
            "type": "JSXNamespacedName",
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "range": [
                2902,
                2903
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 109
                },
                "start": {
                  "column": 3,
                  "line": 109
                }
              }
            },
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "range": [
                2900,
                2901
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 109
                },
                "start": {
                  "column": 1,
                  "line": 109
                }
              }
            },
            "range": [
              2900,
              2903
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 109
              },
              "start": {
                "column": 1,
                "line": 109
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 20,
              "line": 109
            },
            "start": {
              "column": 0,
              "line": 109
            }
          }
        },
        "range": [
          2899,
          2919
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 109
          },
          "start": {
            "column": 0,
            "line": 109
          }
        }
      },
      "range": [
        2899,
        2920
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2921,
            2941
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "range": [
                  2926,
                  2927
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 110
                  },
                  "start": {
                    "column": 5,
                    "line": 110
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"rejected\"",
                "value": "rejected",
                "range": [
                  2928,
                  2938
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 110
                  },
                  "start": {
                    "column": 7,
                    "line": 110
                  }
                }
              },
              "range": [
                2926,
                2938
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 110
                },
                "start": {
                  "column": 5,
                  "line": 110
                }
              }
            }
          ],
          "name": {
            "type": "JSXNamespacedName",
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "range": [
                2924,
                2925
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 110
                },
                "start": {
                  "column": 3,
                  "line": 110
                }
              }
            },
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "range": [
                2922,
                2923
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 110
                },
                "start": {
                  "column": 1,
                  "line": 110
                }
              }
            },
            "range": [
              2922,
              2925
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 110
              },
              "start": {
                "column": 1,
                "line": 110
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 20,
              "line": 110
            },
            "start": {
              "column": 0,
              "line": 110
            }
          }
        },
        "range": [
          2921,
          2941
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 110
          },
          "start": {
            "column": 0,
            "line": 110
          }
        }
      },
      "range": [
        2921,
        2942
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            2943,
            2976
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "range": [
                  2948,
                  2949
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 111
                  },
                  "start": {
                    "column": 5,
                    "line": 111
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"accepted\"",
                "value": "accepted",
                "range": [
                  2950,
                  2960
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 111
                  },
                  "start": {
                    "column": 7,
                    "line": 111
                  }
                }
              },
              "range": [
                2948,
                2960
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 111
                },
                "start": {
                  "column": 5,
                  "line": 111
                }
              }
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "range": [
                  2961,
                  2962
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 111
                  },
                  "start": {
                    "column": 18,
                    "line": 111
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"rejected\"",
                "value": "rejected",
                "range": [
                  2963,
                  2973
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 111
                  },
                  "start": {
                    "column": 20,
                    "line": 111
                  }
                }
              },
              "range": [
                2961,
                2973
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 111
                },
                "start": {
                  "column": 18,
                  "line": 111
                }
              }
            }
          ],
          "name": {
            "type": "JSXNamespacedName",
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "range": [
                2946,
                2947
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 111
                },
                "start": {
                  "column": 3,
                  "line": 111
                }
              }
            },
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "range": [
                2944,
                2945
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 111
                },
                "start": {
                  "column": 1,
                  "line": 111
                }
              }
            },
            "range": [
              2944,
              2947
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 111
              },
              "start": {
                "column": 1,
                "line": 111
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 33,
              "line": 111
            },
            "start": {
              "column": 0,
              "line": 111
            }
          }
        },
        "range": [
          2943,
          2976
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 111
          },
          "start": {
            "column": 0,
            "line": 111
          }
        }
      },
      "range": [
        2943,
        2977
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 112
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
