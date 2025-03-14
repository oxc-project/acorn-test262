__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    268
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
              20,
              90
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  51,
                  90
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
                          62,
                          65
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
                          67,
                          70
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
                          72,
                          76
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
                        77,
                        83
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          79,
                          83
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
                      61,
                      84
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
                  37,
                  50
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
                27,
                90
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
              95,
              185
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  126,
                  185
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
                        136,
                        139
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
                        139,
                        178
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
                                145,
                                160
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "connectModule",
                                  "optional": false,
                                  "range": [
                                    147,
                                    160
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
                                  147,
                                  160
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
                              142,
                              160
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
                            162,
                            178
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "range": [
                                165,
                                178
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
                              165,
                              178
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
                          141,
                          178
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
                      136,
                      179
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
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
                  112,
                  125
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
                102,
                185
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
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
          14,
          187
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 14,
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
          13
        ],
        "decorators": [],
        "name": "server",
        "optional": false,
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
      },
      "kind": "module",
      "range": [
        0,
        187
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "name": "server",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              },
              "range": [
                198,
                248
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
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 6,
                          "line": 10
                        }
                      },
                      "range": [
                        208,
                        230
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "server",
                            "optional": false,
                            "range": [
                              210,
                              216
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 10
                              },
                              "start": {
                                "column": 8,
                                "line": 10
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "range": [
                              217,
                              230
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 10
                              },
                              "start": {
                                "column": 15,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            210,
                            230
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          210,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      206,
                      231
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        236,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 11
                        },
                        "start": {
                          "column": 4,
                          "line": 11
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
                          "column": 13,
                          "line": 11
                        },
                        "start": {
                          "column": 7,
                          "line": 11
                        }
                      },
                      "range": [
                        239,
                        245
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "range": [
                            241,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 11
                            },
                            "start": {
                              "column": 9,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          241,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 11
                          },
                          "start": {
                            "column": 9,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      236,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  200,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              192,
              248
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            192,
            248
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        188,
        249
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "range": [
          259,
          265
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "range": [
        250,
        266
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
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
    49,
    214
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "connect",
        "optional": false,
        "range": [
          56,
          63
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'exportEqualErrorType_0'",
          "value": "exportEqualErrorType_0",
          "range": [
            74,
            98
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 2
            }
          }
        },
        "range": [
          66,
          99
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "range": [
        49,
        100
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'foo'",
                "value": "foo",
                "range": [
                  130,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "connect",
                "optional": false,
                "range": [
                  115,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "range": [
                  123,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              },
              "range": [
                115,
                129
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              115,
              136
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "connect",
              "optional": false,
              "range": [
                101,
                108
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 0,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              101,
              110
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "use",
            "optional": false,
            "range": [
              111,
              114
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            101,
            114
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          101,
          137
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        101,
        138
      ],
      "loc": {
        "end": {
          "column": 37,
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
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
