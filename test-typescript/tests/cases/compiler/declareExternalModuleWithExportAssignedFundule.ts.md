__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    363
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "range": [
                41,
                48
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "range": [
              32,
              49
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "range": [
                64,
                71
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              },
              "range": [
                73,
                96
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "express",
                    "optional": false,
                    "range": [
                      75,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpressServer",
                    "optional": false,
                    "range": [
                      83,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    75,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "range": [
                  75,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 45,
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
              55,
              97
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 4,
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
                  "type": "ExportNamedDeclaration",
                  "range": [
                    129,
                    296
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "body": {
                      "type": "TSInterfaceBody",
                      "range": [
                        160,
                        296
                      ],
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "enable",
                            "optional": false,
                            "range": [
                              175,
                              181
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
                              }
                            }
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  186,
                                  194
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    188,
                                    194
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                182,
                                194
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 11
                                },
                                "start": {
                                  "column": 19,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 11
                              },
                              "start": {
                                "column": 32,
                                "line": 11
                              }
                            },
                            "range": [
                              195,
                              210
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpressServer",
                                "optional": false,
                                "range": [
                                  197,
                                  210
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                197,
                                210
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 11
                                },
                                "start": {
                                  "column": 34,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "static": false,
                          "range": [
                            175,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "post",
                            "optional": false,
                            "range": [
                              225,
                              229
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          },
                          "kind": "method",
                          "optional": false,
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
                                    "column": 29,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 13
                                  }
                                },
                                "range": [
                                  234,
                                  242
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RegExp",
                                    "optional": false,
                                    "range": [
                                      236,
                                      242
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    236,
                                    242
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 13
                                    }
                                  }
                                }
                              },
                              "range": [
                                230,
                                242
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 17,
                                  "line": 13
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handler",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 13
                                  }
                                },
                                "range": [
                                  251,
                                  276
                                ],
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "req",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "loc": {
                                          "end": {
                                            "column": 54,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 13
                                          }
                                        },
                                        "range": [
                                          257,
                                          267
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Function",
                                            "optional": false,
                                            "range": [
                                              259,
                                              267
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 54,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 46,
                                                "line": 13
                                              }
                                            }
                                          },
                                          "range": [
                                            259,
                                            267
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 54,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 46,
                                              "line": 13
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        254,
                                        267
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 54,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 13
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 63,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 13
                                      }
                                    },
                                    "range": [
                                      269,
                                      276
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "range": [
                                        272,
                                        276
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 59,
                                          "line": 13
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    253,
                                    276
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 13
                                    }
                                  }
                                }
                              },
                              "range": [
                                244,
                                276
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 13
                                },
                                "start": {
                                  "column": 31,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 13
                              },
                              "start": {
                                "column": 65,
                                "line": 13
                              }
                            },
                            "range": [
                              278,
                              284
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                280,
                                284
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 13
                                },
                                "start": {
                                  "column": 67,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "static": false,
                          "range": [
                            225,
                            285
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 15
                        },
                        "start": {
                          "column": 39,
                          "line": 9
                        }
                      }
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpressServer",
                      "optional": false,
                      "range": [
                        146,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 9
                        },
                        "start": {
                          "column": 25,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      136,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    306,
                    352
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        340,
                        352
                      ],
                      "body": [],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 42,
                          "line": 17
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpressServerRequest",
                      "optional": false,
                      "range": [
                        319,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 17
                        },
                        "start": {
                          "column": 21,
                          "line": 17
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      313,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                118,
                359
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                110,
                117
              ],
              "decorators": [],
              "name": "express",
              "optional": false,
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "kind": "module",
            "range": [
              103,
              359
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          25,
          362
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"express\"",
        "value": "express",
        "range": [
          15,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        362
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
