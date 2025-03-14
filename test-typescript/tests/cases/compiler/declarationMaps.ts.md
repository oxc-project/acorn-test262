__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    338
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
              16,
              86
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  47,
                  86
                ],
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "res",
                        "optional": false,
                        "range": [
                          58,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 3
                          },
                          "start": {
                            "column": 9,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "range": [
                          63,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "range": [
                          68,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 3
                          },
                          "start": {
                            "column": 19,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      },
                      "range": [
                        73,
                        79
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          75,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 3
                          },
                          "start": {
                            "column": 26,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      57,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 35,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectModule",
                "optional": false,
                "range": [
                  33,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "range": [
                23,
                86
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              91,
              221
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  122,
                  221
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "range": [
                        132,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
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
                          "column": 50,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      },
                      "range": [
                        135,
                        174
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 17,
                                  "line": 6
                                }
                              },
                              "range": [
                                141,
                                156
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "connectModule",
                                  "optional": false,
                                  "range": [
                                    143,
                                    156
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  143,
                                  156
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 6
                                  }
                                }
                              }
                            },
                            "range": [
                              138,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 14,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 6
                            },
                            "start": {
                              "column": 34,
                              "line": 6
                            }
                          },
                          "range": [
                            158,
                            174
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "range": [
                                161,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 6
                                },
                                "start": {
                                  "column": 37,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              161,
                              174
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 6
                              },
                              "start": {
                                "column": 37,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          137,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 6
                          },
                          "start": {
                            "column": 13,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      132,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listen",
                      "optional": false,
                      "range": [
                        184,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
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
                          "column": 38,
                          "line": 7
                        },
                        "start": {
                          "column": 14,
                          "line": 7
                        }
                      },
                      "range": [
                        190,
                        214
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "port",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 7
                                },
                                "start": {
                                  "column": 21,
                                  "line": 7
                                }
                              },
                              "range": [
                                197,
                                205
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  199,
                                  205
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              193,
                              205
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 7
                            },
                            "start": {
                              "column": 31,
                              "line": 7
                            }
                          },
                          "range": [
                            207,
                            214
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              210,
                              214
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 7
                              },
                              "start": {
                                "column": 34,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          192,
                          214
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      184,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 35,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectExport",
                "optional": false,
                "range": [
                  108,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                98,
                221
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          10,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          9
        ],
        "decorators": [],
        "name": "m2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                232,
                323
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 13
                        },
                        "start": {
                          "column": 6,
                          "line": 13
                        }
                      },
                      "range": [
                        242,
                        260
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "range": [
                              244,
                              246
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 13
                              },
                              "start": {
                                "column": 8,
                                "line": 13
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "range": [
                              247,
                              260
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 11,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            244,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          244,
                          260
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      240,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 4,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "range": [
                        266,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
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
                          "column": 27,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      },
                      "range": [
                        271,
                        289
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "range": [
                              273,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 14
                              },
                              "start": {
                                "column": 11,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "range": [
                              276,
                              289
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 14
                              },
                              "start": {
                                "column": 14,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            273,
                            289
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 14
                            },
                            "start": {
                              "column": 11,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          273,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 14
                          },
                          "start": {
                            "column": 11,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      266,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "range": [
                        295,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 15
                        },
                        "start": {
                          "column": 4,
                          "line": 15
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
                          "column": 29,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      },
                      "range": [
                        302,
                        320
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "range": [
                              304,
                              306
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 15
                              },
                              "start": {
                                "column": 13,
                                "line": 15
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "range": [
                              307,
                              320
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 15
                              },
                              "start": {
                                "column": 16,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            304,
                            320
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 15
                            },
                            "start": {
                              "column": 13,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          304,
                          320
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      295,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 15
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  234,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              230,
              323
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            230,
            323
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        226,
        324
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "range": [
          335,
          337
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "range": [
        326,
        338
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 12,
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
