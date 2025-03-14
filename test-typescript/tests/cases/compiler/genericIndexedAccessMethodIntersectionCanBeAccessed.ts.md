__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    445
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedService",
        "optional": false,
        "range": [
          5,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              44,
              45
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            38,
            45
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 10,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            33,
            34
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 2
            },
            "start": {
              "column": 5,
              "line": 2
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  }
                },
                "range": [
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    48,
                    49
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
                  48,
                  49
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
                48,
                52
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__$daemonMode",
                    "optional": false,
                    "range": [
                      65,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    },
                    "range": [
                      79,
                      87
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        81,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    65,
                    88
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
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__$action",
                    "optional": false,
                    "range": [
                      97,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    },
                    "range": [
                      107,
                      115
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        109,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 20,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    97,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
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
                55,
                122
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            48,
            122
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "range": [
          26,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          23
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
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        126
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Service",
        "optional": false,
        "range": [
          133,
          140
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                164,
                165
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "range": [
              164,
              165
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          },
          "range": [
            158,
            165
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 9
            },
            "start": {
              "column": 10,
              "line": 9
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            153,
            154
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 9
            },
            "start": {
              "column": 5,
              "line": 9
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    170,
                    171
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
                  170,
                  171
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
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    168,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                },
                "range": [
                  168,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "range": [
                168,
                172
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "range": [
                      176,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 28,
                        "line": 9
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 9
                      },
                      "start": {
                        "column": 31,
                        "line": 9
                      }
                    },
                    "range": [
                      179,
                      187
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        181,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 9
                        },
                        "start": {
                          "column": 33,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    176,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 9
                    },
                    "start": {
                      "column": 28,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                175,
                188
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              }
            }
          ],
          "range": [
            168,
            188
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 9
            }
          }
        },
        "range": [
          146,
          191
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 18,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        },
        "range": [
          140,
          143
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
                141,
                142
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              141,
              142
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        128,
        192
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        194,
        444
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
              "name": "createService",
              "optional": false,
              "range": [
                207,
                220
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 12
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
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
                                      "name": "method",
                                      "optional": false,
                                      "range": [
                                        342,
                                        348
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ServiceCtr",
                                        "optional": false,
                                        "range": [
                                          352,
                                          362
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 16
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "range": [
                                            364,
                                            367
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 39,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 36,
                                              "line": 16
                                            }
                                          }
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeOperator",
                                          "operator": "keyof",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "range": [
                                                377,
                                                378
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 50,
                                                  "line": 16
                                                },
                                                "start": {
                                                  "column": 49,
                                                  "line": 16
                                                }
                                              }
                                            },
                                            "range": [
                                              377,
                                              378
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 50,
                                                "line": 16
                                              },
                                              "start": {
                                                "column": 49,
                                                "line": 16
                                              }
                                            }
                                          },
                                          "range": [
                                            371,
                                            378
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 50,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 16
                                            }
                                          }
                                        },
                                        "range": [
                                          364,
                                          378
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 50,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 16
                                          }
                                        }
                                      },
                                      "range": [
                                        351,
                                        379
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      342,
                                      379
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 14,
                                        "line": 16
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const",
                                "range": [
                                  336,
                                  380
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 16
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
                                            "name": "__$daemonMode",
                                            "optional": false,
                                            "range": [
                                              396,
                                              409
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 15,
                                                "line": 17
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
                                            "name": "__$daemonMode",
                                            "optional": false,
                                            "range": [
                                              396,
                                              409
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 15,
                                                "line": 17
                                              }
                                            }
                                          },
                                          "range": [
                                            396,
                                            409
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 17
                                            },
                                            "start": {
                                              "column": 15,
                                              "line": 17
                                            }
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "__$action",
                                            "optional": false,
                                            "range": [
                                              411,
                                              420
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 30,
                                                "line": 17
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
                                            "name": "__$action",
                                            "optional": false,
                                            "range": [
                                              411,
                                              420
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 30,
                                                "line": 17
                                              }
                                            }
                                          },
                                          "range": [
                                            411,
                                            420
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 39,
                                              "line": 17
                                            },
                                            "start": {
                                              "column": 30,
                                              "line": 17
                                            }
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "id",
                                            "optional": false,
                                            "range": [
                                              422,
                                              424
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 43,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 41,
                                                "line": 17
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
                                            "name": "id",
                                            "optional": false,
                                            "range": [
                                              422,
                                              424
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 43,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 41,
                                                "line": 17
                                              }
                                            }
                                          },
                                          "range": [
                                            422,
                                            424
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 43,
                                              "line": 17
                                            },
                                            "start": {
                                              "column": 41,
                                              "line": 17
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        395,
                                        425
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "method",
                                      "optional": false,
                                      "range": [
                                        428,
                                        434
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      395,
                                      434
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 14,
                                        "line": 17
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const",
                                "range": [
                                  389,
                                  435
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 17
                                  }
                                }
                              }
                            ],
                            "range": [
                              326,
                              441
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 18
                              },
                              "start": {
                                "column": 43,
                                "line": 15
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "range": [
                                319,
                                322
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 15
                                },
                                "start": {
                                  "column": 36,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "range": [
                            319,
                            441
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 18
                            },
                            "start": {
                              "column": 36,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ServiceCtr",
                              "optional": false,
                              "range": [
                                299,
                                309
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 15
                                },
                                "start": {
                                  "column": 16,
                                  "line": 15
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
                              "name": "Object",
                              "optional": false,
                              "range": [
                                287,
                                293
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 15
                                },
                                "start": {
                                  "column": 4,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "keys",
                              "optional": false,
                              "range": [
                                294,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 15
                                },
                                "start": {
                                  "column": 11,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              287,
                              298
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 15
                              },
                              "start": {
                                "column": 4,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            287,
                            310
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            311,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 15
                            },
                            "start": {
                              "column": 28,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          287,
                          318
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 4,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        287,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 18
                        },
                        "start": {
                          "column": 4,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      287,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 18
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  281,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 14
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ServiceCtr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    },
                    "range": [
                      242,
                      275
                    ],
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              259,
                              262
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
                                    260,
                                    261
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  260,
                                  261
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 13
                              },
                              "start": {
                                "column": 31,
                                "line": 13
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExtendedService",
                            "optional": false,
                            "range": [
                              244,
                              259
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            244,
                            262
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 16,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              272,
                              275
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
                                    273,
                                    274
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  273,
                                  274
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 13
                              },
                              "start": {
                                "column": 44,
                                "line": 13
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Service",
                            "optional": false,
                            "range": [
                              265,
                              272
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 13
                              },
                              "start": {
                                "column": 37,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            265,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 13
                            },
                            "start": {
                              "column": 37,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        244,
                        275
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    232,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 29,
                    "line": 12
                  }
                },
                "range": [
                  223,
                  226
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
                        224,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 30,
                          "line": 12
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      224,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    }
                  }
                ]
              },
              "range": [
                223,
                444
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 19
                },
                "start": {
                  "column": 29,
                  "line": 12
                }
              }
            },
            "range": [
              207,
              444
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 12
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          201,
          444
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
