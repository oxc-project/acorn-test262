__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    82,
    1701
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              100,
              436
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  130,
                  436
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
                      "name": "isFSO",
                      "optional": false,
                      "range": [
                        134,
                        139
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
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 7,
                          "line": 4
                        }
                      },
                      "range": [
                        139,
                        165
                      ],
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "asserts": false,
                        "parameterName": {
                          "type": "TSThisType",
                          "range": [
                            141,
                            145
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 4
                            },
                            "start": {
                              "column": 9,
                              "line": 4
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          },
                          "range": [
                            149,
                            165
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FileSystemObject",
                              "optional": false,
                              "range": [
                                149,
                                165
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 4
                                },
                                "start": {
                                  "column": 17,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              149,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 4
                              },
                              "start": {
                                "column": 17,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          141,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 9,
                            "line": 4
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      134,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 4
                      },
                      "start": {
                        "column": 2,
                        "line": 4
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
                      "name": "isFile",
                      "optional": false,
                      "range": [
                        173,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 6,
                          "line": 5
                        }
                      }
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        179,
                        233
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "operator": "instanceof",
                              "left": {
                                "type": "ThisExpression",
                                "range": [
                                  208,
                                  212
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 6
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "range": [
                                  224,
                                  228
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                208,
                                228
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 6
                                },
                                "start": {
                                  "column": 10,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              201,
                              229
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 6
                              },
                              "start": {
                                "column": 3,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          196,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 7
                          },
                          "start": {
                            "column": 29,
                            "line": 5
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        },
                        "range": [
                          181,
                          195
                        ],
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "asserts": false,
                          "parameterName": {
                            "type": "TSThisType",
                            "range": [
                              183,
                              187
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 5
                              },
                              "start": {
                                "column": 16,
                                "line": 5
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 24,
                                "line": 5
                              }
                            },
                            "range": [
                              191,
                              195
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "range": [
                                  191,
                                  195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                191,
                                195
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 24,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            183,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      169,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 7
                      },
                      "start": {
                        "column": 2,
                        "line": 5
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
                      "name": "isFile",
                      "optional": false,
                      "range": [
                        240,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 8
                        },
                        "start": {
                          "column": 6,
                          "line": 8
                        }
                      }
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        246,
                        270
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          254,
                          270
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 8
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
                          "name": "param",
                          "optional": false,
                          "range": [
                            247,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 8
                            },
                            "start": {
                              "column": 13,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      236,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 10
                      },
                      "start": {
                        "column": 2,
                        "line": 8
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
                      "name": "isDirectory",
                      "optional": false,
                      "range": [
                        277,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 11
                        },
                        "start": {
                          "column": 6,
                          "line": 11
                        }
                      }
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        288,
                        352
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "operator": "instanceof",
                              "left": {
                                "type": "ThisExpression",
                                "range": [
                                  322,
                                  326
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 12
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "range": [
                                  338,
                                  347
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                322,
                                347
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 12
                                },
                                "start": {
                                  "column": 10,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              315,
                              348
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 12
                              },
                              "start": {
                                "column": 3,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          310,
                          352
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 13
                          },
                          "start": {
                            "column": 39,
                            "line": 11
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 11
                          },
                          "start": {
                            "column": 19,
                            "line": 11
                          }
                        },
                        "range": [
                          290,
                          309
                        ],
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "asserts": false,
                          "parameterName": {
                            "type": "TSThisType",
                            "range": [
                              292,
                              296
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 11
                              },
                              "start": {
                                "column": 21,
                                "line": 11
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 11
                              },
                              "start": {
                                "column": 29,
                                "line": 11
                              }
                            },
                            "range": [
                              300,
                              309
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "range": [
                                  300,
                                  309
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                300,
                                309
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 11
                                },
                                "start": {
                                  "column": 29,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            292,
                            309
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 11
                            },
                            "start": {
                              "column": 21,
                              "line": 11
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      273,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 13
                      },
                      "start": {
                        "column": 2,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNetworked",
                      "optional": false,
                      "range": [
                        355,
                        366
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 14
                        },
                        "start": {
                          "column": 2,
                          "line": 14
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
                          "column": 41,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      },
                      "range": [
                        366,
                        394
                      ],
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "asserts": false,
                        "parameterName": {
                          "type": "TSThisType",
                          "range": [
                            368,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 14
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 14
                            },
                            "start": {
                              "column": 24,
                              "line": 14
                            }
                          },
                          "range": [
                            377,
                            393
                          ],
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Networked",
                                  "optional": false,
                                  "range": [
                                    377,
                                    386
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 14
                                    }
                                  }
                                },
                                "range": [
                                  377,
                                  386
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 14
                                  }
                                }
                              },
                              {
                                "type": "TSThisType",
                                "range": [
                                  389,
                                  393
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "range": [
                              377,
                              393
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 14
                              },
                              "start": {
                                "column": 24,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          368,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      355,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        398,
                        409
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 15
                        },
                        "start": {
                          "column": 2,
                          "line": 15
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        409,
                        433
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          431,
                          433
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 15
                          },
                          "start": {
                            "column": 35,
                            "line": 15
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "path",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 15
                                },
                                "start": {
                                  "column": 25,
                                  "line": 15
                                }
                              },
                              "range": [
                                421,
                                429
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  423,
                                  429
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 15
                                  }
                                }
                              }
                            },
                            "range": [
                              417,
                              429
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 15
                              },
                              "start": {
                                "column": 21,
                                "line": 15
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            410,
                            429
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 15
                            },
                            "start": {
                              "column": 14,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      398,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 15
                      },
                      "start": {
                        "column": 2,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 16
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "range": [
                  113,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                107,
                436
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 16
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              439,
              555
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  482,
                  555
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        486,
                        497
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 19
                        },
                        "start": {
                          "column": 2,
                          "line": 19
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        497,
                        552
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "path",
                                  "optional": false,
                                  "range": [
                                    544,
                                    548
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 19
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "range": [
                                  538,
                                  543
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                538,
                                549
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 19
                                },
                                "start": {
                                  "column": 54,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              538,
                              550
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 19
                              },
                              "start": {
                                "column": 54,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          536,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 19
                          },
                          "start": {
                            "column": 52,
                            "line": 19
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
                          "name": "path",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 19
                              },
                              "start": {
                                "column": 18,
                                "line": 19
                              }
                            },
                            "range": [
                              502,
                              510
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                504,
                                510
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 19
                                },
                                "start": {
                                  "column": 20,
                                  "line": 19
                                }
                              }
                            }
                          },
                          "range": [
                            498,
                            510
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 19
                                },
                                "start": {
                                  "column": 42,
                                  "line": 19
                                }
                              },
                              "range": [
                                526,
                                534
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  528,
                                  534
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 19
                                  }
                                }
                              }
                            },
                            "range": [
                              519,
                              534
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 19
                              },
                              "start": {
                                "column": 35,
                                "line": 19
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            512,
                            534
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 19
                            },
                            "start": {
                              "column": 28,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 19
                        },
                        "start": {
                          "column": 13,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      486,
                      552
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 20
                  },
                  "start": {
                    "column": 44,
                    "line": 18
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "File",
                "optional": false,
                "range": [
                  452,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
                    "line": 18
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "range": [
                  465,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 18
                  },
                  "start": {
                    "column": 27,
                    "line": 18
                  }
                }
              },
              "range": [
                446,
                555
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 20
              },
              "start": {
                "column": 1,
                "line": 18
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              557,
              641
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  605,
                  641
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
                      "name": "children",
                      "optional": false,
                      "range": [
                        609,
                        617
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 22
                        },
                        "start": {
                          "column": 2,
                          "line": 22
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
                          "column": 30,
                          "line": 22
                        },
                        "start": {
                          "column": 10,
                          "line": 22
                        }
                      },
                      "range": [
                        617,
                        637
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FileSystemObject",
                            "optional": false,
                            "range": [
                              619,
                              635
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 22
                              },
                              "start": {
                                "column": 12,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            619,
                            635
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          619,
                          637
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      609,
                      638
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 22
                      },
                      "start": {
                        "column": 2,
                        "line": 22
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 23
                  },
                  "start": {
                    "column": 49,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Directory",
                "optional": false,
                "range": [
                  570,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "range": [
                  588,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 21
                  },
                  "start": {
                    "column": 32,
                    "line": 21
                  }
                }
              },
              "range": [
                564,
                641
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 23
              },
              "start": {
                "column": 1,
                "line": 21
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              643,
              690
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  670,
                  690
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "host",
                      "optional": false,
                      "range": [
                        674,
                        678
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 25
                        },
                        "start": {
                          "column": 2,
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
                          "column": 14,
                          "line": 25
                        },
                        "start": {
                          "column": 6,
                          "line": 25
                        }
                      },
                      "range": [
                        678,
                        686
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          680,
                          686
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      674,
                      687
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 25
                      },
                      "start": {
                        "column": 2,
                        "line": 25
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 26
                  },
                  "start": {
                    "column": 28,
                    "line": 24
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Networked",
                "optional": false,
                "range": [
                  660,
                  669
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 24
                  },
                  "start": {
                    "column": 18,
                    "line": 24
                  }
                }
              },
              "range": [
                650,
                690
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 26
              },
              "start": {
                "column": 1,
                "line": 24
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
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    },
                    "range": [
                      701,
                      719
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FileSystemObject",
                        "optional": false,
                        "range": [
                          703,
                          719
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 28
                          },
                          "start": {
                            "column": 11,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        703,
                        719
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 28
                        },
                        "start": {
                          "column": 11,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    697,
                    719
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 28
                    },
                    "start": {
                      "column": 5,
                      "line": 28
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"foo/bar.txt\"",
                      "value": "foo/bar.txt",
                      "range": [
                        731,
                        744
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 28
                        },
                        "start": {
                          "column": 39,
                          "line": 28
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        746,
                        751
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 28
                        },
                        "start": {
                          "column": 54,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "File",
                    "optional": false,
                    "range": [
                      726,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 28
                      },
                      "start": {
                        "column": 34,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    722,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 28
                    },
                    "start": {
                      "column": 30,
                      "line": 28
                    }
                  }
                },
                "range": [
                  697,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              693,
              753
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 28
              },
              "start": {
                "column": 1,
                "line": 28
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "range": [
                    755,
                    759
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 29
                    },
                    "start": {
                      "column": 1,
                      "line": 29
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNetworked",
                  "optional": false,
                  "range": [
                    760,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 29
                    },
                    "start": {
                      "column": 6,
                      "line": 29
                    }
                  }
                },
                "range": [
                  755,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 29
                  },
                  "start": {
                    "column": 1,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  774,
                  779
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 29
                  },
                  "start": {
                    "column": 20,
                    "line": 29
                  }
                }
              },
              "range": [
                755,
                779
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 1,
                  "line": 29
                }
              }
            },
            "range": [
              755,
              780
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 29
              },
              "start": {
                "column": 1,
                "line": 29
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "range": [
                    782,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 30
                    },
                    "start": {
                      "column": 1,
                      "line": 30
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false,
                  "range": [
                    787,
                    792
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 30
                    },
                    "start": {
                      "column": 6,
                      "line": 30
                    }
                  }
                },
                "range": [
                  782,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 30
                  },
                  "start": {
                    "column": 1,
                    "line": 30
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "range": [
                    795,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 30
                    },
                    "start": {
                      "column": 14,
                      "line": 30
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "range": [
                    800,
                    806
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 30
                    }
                  }
                },
                "range": [
                  795,
                  806
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 30
                  }
                }
              },
              "range": [
                782,
                806
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 30
                },
                "start": {
                  "column": 1,
                  "line": 30
                }
              }
            },
            "range": [
              782,
              807
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 30
              },
              "start": {
                "column": 1,
                "line": 30
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "range": [
                    809,
                    813
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 31
                    },
                    "start": {
                      "column": 1,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "range": [
                    814,
                    820
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 31
                    },
                    "start": {
                      "column": 6,
                      "line": 31
                    }
                  }
                },
                "range": [
                  809,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 31
                  },
                  "start": {
                    "column": 1,
                    "line": 31
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  823,
                  827
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
                  }
                }
              },
              "range": [
                809,
                827
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 31
                },
                "start": {
                  "column": 1,
                  "line": 31
                }
              }
            },
            "range": [
              809,
              828
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 31
              },
              "start": {
                "column": 1,
                "line": 31
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    834,
                    835
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
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "range": [
                      838,
                      842
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 32
                      },
                      "start": {
                        "column": 9,
                        "line": 32
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isFile",
                    "optional": false,
                    "range": [
                      843,
                      849
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 32
                      },
                      "start": {
                        "column": 14,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    838,
                    849
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 32
                    },
                    "start": {
                      "column": 9,
                      "line": 32
                    }
                  }
                },
                "range": [
                  834,
                  849
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 32
                  },
                  "start": {
                    "column": 5,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              830,
              850
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 32
              },
              "start": {
                "column": 1,
                "line": 32
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "IfStatement",
              "alternate": {
                "type": "IfStatement",
                "alternate": null,
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "file",
                          "optional": false,
                          "range": [
                            1033,
                            1037
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 44
                            },
                            "start": {
                              "column": 2,
                              "line": 44
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "host",
                          "optional": false,
                          "range": [
                            1038,
                            1042
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 44
                            },
                            "start": {
                              "column": 7,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1033,
                          1042
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 44
                          },
                          "start": {
                            "column": 2,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        1033,
                        1043
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 44
                        },
                        "start": {
                          "column": 2,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "range": [
                    1029,
                    1046
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 45
                    },
                    "start": {
                      "column": 28,
                      "line": 43
                    }
                  }
                },
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "range": [
                      1011,
                      1015
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 43
                      },
                      "start": {
                        "column": 10,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isNetworked",
                    "optional": false,
                    "range": [
                      1016,
                      1027
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 43
                      },
                      "start": {
                        "column": 15,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1011,
                    1027
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1007,
                  1046
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 45
                  },
                  "start": {
                    "column": 6,
                    "line": 43
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "file",
                        "optional": false,
                        "range": [
                          983,
                          987
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 41
                          },
                          "start": {
                            "column": 2,
                            "line": 41
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "range": [
                          988,
                          996
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 41
                          },
                          "start": {
                            "column": 7,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        983,
                        996
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 41
                        },
                        "start": {
                          "column": 2,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      983,
                      997
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 41
                      },
                      "start": {
                        "column": 2,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  979,
                  1000
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 42
                  },
                  "start": {
                    "column": 28,
                    "line": 40
                  }
                }
              },
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "range": [
                    961,
                    965
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 40
                    },
                    "start": {
                      "column": 10,
                      "line": 40
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isDirectory",
                  "optional": false,
                  "range": [
                    966,
                    977
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 40
                    },
                    "start": {
                      "column": 15,
                      "line": 40
                    }
                  }
                },
                "range": [
                  961,
                  977
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 40
                  },
                  "start": {
                    "column": 10,
                    "line": 40
                  }
                }
              },
              "range": [
                957,
                1046
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 45
                },
                "start": {
                  "column": 6,
                  "line": 40
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "range": [
                        873,
                        877
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 34
                        },
                        "start": {
                          "column": 2,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "content",
                      "optional": false,
                      "range": [
                        878,
                        885
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 34
                        },
                        "start": {
                          "column": 7,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      873,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 34
                      },
                      "start": {
                        "column": 2,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    873,
                    886
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 34
                    },
                    "start": {
                      "column": 2,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "range": [
                              916,
                              920
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 36
                              },
                              "start": {
                                "column": 3,
                                "line": 36
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "range": [
                              921,
                              925
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 36
                              },
                              "start": {
                                "column": 8,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            916,
                            925
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 36
                            },
                            "start": {
                              "column": 3,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          916,
                          926
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 36
                          },
                          "start": {
                            "column": 3,
                            "line": 36
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "range": [
                              930,
                              934
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 37
                              },
                              "start": {
                                "column": 3,
                                "line": 37
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "range": [
                              935,
                              942
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
                          "range": [
                            930,
                            942
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 37
                            },
                            "start": {
                              "column": 3,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          930,
                          943
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 37
                          },
                          "start": {
                            "column": 3,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "range": [
                      911,
                      947
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 38
                      },
                      "start": {
                        "column": 24,
                        "line": 35
                      }
                    }
                  },
                  "test": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "range": [
                        893,
                        897
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 35
                        },
                        "start": {
                          "column": 6,
                          "line": 35
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNetworked",
                      "optional": false,
                      "range": [
                        898,
                        909
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      893,
                      909
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 35
                      },
                      "start": {
                        "column": 6,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    889,
                    947
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 38
                    },
                    "start": {
                      "column": 2,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                869,
                950
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 33
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "file",
                "optional": false,
                "range": [
                  856,
                  860
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 33
                  },
                  "start": {
                    "column": 5,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFile",
                "optional": false,
                "range": [
                  861,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 33
                  },
                  "start": {
                    "column": 10,
                    "line": 33
                  }
                }
              },
              "range": [
                856,
                867
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 33
                },
                "start": {
                  "column": 5,
                  "line": 33
                }
              }
            },
            "range": [
              852,
              1046
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 45
              },
              "start": {
                "column": 1,
                "line": 33
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1104,
                1124
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lead",
                    "optional": false,
                    "range": [
                      1108,
                      1112
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 48
                      },
                      "start": {
                        "column": 2,
                        "line": 48
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
                        "column": 14,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    },
                    "range": [
                      1114,
                      1120
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1116,
                        1120
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 48
                        },
                        "start": {
                          "column": 10,
                          "line": 48
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1108,
                    1121
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 48
                    },
                    "start": {
                      "column": 2,
                      "line": 48
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 49
                },
                "start": {
                  "column": 55,
                  "line": 47
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
                  "name": "GenericGuard",
                  "optional": false,
                  "range": [
                    1088,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 47
                    },
                    "start": {
                      "column": 39,
                      "line": 47
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1100,
                    1103
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
                          1101,
                          1102
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 47
                          },
                          "start": {
                            "column": 52,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1101,
                        1102
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 47
                        },
                        "start": {
                          "column": 52,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 47
                    },
                    "start": {
                      "column": 51,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1088,
                  1103
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 47
                  },
                  "start": {
                    "column": 39,
                    "line": 47
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericLeadGuard",
              "optional": false,
              "range": [
                1060,
                1076
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 47
                },
                "start": {
                  "column": 11,
                  "line": 47
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 47
                },
                "start": {
                  "column": 27,
                  "line": 47
                }
              },
              "range": [
                1076,
                1079
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
                      1077,
                      1078
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 47
                      },
                      "start": {
                        "column": 28,
                        "line": 47
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1077,
                    1078
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 47
                    },
                    "start": {
                      "column": 28,
                      "line": 47
                    }
                  }
                }
              ]
            },
            "range": [
              1050,
              1124
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 49
              },
              "start": {
                "column": 1,
                "line": 47
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1186,
                1208
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "follow",
                    "optional": false,
                    "range": [
                      1190,
                      1196
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 52
                      },
                      "start": {
                        "column": 2,
                        "line": 52
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
                        "column": 16,
                        "line": 52
                      },
                      "start": {
                        "column": 10,
                        "line": 52
                      }
                    },
                    "range": [
                      1198,
                      1204
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1200,
                        1204
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 52
                        },
                        "start": {
                          "column": 12,
                          "line": 52
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1190,
                    1205
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 52
                    },
                    "start": {
                      "column": 2,
                      "line": 52
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 53
                },
                "start": {
                  "column": 59,
                  "line": 51
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
                  "name": "GenericGuard",
                  "optional": false,
                  "range": [
                    1170,
                    1182
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 51
                    },
                    "start": {
                      "column": 43,
                      "line": 51
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1182,
                    1185
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
                          1183,
                          1184
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 51
                          },
                          "start": {
                            "column": 56,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1183,
                        1184
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 51
                        },
                        "start": {
                          "column": 56,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 51
                    },
                    "start": {
                      "column": 55,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1170,
                  1185
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 51
                  },
                  "start": {
                    "column": 43,
                    "line": 51
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericFollowerGuard",
              "optional": false,
              "range": [
                1138,
                1158
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 51
                },
                "start": {
                  "column": 31,
                  "line": 51
                }
              },
              "range": [
                1158,
                1161
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
                      1159,
                      1160
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
                  "out": false,
                  "range": [
                    1159,
                    1160
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
                }
              ]
            },
            "range": [
              1128,
              1208
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 53
              },
              "start": {
                "column": 1,
                "line": 51
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1238,
                1345
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "range": [
                      1242,
                      1248
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 56
                      },
                      "start": {
                        "column": 2,
                        "line": 56
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
                        "column": 11,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
                      }
                    },
                    "range": [
                      1248,
                      1251
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1250,
                          1251
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 56
                          },
                          "start": {
                            "column": 10,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1250,
                        1251
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 56
                        },
                        "start": {
                          "column": 10,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    1242,
                    1252
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 56
                    },
                    "start": {
                      "column": 2,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isLeader",
                    "optional": false,
                    "range": [
                      1255,
                      1263
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 57
                      },
                      "start": {
                        "column": 2,
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
                        "column": 41,
                        "line": 57
                      },
                      "start": {
                        "column": 10,
                        "line": 57
                      }
                    },
                    "range": [
                      1263,
                      1294
                    ],
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "asserts": false,
                      "parameterName": {
                        "type": "TSThisType",
                        "range": [
                          1265,
                          1269
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 57
                          },
                          "start": {
                            "column": 12,
                            "line": 57
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 57
                          },
                          "start": {
                            "column": 21,
                            "line": 57
                          }
                        },
                        "range": [
                          1274,
                          1293
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1290,
                              1293
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
                                    1291,
                                    1292
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 57
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 57
                                    }
                                  }
                                },
                                "range": [
                                  1291,
                                  1292
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 57
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 57
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 57
                              },
                              "start": {
                                "column": 37,
                                "line": 57
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GenericLeadGuard",
                            "optional": false,
                            "range": [
                              1274,
                              1290
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 57
                              },
                              "start": {
                                "column": 21,
                                "line": 57
                              }
                            }
                          },
                          "range": [
                            1274,
                            1293
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 57
                            },
                            "start": {
                              "column": 21,
                              "line": 57
                            }
                          }
                        }
                      },
                      "range": [
                        1265,
                        1294
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    1255,
                    1295
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 57
                    },
                    "start": {
                      "column": 2,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isFollower",
                    "optional": false,
                    "range": [
                      1298,
                      1308
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 58
                      },
                      "start": {
                        "column": 2,
                        "line": 58
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
                        "line": 58
                      },
                      "start": {
                        "column": 12,
                        "line": 58
                      }
                    },
                    "range": [
                      1308,
                      1341
                    ],
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "asserts": false,
                      "parameterName": {
                        "type": "TSThisType",
                        "range": [
                          1310,
                          1314
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 58
                          },
                          "start": {
                            "column": 14,
                            "line": 58
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 58
                          },
                          "start": {
                            "column": 22,
                            "line": 58
                          }
                        },
                        "range": [
                          1318,
                          1341
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1338,
                              1341
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
                                    1339,
                                    1340
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 58
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 58
                                    }
                                  }
                                },
                                "range": [
                                  1339,
                                  1340
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 58
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 58
                              },
                              "start": {
                                "column": 42,
                                "line": 58
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GenericFollowerGuard",
                            "optional": false,
                            "range": [
                              1318,
                              1338
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 58
                              },
                              "start": {
                                "column": 22,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            1318,
                            1341
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 58
                            },
                            "start": {
                              "column": 22,
                              "line": 58
                            }
                          }
                        }
                      },
                      "range": [
                        1310,
                        1341
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 58
                        },
                        "start": {
                          "column": 14,
                          "line": 58
                        }
                      }
                    }
                  },
                  "range": [
                    1298,
                    1342
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 58
                    },
                    "start": {
                      "column": 2,
                      "line": 58
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 59
                },
                "start": {
                  "column": 27,
                  "line": 55
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericGuard",
              "optional": false,
              "range": [
                1222,
                1234
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 55
                },
                "start": {
                  "column": 11,
                  "line": 55
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 55
                },
                "start": {
                  "column": 23,
                  "line": 55
                }
              },
              "range": [
                1234,
                1237
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
                      1235,
                      1236
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 55
                      },
                      "start": {
                        "column": 24,
                        "line": 55
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1235,
                    1236
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 55
                    },
                    "start": {
                      "column": 24,
                      "line": 55
                    }
                  }
                }
              ]
            },
            "range": [
              1212,
              1345
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 59
              },
              "start": {
                "column": 1,
                "line": 55
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
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 61
                      },
                      "start": {
                        "column": 10,
                        "line": 61
                      }
                    },
                    "range": [
                      1357,
                      1377
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1371,
                          1377
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "File",
                              "optional": false,
                              "range": [
                                1372,
                                1376
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 61
                                },
                                "start": {
                                  "column": 25,
                                  "line": 61
                                }
                              }
                            },
                            "range": [
                              1372,
                              1376
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 61
                              },
                              "start": {
                                "column": 25,
                                "line": 61
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 61
                          },
                          "start": {
                            "column": 24,
                            "line": 61
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GenericGuard",
                        "optional": false,
                        "range": [
                          1359,
                          1371
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1359,
                        1377
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 61
                        },
                        "start": {
                          "column": 12,
                          "line": 61
                        }
                      }
                    }
                  },
                  "range": [
                    1352,
                    1377
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 61
                    },
                    "start": {
                      "column": 5,
                      "line": 61
                    }
                  }
                },
                "init": null,
                "range": [
                  1352,
                  1377
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 61
                  },
                  "start": {
                    "column": 5,
                    "line": 61
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1348,
              1378
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 61
              },
              "start": {
                "column": 1,
                "line": 61
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "guard",
                          "optional": false,
                          "range": [
                            1453,
                            1458
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 66
                            },
                            "start": {
                              "column": 2,
                              "line": 66
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "follow",
                          "optional": false,
                          "range": [
                            1459,
                            1465
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 66
                            },
                            "start": {
                              "column": 8,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1453,
                          1465
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 66
                          },
                          "start": {
                            "column": 2,
                            "line": 66
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1453,
                        1467
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 66
                        },
                        "start": {
                          "column": 2,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1453,
                      1468
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 66
                      },
                      "start": {
                        "column": 2,
                        "line": 66
                      }
                    }
                  }
                ],
                "range": [
                  1449,
                  1471
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 67
                  },
                  "start": {
                    "column": 28,
                    "line": 65
                  }
                }
              },
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "guard",
                  "optional": false,
                  "range": [
                    1431,
                    1436
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 65
                    },
                    "start": {
                      "column": 10,
                      "line": 65
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "range": [
                    1437,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 65
                    },
                    "start": {
                      "column": 16,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1431,
                  1447
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 65
                  },
                  "start": {
                    "column": 10,
                    "line": 65
                  }
                }
              },
              "range": [
                1427,
                1471
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 67
                },
                "start": {
                  "column": 6,
                  "line": 65
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "guard",
                        "optional": false,
                        "range": [
                          1404,
                          1409
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 63
                          },
                          "start": {
                            "column": 2,
                            "line": 63
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lead",
                        "optional": false,
                        "range": [
                          1410,
                          1414
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 63
                          },
                          "start": {
                            "column": 8,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1404,
                        1414
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 63
                        },
                        "start": {
                          "column": 2,
                          "line": 63
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1404,
                      1416
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 63
                      },
                      "start": {
                        "column": 2,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1404,
                    1417
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 63
                    },
                    "start": {
                      "column": 2,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                1400,
                1420
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 64
                },
                "start": {
                  "column": 21,
                  "line": 62
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "guard",
                "optional": false,
                "range": [
                  1384,
                  1389
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 62
                  },
                  "start": {
                    "column": 5,
                    "line": 62
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isLeader",
                "optional": false,
                "range": [
                  1390,
                  1398
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 62
                  },
                  "start": {
                    "column": 11,
                    "line": 62
                  }
                }
              },
              "range": [
                1384,
                1398
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 62
                },
                "start": {
                  "column": 5,
                  "line": 62
                }
              }
            },
            "range": [
              1380,
              1471
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 67
              },
              "start": {
                "column": 1,
                "line": 62
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1498,
                1547
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isMoreSpecific",
                    "optional": false,
                    "range": [
                      1502,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 70
                      },
                      "start": {
                        "column": 2,
                        "line": 70
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
                        "column": 43,
                        "line": 70
                      },
                      "start": {
                        "column": 16,
                        "line": 70
                      }
                    },
                    "range": [
                      1516,
                      1543
                    ],
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "asserts": false,
                      "parameterName": {
                        "type": "TSThisType",
                        "range": [
                          1518,
                          1522
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 70
                          },
                          "start": {
                            "column": 18,
                            "line": 70
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 70
                          },
                          "start": {
                            "column": 26,
                            "line": 70
                          }
                        },
                        "range": [
                          1526,
                          1543
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MoreSpecificGuard",
                            "optional": false,
                            "range": [
                              1526,
                              1543
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 70
                              },
                              "start": {
                                "column": 26,
                                "line": 70
                              }
                            }
                          },
                          "range": [
                            1526,
                            1543
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 70
                            },
                            "start": {
                              "column": 26,
                              "line": 70
                            }
                          }
                        }
                      },
                      "range": [
                        1518,
                        1543
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 70
                        },
                        "start": {
                          "column": 18,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1502,
                    1544
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 70
                    },
                    "start": {
                      "column": 2,
                      "line": 70
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 71
                },
                "start": {
                  "column": 25,
                  "line": 69
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SpecificGuard",
              "optional": false,
              "range": [
                1484,
                1497
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 69
                },
                "start": {
                  "column": 11,
                  "line": 69
                }
              }
            },
            "range": [
              1474,
              1547
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 71
              },
              "start": {
                "column": 1,
                "line": 69
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1600,
                1618
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "do",
                    "optional": false,
                    "range": [
                      1604,
                      1606
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 74
                      },
                      "start": {
                        "column": 2,
                        "line": 74
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
                        "column": 12,
                        "line": 74
                      },
                      "start": {
                        "column": 6,
                        "line": 74
                      }
                    },
                    "range": [
                      1608,
                      1614
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1610,
                        1614
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 74
                        },
                        "start": {
                          "column": 8,
                          "line": 74
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1604,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 74
                    },
                    "start": {
                      "column": 2,
                      "line": 74
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 75
                },
                "start": {
                  "column": 51,
                  "line": 73
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
                  "name": "SpecificGuard",
                  "optional": false,
                  "range": [
                    1586,
                    1599
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 73
                    },
                    "start": {
                      "column": 37,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1586,
                  1599
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 73
                  },
                  "start": {
                    "column": 37,
                    "line": 73
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MoreSpecificGuard",
              "optional": false,
              "range": [
                1560,
                1577
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 73
                },
                "start": {
                  "column": 11,
                  "line": 73
                }
              }
            },
            "range": [
              1550,
              1618
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 75
              },
              "start": {
                "column": 1,
                "line": 73
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
                  "name": "general",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 77
                      },
                      "start": {
                        "column": 12,
                        "line": 77
                      }
                    },
                    "range": [
                      1632,
                      1647
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SpecificGuard",
                        "optional": false,
                        "range": [
                          1634,
                          1647
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 77
                          },
                          "start": {
                            "column": 14,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1634,
                        1647
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 77
                        },
                        "start": {
                          "column": 14,
                          "line": 77
                        }
                      }
                    }
                  },
                  "range": [
                    1625,
                    1647
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 77
                    },
                    "start": {
                      "column": 5,
                      "line": 77
                    }
                  }
                },
                "init": null,
                "range": [
                  1625,
                  1647
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 77
                  },
                  "start": {
                    "column": 5,
                    "line": 77
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1621,
              1648
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 77
              },
              "start": {
                "column": 1,
                "line": 77
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "general",
                        "optional": false,
                        "range": [
                          1682,
                          1689
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 79
                          },
                          "start": {
                            "column": 2,
                            "line": 79
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "do",
                        "optional": false,
                        "range": [
                          1690,
                          1692
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 79
                          },
                          "start": {
                            "column": 10,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1682,
                        1692
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 79
                        },
                        "start": {
                          "column": 2,
                          "line": 79
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1682,
                      1694
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 79
                      },
                      "start": {
                        "column": 2,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1682,
                    1695
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 79
                    },
                    "start": {
                      "column": 2,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                1678,
                1698
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 80
                },
                "start": {
                  "column": 29,
                  "line": 78
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "general",
                "optional": false,
                "range": [
                  1654,
                  1661
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 78
                  },
                  "start": {
                    "column": 5,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isMoreSpecific",
                "optional": false,
                "range": [
                  1662,
                  1676
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 78
                  },
                  "start": {
                    "column": 13,
                    "line": 78
                  }
                }
              },
              "range": [
                1654,
                1676
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 78
                },
                "start": {
                  "column": 5,
                  "line": 78
                }
              }
            },
            "range": [
              1650,
              1698
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 80
              },
              "start": {
                "column": 1,
                "line": 78
              }
            }
          }
        ],
        "range": [
          97,
          1700
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          92,
          96
        ],
        "decorators": [],
        "name": "Test",
        "optional": false,
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "kind": "namespace",
      "range": [
        82,
        1700
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 82
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
