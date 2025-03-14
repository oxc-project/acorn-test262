__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    58
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        58
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            40,
            58
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "range": [
                  54,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null,
              "range": [
                46,
                56
              ],
              "loc": {
                "end": {
                  "column": 14,
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
              "column": 40,
              "line": 1
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            21,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "range": [
            33,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
            }
          }
        },
        "range": [
          7,
          58
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    78
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"../projA\"",
        "value": "../projA",
        "range": [
          20,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 20,
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
            "name": "Foo",
            "optional": false,
            "range": [
              9,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "Foo",
            "optional": false,
            "range": [
              9,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
            12
          ],
          "loc": {
            "end": {
              "column": 12,
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
        78
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
              "name": "f",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                },
                "range": [
                  54,
                  77
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        },
                        "range": [
                          60,
                          65
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              62,
                              65
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 2
                              },
                              "start": {
                                "column": 30,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            62,
                            65
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 30,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        57,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 25,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
                        "line": 2
                      }
                    },
                    "range": [
                      67,
                      77
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        70,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 2
                        },
                        "start": {
                          "column": 38,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    56,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 2
                    },
                    "start": {
                      "column": 24,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                53,
                77
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "init": null,
            "range": [
              53,
              77
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          39,
          78
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 46,
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
      "column": 46,
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
    77
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        77
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
              "name": "e",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                },
                "range": [
                  22,
                  76
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
                        "name": "f",
                        "optional": false,
                        "range": [
                          30,
                          31
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
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
                            "column": 47,
                            "line": 2
                          },
                          "start": {
                            "column": 5,
                            "line": 2
                          }
                        },
                        "range": [
                          31,
                          73
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 2
                                  }
                                },
                                "range": [
                                  37,
                                  61
                                ],
                                "typeAnnotation": {
                                  "type": "TSImportType",
                                  "range": [
                                    39,
                                    61
                                  ],
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "raw": "\"../projA\"",
                                      "value": "../projA",
                                      "range": [
                                        46,
                                        56
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 2
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 2
                                        }
                                      }
                                    },
                                    "range": [
                                      46,
                                      56
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "range": [
                                      58,
                                      61
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "typeArguments": null,
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 2
                                    }
                                  }
                                }
                              },
                              "range": [
                                34,
                                61
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 2
                                },
                                "start": {
                                  "column": 8,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 2
                              },
                              "start": {
                                "column": 37,
                                "line": 2
                              }
                            },
                            "range": [
                              63,
                              73
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                66,
                                73
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 2
                                },
                                "start": {
                                  "column": 40,
                                  "line": 2
                                }
                              }
                            }
                          },
                          "range": [
                            33,
                            73
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 2
                            },
                            "start": {
                              "column": 7,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        30,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
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
                    24,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                21,
                76
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              21,
              76
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          7,
          77
        ],
        "loc": {
          "end": {
            "column": 2,
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
          "column": 2,
          "line": 3
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
      "column": 2,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    50
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"../projC\"",
        "value": "../projC",
        "range": [
          16,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 16,
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
            "name": "e",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            8,
            9
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
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
        29,
        50
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
              "name": "d",
              "optional": false,
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "range": [
                      47,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
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
                    "name": "e",
                    "optional": false,
                    "range": [
                      47,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    47,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                46,
                49
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              42,
              49
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
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          36,
          50
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 21,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 21,
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
