__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1054
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          15,
          35
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                21,
                24
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                24,
                32
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  26,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              21,
              33
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          10,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
        35
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          68,
          88
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                74,
                77
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              },
              "range": [
                77,
                85
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  79,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              74,
              86
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 4,
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
            "column": 31,
            "line": 5
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
            "name": "Base",
            "optional": false,
            "range": [
              63,
              67
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
            63,
            67
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
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          47,
          54
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        37,
        88
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                311,
                337
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      321,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    },
                    "range": [
                      324,
                      330
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          326,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        326,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    321,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 12
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                309,
                310
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "range": [
              299,
              337
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                364,
                403
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooo",
                    "optional": false,
                    "range": [
                      374,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
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
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    },
                    "range": [
                      378,
                      387
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          380,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        380,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    374,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 16
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                349,
                350
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    362,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 16
                    },
                    "start": {
                      "column": 23,
                      "line": 16
                    }
                  }
                },
                "range": [
                  362,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 16
                  },
                  "start": {
                    "column": 23,
                    "line": 16
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              343,
              403
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                422,
                446
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      432,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
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
                        "column": 15,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    },
                    "range": [
                      433,
                      439
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          435,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 21
                          },
                          "start": {
                            "column": 11,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        435,
                        439
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
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
                    432,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                419,
                421
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "range": [
              409,
              446
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
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
                475,
                511
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      485,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
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
                        "column": 18,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    },
                    "range": [
                      486,
                      495
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          488,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 25
                          },
                          "start": {
                            "column": 11,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        488,
                        495
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 25
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    485,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
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
                  "column": 27,
                  "line": 24
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                458,
                460
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "range": [
                    472,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                },
                "range": [
                  472,
                  474
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 24,
                    "line": 24
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              452,
              511
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                530,
                556
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      540,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                        "line": 29
                      },
                      "start": {
                        "column": 11,
                        "line": 29
                      }
                    },
                    "range": [
                      543,
                      549
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          545,
                          549
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 29
                          },
                          "start": {
                            "column": 13,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        545,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 29
                        },
                        "start": {
                          "column": 13,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    540,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 28
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                527,
                529
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            "range": [
              517,
              556
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                585,
                625
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1.0'",
                    "value": "1.0",
                    "range": [
                      595,
                      600
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
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
                        "line": 33
                      },
                      "start": {
                        "column": 13,
                        "line": 33
                      }
                    },
                    "range": [
                      600,
                      609
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          602,
                          609
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
                      "range": [
                        602,
                        609
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
                    }
                  },
                  "value": null,
                  "range": [
                    595,
                    610
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 27,
                  "line": 32
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "range": [
                568,
                570
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 32
                },
                "start": {
                  "column": 10,
                  "line": 32
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "range": [
                    582,
                    584
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 32
                    },
                    "start": {
                      "column": 24,
                      "line": 32
                    }
                  }
                },
                "range": [
                  582,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 32
                  },
                  "start": {
                    "column": 24,
                    "line": 32
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              562,
              625
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          293,
          627
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 19,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          281,
          292
        ],
        "decorators": [],
        "name": "NotOptional",
        "optional": false,
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        274,
        627
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
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
                704,
                731
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      714,
                      717
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
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
                        "column": 18,
                        "line": 40
                      },
                      "start": {
                        "column": 12,
                        "line": 40
                      }
                    },
                    "range": [
                      718,
                      724
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          720,
                          724
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 40
                          },
                          "start": {
                            "column": 14,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        720,
                        724
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 40
                        },
                        "start": {
                          "column": 14,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    714,
                    725
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                702,
                703
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 39
                },
                "start": {
                  "column": 14,
                  "line": 39
                }
              }
            },
            "range": [
              692,
              731
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                758,
                807
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooo",
                    "optional": false,
                    "range": [
                      768,
                      772
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
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
                        "column": 21,
                        "line": 44
                      },
                      "start": {
                        "column": 12,
                        "line": 44
                      }
                    },
                    "range": [
                      772,
                      781
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          774,
                          781
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 44
                          },
                          "start": {
                            "column": 14,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        774,
                        781
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 44
                        },
                        "start": {
                          "column": 14,
                          "line": 44
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    768,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 25,
                  "line": 43
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                743,
                744
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 43
                },
                "start": {
                  "column": 10,
                  "line": 43
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    756,
                    757
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 43
                    },
                    "start": {
                      "column": 23,
                      "line": 43
                    }
                  }
                },
                "range": [
                  756,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 43
                  },
                  "start": {
                    "column": 23,
                    "line": 43
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              737,
              807
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                826,
                851
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      836,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
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
                        "column": 16,
                        "line": 48
                      },
                      "start": {
                        "column": 10,
                        "line": 48
                      }
                    },
                    "range": [
                      838,
                      844
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          840,
                          844
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        840,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 48
                        },
                        "start": {
                          "column": 12,
                          "line": 48
                        }
                      }
                    }
                  },
                  "range": [
                    836,
                    845
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 47
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                823,
                825
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 47
                },
                "start": {
                  "column": 14,
                  "line": 47
                }
              }
            },
            "range": [
              813,
              851
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                880,
                926
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      890,
                      891
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
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
                        "column": 18,
                        "line": 52
                      },
                      "start": {
                        "column": 9,
                        "line": 52
                      }
                    },
                    "range": [
                      891,
                      900
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          893,
                          900
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 52
                          },
                          "start": {
                            "column": 11,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        893,
                        900
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 52
                        },
                        "start": {
                          "column": 11,
                          "line": 52
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    890,
                    901
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 27,
                  "line": 51
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                863,
                865
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 51
                },
                "start": {
                  "column": 10,
                  "line": 51
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "range": [
                    877,
                    879
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 51
                    },
                    "start": {
                      "column": 24,
                      "line": 51
                    }
                  }
                },
                "range": [
                  877,
                  879
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 51
                  },
                  "start": {
                    "column": 24,
                    "line": 51
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              857,
              926
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                945,
                972
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      955,
                      958
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
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
                        "column": 18,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
                      }
                    },
                    "range": [
                      959,
                      965
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          961,
                          965
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 56
                          },
                          "start": {
                            "column": 14,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        961,
                        965
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 56
                        },
                        "start": {
                          "column": 14,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    955,
                    966
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 17,
                  "line": 55
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                942,
                944
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 55
                },
                "start": {
                  "column": 14,
                  "line": 55
                }
              }
            },
            "range": [
              932,
              972
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1001,
                1051
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1.0'",
                    "value": "1.0",
                    "range": [
                      1011,
                      1016
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
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
                        "line": 60
                      },
                      "start": {
                        "column": 13,
                        "line": 60
                      }
                    },
                    "range": [
                      1016,
                      1025
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          1018,
                          1025
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 60
                          },
                          "start": {
                            "column": 15,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1018,
                        1025
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 60
                        },
                        "start": {
                          "column": 15,
                          "line": 60
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    1011,
                    1026
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 27,
                  "line": 59
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "range": [
                984,
                986
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
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "range": [
                    998,
                    1000
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 59
                    },
                    "start": {
                      "column": 24,
                      "line": 59
                    }
                  }
                },
                "range": [
                  998,
                  1000
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 59
                  },
                  "start": {
                    "column": 24,
                    "line": 59
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              978,
              1051
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          686,
          1053
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 16,
            "line": 38
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          677,
          685
        ],
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 38
          }
        }
      },
      "kind": "module",
      "range": [
        670,
        1053
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 63
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
