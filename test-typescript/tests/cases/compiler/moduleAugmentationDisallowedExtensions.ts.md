__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
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
          "column": 17,
          "line": 1
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
      "line": 2
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
    561
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
              19,
              36
            ],
            "attributes": [],
            "declaration": {
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
                      30,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      34,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    30,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                26,
                36
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
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
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          13,
          38
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          12
        ],
        "decorators": [],
        "name": "N1",
        "optional": false,
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        38
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
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    },
                    "range": [
                      81,
                      89
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        83,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    80,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": null,
                "range": [
                  80,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              76,
              90
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    },
                    "range": [
                      100,
                      108
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        102,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    99,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": null,
                "range": [
                  99,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              95,
              109
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 8
                      }
                    },
                    "range": [
                      121,
                      129
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        123,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    120,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  120,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              114,
              130
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                        "name": "x1",
                        "optional": false,
                        "range": [
                          140,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 9
                          },
                          "start": {
                            "column": 9,
                            "line": 9
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
                        "name": "x1",
                        "optional": false,
                        "range": [
                          140,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 9
                          },
                          "start": {
                            "column": 9,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        140,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 9
                        },
                        "start": {
                          "column": 9,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y1",
                        "optional": false,
                        "range": [
                          144,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 9
                          },
                          "start": {
                            "column": 13,
                            "line": 9
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
                        "name": "y1",
                        "optional": false,
                        "range": [
                          144,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 9
                          },
                          "start": {
                            "column": 13,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        144,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z0",
                        "optional": false,
                        "range": [
                          148,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 17,
                            "line": 9
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
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
                              "name": "n",
                              "optional": false,
                              "range": [
                                153,
                                154
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 9
                                },
                                "start": {
                                  "column": 22,
                                  "line": 9
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
                              "name": "n",
                              "optional": false,
                              "range": [
                                153,
                                154
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 9
                                },
                                "start": {
                                  "column": 22,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              153,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 9
                              },
                              "start": {
                                "column": 22,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          152,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 21,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        148,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z1",
                        "optional": false,
                        "range": [
                          157,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 26,
                            "line": 9
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
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
                              "name": "arr",
                              "optional": false,
                              "range": [
                                162,
                                165
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 9
                                },
                                "start": {
                                  "column": 31,
                                  "line": 9
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el1",
                                  "optional": false,
                                  "range": [
                                    168,
                                    171
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 9
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el2",
                                  "optional": false,
                                  "range": [
                                    173,
                                    176
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 9
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el3",
                                  "optional": false,
                                  "range": [
                                    178,
                                    181
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                167,
                                182
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 9
                                },
                                "start": {
                                  "column": 36,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              162,
                              182
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 9
                              },
                              "start": {
                                "column": 31,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          161,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 9
                          },
                          "start": {
                            "column": 30,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        157,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 118,
                        "line": 9
                      },
                      "start": {
                        "column": 53,
                        "line": 9
                      }
                    },
                    "range": [
                      184,
                      249
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
                            "name": "x1",
                            "optional": false,
                            "range": [
                              187,
                              189
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 9
                              },
                              "start": {
                                "column": 56,
                                "line": 9
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
                                "line": 9
                              },
                              "start": {
                                "column": 58,
                                "line": 9
                              }
                            },
                            "range": [
                              189,
                              197
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                191,
                                197
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 9
                                },
                                "start": {
                                  "column": 60,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            187,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 9
                            },
                            "start": {
                              "column": 56,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y1",
                            "optional": false,
                            "range": [
                              199,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 9
                              },
                              "start": {
                                "column": 68,
                                "line": 9
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
                                "column": 78,
                                "line": 9
                              },
                              "start": {
                                "column": 70,
                                "line": 9
                              }
                            },
                            "range": [
                              201,
                              209
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                203,
                                209
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 9
                                },
                                "start": {
                                  "column": 72,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            199,
                            210
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 9
                            },
                            "start": {
                              "column": 68,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z0",
                            "optional": false,
                            "range": [
                              211,
                              213
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 9
                              },
                              "start": {
                                "column": 80,
                                "line": 9
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
                                "line": 9
                              },
                              "start": {
                                "column": 82,
                                "line": 9
                              }
                            },
                            "range": [
                              213,
                              226
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
                                    "name": "n",
                                    "optional": false,
                                    "range": [
                                      216,
                                      217
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 85,
                                        "line": 9
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
                                        "column": 94,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 86,
                                        "line": 9
                                      }
                                    },
                                    "range": [
                                      217,
                                      225
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "range": [
                                        219,
                                        225
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 94,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 88,
                                          "line": 9
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    216,
                                    225
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 94,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 85,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "range": [
                                215,
                                226
                              ],
                              "loc": {
                                "end": {
                                  "column": 95,
                                  "line": 9
                                },
                                "start": {
                                  "column": 84,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            211,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 9
                            },
                            "start": {
                              "column": 80,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z1",
                            "optional": false,
                            "range": [
                              228,
                              230
                            ],
                            "loc": {
                              "end": {
                                "column": 99,
                                "line": 9
                              },
                              "start": {
                                "column": 97,
                                "line": 9
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
                                "column": 116,
                                "line": 9
                              },
                              "start": {
                                "column": 99,
                                "line": 9
                              }
                            },
                            "range": [
                              230,
                              247
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
                                    "name": "arr",
                                    "optional": false,
                                    "range": [
                                      233,
                                      236
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 105,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 102,
                                        "line": 9
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
                                        "column": 115,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 105,
                                        "line": 9
                                      }
                                    },
                                    "range": [
                                      236,
                                      246
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          238,
                                          244
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 113,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 107,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        238,
                                        246
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 115,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 107,
                                          "line": 9
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    233,
                                    246
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 115,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 102,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "range": [
                                232,
                                247
                              ],
                              "loc": {
                                "end": {
                                  "column": 116,
                                  "line": 9
                                },
                                "start": {
                                  "column": 101,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            228,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 116,
                              "line": 9
                            },
                            "start": {
                              "column": 97,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        186,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 118,
                          "line": 9
                        },
                        "start": {
                          "column": 55,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    139,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 118,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": null,
                "range": [
                  139,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 118,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              135,
              249
            ],
            "loc": {
              "end": {
                "column": 118,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                266,
                271
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      268,
                      269
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "range": [
                    268,
                    269
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
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
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
                264,
                265
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "range": [
              254,
              271
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
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    298,
                    315
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        313,
                        315
                      ],
                      "body": [],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 23,
                          "line": 12
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        311,
                        312
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 12
                        },
                        "start": {
                          "column": 21,
                          "line": 12
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      305,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                288,
                321
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                286,
                287
              ],
              "decorators": [],
              "name": "N",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "kind": "namespace",
            "range": [
              276,
              321
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                336,
                338
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "range": [
                332,
                335
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 14
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              326,
              338
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
              "name": "foo",
              "optional": false,
              "range": [
                352,
                355
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              },
              "range": [
                357,
                365
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  359,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              343,
              366
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                376,
                377
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                380,
                386
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "range": [
              371,
              387
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ImportDeclaration",
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "raw": "\"./x0\"",
              "value": "./x0",
              "range": [
                413,
                419
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 25,
                  "line": 17
                }
              }
            },
            "specifiers": [
              {
                "type": "ImportNamespaceSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "all",
                  "optional": false,
                  "range": [
                    404,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 17
                    },
                    "start": {
                      "column": 16,
                      "line": 17
                    }
                  }
                },
                "range": [
                  399,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              392,
              420
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "ImportDeclaration",
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "raw": "\"./x0\"",
              "value": "./x0",
              "range": [
                441,
                447
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    433,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    433,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  433,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 12,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              425,
              448
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "ExportAllDeclaration",
            "attributes": [],
            "exported": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "raw": "\"./x0\"",
              "value": "./x0",
              "range": [
                467,
                473
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              }
            },
            "range": [
              453,
              474
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "raw": "\"./x0\"",
              "value": "./x0",
              "range": [
                495,
                501
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    487,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    487,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "range": [
                  487,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              479,
              502
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          70,
          504
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 30,
            "line": 5
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"./observable\"",
        "value": "./observable",
        "range": [
          55,
          69
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "range": [
        40,
        504
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
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
              "name": "N1",
              "optional": false,
              "range": [
                545,
                547
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 13,
                  "line": 24
                }
              }
            },
            "range": [
              536,
              548
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          530,
          550
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 24,
            "line": 23
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"./test\"",
        "value": "./test",
        "range": [
          521,
          529
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 23
          },
          "start": {
            "column": 15,
            "line": 23
          }
        }
      },
      "range": [
        506,
        550
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        551,
        560
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
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
    108
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        89
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            35,
            89
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  47,
                  87
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pred",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      },
                      "range": [
                        52,
                        70
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 2
                                },
                                "start": {
                                  "column": 19,
                                  "line": 2
                                }
                              },
                              "range": [
                                56,
                                58
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    57,
                                    58
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 2
                                    }
                                  }
                                },
                                "range": [
                                  57,
                                  58
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              55,
                              58
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 2
                              },
                              "start": {
                                "column": 18,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 23,
                              "line": 2
                            }
                          },
                          "range": [
                            60,
                            70
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              63,
                              70
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 2
                              },
                              "start": {
                                "column": 26,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          54,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      48,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 2
                    },
                    "start": {
                      "column": 34,
                      "line": 2
                    }
                  },
                  "range": [
                    71,
                    86
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        83,
                        86
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
                              84,
                              85
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 2
                              },
                              "start": {
                                "column": 47,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            84,
                            85
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 2
                            },
                            "start": {
                              "column": 47,
                              "line": 2
                            }
                          }
                        }
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
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Observable",
                      "optional": false,
                      "range": [
                        73,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 2
                        },
                        "start": {
                          "column": 36,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      73,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 2
                      },
                      "start": {
                        "column": 36,
                        "line": 2
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              },
              "range": [
                41,
                87
              ],
              "loc": {
                "end": {
                  "column": 50,
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
              "column": 35,
              "line": 1
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Observable",
          "optional": false,
          "range": [
            21,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          },
          "range": [
            31,
            34
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
                  32,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          89
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        90,
        107
      ],
      "attributes": [],
      "declaration": {
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
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                105,
                106
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              101,
              106
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          97,
          107
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
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
          "column": 17,
          "line": 4
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
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
          "column": 17,
          "line": 1
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
      "line": 2
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
    56
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./observable\"",
        "value": "./observable",
        "range": [
          27,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 27,
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
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./x\"",
        "value": "./x",
        "range": [
          49,
          54
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "specifiers": [],
      "range": [
        42,
        55
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
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
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
