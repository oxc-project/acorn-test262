__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    123
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./b'",
        "value": "./b",
        "range": [
          25,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "range": [
              14,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "range": [
              14,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            14,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        32,
        122
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
                57,
                120
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
                        87,
                        116
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            99,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ns2",
                                "optional": false,
                                "range": [
                                  103,
                                  106
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 4
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nested",
                                "optional": false,
                                "range": [
                                  107,
                                  113
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                103,
                                113
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 4
                                },
                                "start": {
                                  "column": 20,
                                  "line": 4
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                114,
                                115
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 4
                                },
                                "start": {
                                  "column": 31,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              103,
                              115
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            103,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          94,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    81,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "range": [
                    74,
                    80
                  ],
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "kind": "namespace",
                "range": [
                  64,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 5
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
                  "column": 3,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            53,
            122
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            49,
            52
          ],
          "decorators": [],
          "name": "ns1",
          "optional": false,
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "kind": "namespace",
        "range": [
          39,
          122
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 2
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
          "line": 2
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
    123
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./a'",
        "value": "./a",
        "range": [
          25,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "range": [
              14,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "range": [
              14,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            14,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        32,
        122
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
                57,
                120
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
                        87,
                        116
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            99,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ns1",
                                "optional": false,
                                "range": [
                                  103,
                                  106
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 4
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nested",
                                "optional": false,
                                "range": [
                                  107,
                                  113
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                103,
                                113
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 4
                                },
                                "start": {
                                  "column": 20,
                                  "line": 4
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                114,
                                115
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 4
                                },
                                "start": {
                                  "column": 31,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              103,
                              115
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            103,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          94,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    81,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "range": [
                    74,
                    80
                  ],
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "kind": "namespace",
                "range": [
                  64,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 5
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
                  "column": 3,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            53,
            122
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            49,
            52
          ],
          "decorators": [],
          "name": "ns2",
          "optional": false,
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "kind": "namespace",
        "range": [
          39,
          122
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 2
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
          "line": 2
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
