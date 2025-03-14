__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    182
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              24,
              60
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  58,
                  60
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "WriteFileOptions",
                "optional": false,
                "range": [
                  41,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              },
              "range": [
                31,
                60
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 38,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              63,
              179
            ],
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "writeFile",
                "optional": false,
                "range": [
                  79,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
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
                        "column": 40,
                        "line": 3
                      },
                      "start": {
                        "column": 32,
                        "line": 3
                      }
                    },
                    "range": [
                      93,
                      101
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        95,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 3
                        },
                        "start": {
                          "column": 34,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    89,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 3
                      },
                      "start": {
                        "column": 46,
                        "line": 3
                      }
                    },
                    "range": [
                      107,
                      112
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        109,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 3
                        },
                        "start": {
                          "column": 48,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    103,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 3
                    },
                    "start": {
                      "column": 42,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 3
                      },
                      "start": {
                        "column": 60,
                        "line": 3
                      }
                    },
                    "range": [
                      121,
                      139
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WriteFileOptions",
                        "optional": false,
                        "range": [
                          123,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 3
                          },
                          "start": {
                            "column": 62,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        123,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 3
                        },
                        "start": {
                          "column": 62,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    114,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 3
                    },
                    "start": {
                      "column": 53,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 110,
                        "line": 3
                      },
                      "start": {
                        "column": 88,
                        "line": 3
                      }
                    },
                    "range": [
                      149,
                      171
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 101,
                                "line": 3
                              },
                              "start": {
                                "column": 94,
                                "line": 3
                              }
                            },
                            "range": [
                              155,
                              162
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Error",
                                "optional": false,
                                "range": [
                                  157,
                                  162
                                ],
                                "loc": {
                                  "end": {
                                    "column": 101,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 96,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                157,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 101,
                                  "line": 3
                                },
                                "start": {
                                  "column": 96,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            152,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 3
                            },
                            "start": {
                              "column": 91,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 110,
                            "line": 3
                          },
                          "start": {
                            "column": 103,
                            "line": 3
                          }
                        },
                        "range": [
                          164,
                          171
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            167,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 110,
                              "line": 3
                            },
                            "start": {
                              "column": 106,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        151,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 110,
                          "line": 3
                        },
                        "start": {
                          "column": 90,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    141,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 110,
                      "line": 3
                    },
                    "start": {
                      "column": 80,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 117,
                    "line": 3
                  },
                  "start": {
                    "column": 111,
                    "line": 3
                  }
                },
                "range": [
                  172,
                  178
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    174,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 117,
                      "line": 3
                    },
                    "start": {
                      "column": 113,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                70,
                179
              ],
              "loc": {
                "end": {
                  "column": 118,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 118,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          20,
          181
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"fs\"",
        "value": "fs",
        "range": [
          15,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
        181
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
