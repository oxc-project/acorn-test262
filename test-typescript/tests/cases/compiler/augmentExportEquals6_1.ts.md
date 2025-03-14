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
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                39,
                41
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                35,
                38
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              29,
              41
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
          },
          {
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
                      78,
                      80
                    ],
                    "body": [],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      76,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    70,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                60,
                86
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                56,
                59
              ],
              "decorators": [],
              "name": "foo",
              "optional": false,
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
            "kind": "namespace",
            "range": [
              46,
              86
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                100,
                103
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              91,
              104
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          23,
          106
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"file1\"",
        "value": "file1",
        "range": [
          15,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
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
        106
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
      "line": 9
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
    35,
    156
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          42,
          43
        ],
        "loc": {
          "end": {
            "column": 8,
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
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"file1\"",
          "value": "file1",
          "range": [
            54,
            61
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 19,
              "line": 2
            }
          }
        },
        "range": [
          46,
          62
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        }
      },
      "range": [
        35,
        63
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                140,
                153
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      142,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 18,
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
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    },
                    "range": [
                      143,
                      151
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        145,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 6
                        },
                        "start": {
                          "column": 21,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    142,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
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
                138,
                139
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "range": [
              128,
              153
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          122,
          155
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 23,
            "line": 5
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"file1\"",
        "value": "file1",
        "range": [
          114,
          121
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "range": [
        99,
        155
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 2
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
    68
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file1\"",
        "value": "file1",
        "range": [
          19,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 7,
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
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file2\"",
        "value": "file2",
        "range": [
          35,
          42
        ],
        "loc": {
          "end": {
            "column": 14,
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
        28,
        43
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                49,
                54
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      51,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    51,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 3
                    },
                    "start": {
                      "column": 7,
                      "line": 3
                    }
                  }
                },
                "range": [
                  51,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              48,
              54
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            48,
            54
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        44,
        55
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "b",
            "optional": false,
            "range": [
              60,
              61
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                64,
                65
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                66,
                67
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "range": [
              64,
              67
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            60,
            67
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        56,
        68
      ],
      "loc": {
        "end": {
          "column": 12,
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
      "column": 12,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
