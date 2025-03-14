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
        33
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Whatever",
          "optional": false,
          "range": [
            12,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
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
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                },
                "range": [
                  28,
                  31
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      30,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 1
                      },
                      "start": {
                        "column": 30,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    30,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 1
                    },
                    "start": {
                      "column": 30,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                27,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            26,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
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
          7,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 1
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
          "column": 33,
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
        34,
        107
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "something",
          "optional": false,
          "range": [
            58,
            67
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "cb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 39,
                  "line": 2
                }
              },
              "range": [
                73,
                92
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 2
                    },
                    "start": {
                      "column": 44,
                      "line": 2
                    }
                  },
                  "range": [
                    78,
                    92
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        89,
                        92
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
                              90,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 2
                              },
                              "start": {
                                "column": 56,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            90,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 2
                            },
                            "start": {
                              "column": 56,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 2
                        },
                        "start": {
                          "column": 55,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Whatever",
                      "optional": false,
                      "range": [
                        81,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 2
                        },
                        "start": {
                          "column": 47,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      81,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 2
                      },
                      "start": {
                        "column": 47,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  75,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              71,
              92
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 37,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 72,
              "line": 2
            },
            "start": {
              "column": 59,
              "line": 2
            }
          },
          "range": [
            93,
            106
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                103,
                106
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
                      104,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 2
                      },
                      "start": {
                        "column": 70,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 2
                    },
                    "start": {
                      "column": 70,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 2
                },
                "start": {
                  "column": 69,
                  "line": 2
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Whatever",
              "optional": false,
              "range": [
                95,
                103
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 2
                },
                "start": {
                  "column": 61,
                  "line": 2
                }
              }
            },
            "range": [
              95,
              106
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 2
              },
              "start": {
                "column": 61,
                "line": 2
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 36,
              "line": 2
            },
            "start": {
              "column": 33,
              "line": 2
            }
          },
          "range": [
            67,
            70
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
                  68,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 2
                  },
                  "start": {
                    "column": 34,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 34,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          41,
          107
        ],
        "loc": {
          "end": {
            "column": 73,
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
          "column": 73,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    112
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'whatever'",
        "value": "whatever",
        "range": [
          19,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
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
            "name": "E",
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
        30
      ],
      "loc": {
        "end": {
          "column": 30,
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
        112
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
              "name": "run",
              "optional": false,
              "range": [
                45,
                48
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      109,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 3
                      },
                      "start": {
                        "column": 77,
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
                    "name": "E",
                    "optional": false,
                    "range": [
                      97,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 3
                      },
                      "start": {
                        "column": 65,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "range": [
                      99,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 3
                      },
                      "start": {
                        "column": 67,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    97,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 3
                    },
                    "start": {
                      "column": 65,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  97,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 3
                  },
                  "start": {
                    "column": 65,
                    "line": 3
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    },
                    "range": [
                      56,
                      77
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        },
                        "range": [
                          61,
                          77
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              74,
                              77
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "range": [
                                    75,
                                    76
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  75,
                                  76
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 3
                              },
                              "start": {
                                "column": 42,
                                "line": 3
                              }
                            }
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "range": [
                                64,
                                65
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 3
                                },
                                "start": {
                                  "column": 32,
                                  "line": 3
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Whatever",
                              "optional": false,
                              "range": [
                                66,
                                74
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 3
                                },
                                "start": {
                                  "column": 34,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              64,
                              74
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 3
                              },
                              "start": {
                                "column": 32,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            64,
                            77
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 3
                            },
                            "start": {
                              "column": 32,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        58,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
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
                    55,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 3
                  },
                  "start": {
                    "column": 46,
                    "line": 3
                  }
                },
                "range": [
                  78,
                  93
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      90,
                      93
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            91,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 3
                            },
                            "start": {
                              "column": 59,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          91,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 3
                          },
                          "start": {
                            "column": 59,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 3
                      },
                      "start": {
                        "column": 58,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        80,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 3
                        },
                        "start": {
                          "column": 48,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Whatever",
                      "optional": false,
                      "range": [
                        82,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 3
                        },
                        "start": {
                          "column": 50,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      80,
                      90
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 3
                      },
                      "start": {
                        "column": 48,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    80,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 3
                    },
                    "start": {
                      "column": 48,
                      "line": 3
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                },
                "range": [
                  51,
                  54
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        52,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 3
                        },
                        "start": {
                          "column": 20,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      52,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                51,
                111
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "range": [
              45,
              111
            ],
            "loc": {
              "end": {
                "column": 79,
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
          39,
          112
        ],
        "loc": {
          "end": {
            "column": 80,
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
          "column": 80,
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
      "column": 80,
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
