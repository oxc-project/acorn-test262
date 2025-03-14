__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    82,
    847
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "range": [
                    774,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 29
                    },
                    "start": {
                      "column": 20,
                      "line": 29
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
                    779,
                    785
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 29
                    },
                    "start": {
                      "column": 25,
                      "line": 29
                    }
                  }
                },
                "range": [
                  774,
                  785
                ],
                "loc": {
                  "end": {
                    "column": 31,
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
                785
              ],
              "loc": {
                "end": {
                  "column": 31,
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
              786
            ],
            "loc": {
              "end": {
                "column": 32,
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
                    788,
                    792
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
                    793,
                    798
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
                  788,
                  798
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
                    801,
                    805
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
                  "name": "isNetworked",
                  "optional": false,
                  "range": [
                    806,
                    817
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 30
                    }
                  }
                },
                "range": [
                  801,
                  817
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 30
                  }
                }
              },
              "range": [
                788,
                817
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 30
                },
                "start": {
                  "column": 1,
                  "line": 30
                }
              }
            },
            "range": [
              788,
              818
            ],
            "loc": {
              "end": {
                "column": 31,
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
                    820,
                    824
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
                    825,
                    831
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
                  820,
                  831
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "range": [
                    834,
                    838
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false,
                  "range": [
                    839,
                    844
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 31
                    },
                    "start": {
                      "column": 20,
                      "line": 31
                    }
                  }
                },
                "range": [
                  834,
                  844
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
                  }
                }
              },
              "range": [
                820,
                844
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 31
                },
                "start": {
                  "column": 1,
                  "line": 31
                }
              }
            },
            "range": [
              820,
              845
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 31
              },
              "start": {
                "column": 1,
                "line": 31
              }
            }
          }
        ],
        "range": [
          97,
          847
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
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
        847
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
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
      "column": 1,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
