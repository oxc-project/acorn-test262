__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    120
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        119
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                46,
                117
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    70,
                    117
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doSomething",
                        "optional": false,
                        "range": [
                          80,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
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
                          91,
                          111
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            100,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 4
                            },
                            "start": {
                              "column": 28,
                              "line": 3
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
                              "column": 27,
                              "line": 3
                            },
                            "start": {
                              "column": 21,
                              "line": 3
                            }
                          },
                          "range": [
                            93,
                            99
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              95,
                              99
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 3
                              },
                              "start": {
                                "column": 23,
                                "line": 3
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 19,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        80,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 4
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
                      "line": 5
                    },
                    "start": {
                      "column": 28,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReferredTo",
                  "optional": false,
                  "range": [
                    59,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  53,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            40,
            119
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "TSQualifiedName",
          "range": [
            14,
            39
          ],
          "left": {
            "type": "TSQualifiedName",
            "range": [
              14,
              34
            ],
            "left": {
              "type": "TSQualifiedName",
              "range": [
                14,
                30
              ],
              "left": {
                "type": "Identifier",
                "range": [
                  14,
                  23
                ],
                "decorators": [],
                "name": "elaborate",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "range": [
                  24,
                  30
                ],
                "decorators": [],
                "name": "nested",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "right": {
              "type": "Identifier",
              "range": [
                31,
                34
              ],
              "decorators": [],
              "name": "mod",
              "optional": false,
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            },
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "right": {
            "type": "Identifier",
            "range": [
              35,
              39
            ],
            "decorators": [],
            "name": "name",
            "optional": false,
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          119
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
    226
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RT_ALIAS",
        "optional": false,
        "range": [
          7,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"file1\"",
          "value": "file1",
          "range": [
            26,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        },
        "range": [
          18,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 18,
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
          "column": 35,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferredTo",
        "optional": false,
        "range": [
          43,
          53
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
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RT_ALIAS",
                  "optional": false,
                  "range": [
                    56,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elaborate",
                  "optional": false,
                  "range": [
                    65,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 29,
                      "line": 2
                    }
                  }
                },
                "range": [
                  56,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "range": [
                  75,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 39,
                    "line": 2
                  }
                }
              },
              "range": [
                56,
                81
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "range": [
                82,
                85
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 2
                },
                "start": {
                  "column": 46,
                  "line": 2
                }
              }
            },
            "range": [
              56,
              85
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "range": [
              86,
              90
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 2
              },
              "start": {
                "column": 50,
                "line": 2
              }
            }
          },
          "range": [
            56,
            90
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReferredTo",
          "optional": false,
          "range": [
            91,
            101
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 2
            },
            "start": {
              "column": 55,
              "line": 2
            }
          }
        },
        "range": [
          56,
          101
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 2
          },
          "start": {
            "column": 20,
            "line": 2
          }
        }
      },
      "range": [
        36,
        102
      ],
      "loc": {
        "end": {
          "column": 66,
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
        104,
        226
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  163,
                  224
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        173,
                        184
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
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
                        184,
                        218
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          215,
                          218
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 6
                          },
                          "start": {
                            "column": 50,
                            "line": 6
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
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "referred",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 6
                                },
                                "start": {
                                  "column": 36,
                                  "line": 6
                                }
                              },
                              "range": [
                                201,
                                213
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ReferredTo",
                                  "optional": false,
                                  "range": [
                                    203,
                                    213
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  203,
                                  213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 6
                                  }
                                }
                              }
                            },
                            "range": [
                              193,
                              213
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 6
                              },
                              "start": {
                                "column": 28,
                                "line": 6
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            185,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      173,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "UsesReferredType",
                "optional": false,
                "range": [
                  146,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                140,
                224
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            134,
            226
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 30,
              "line": 4
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            118,
            133
          ],
          "decorators": [],
          "name": "ImportingModule",
          "optional": false,
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        },
        "kind": "module",
        "range": [
          111,
          226
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
