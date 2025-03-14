__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    54,
    403
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validate",
        "optional": false,
        "range": [
          59,
          67
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              },
              "range": [
                75,
                83
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  77,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              71,
              83
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 34,
                  "line": 2
                }
              },
              "range": [
                88,
                96
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  90,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              85,
              96
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 31,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 2
                },
                "start": {
                  "column": 48,
                  "line": 2
                }
              },
              "range": [
                102,
                108
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rule",
                  "optional": false,
                  "range": [
                    104,
                    108
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
                  104,
                  108
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
              }
            },
            "range": [
              98,
              108
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 2
              },
              "start": {
                "column": 44,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 75,
              "line": 2
            },
            "start": {
              "column": 56,
              "line": 2
            }
          },
          "range": [
            110,
            129
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  113,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 2
                  },
                  "start": {
                    "column": 59,
                    "line": 2
                  }
                }
              },
              {
                "type": "TSBooleanKeyword",
                "range": [
                  122,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 2
                  },
                  "start": {
                    "column": 68,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              113,
              129
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 2
              },
              "start": {
                "column": 59,
                "line": 2
              }
            }
          }
        },
        "range": [
          70,
          129
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        54,
        130
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          150,
          241
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validate",
              "optional": false,
              "range": [
                156,
                164
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              },
              "range": [
                164,
                192
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      166,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "range": [
                        175,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      175,
                      181
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Validate",
                      "optional": false,
                      "range": [
                        184,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 32,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      184,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 32,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  166,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              156,
              193
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "normalize",
              "optional": false,
              "range": [
                198,
                207
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                  "column": 44,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              },
              "range": [
                208,
                238
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      },
                      "range": [
                        216,
                        229
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                219,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 5
                                },
                                "start": {
                                  "column": 25,
                                  "line": 5
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
                                  "column": 34,
                                  "line": 5
                                },
                                "start": {
                                  "column": 26,
                                  "line": 5
                                }
                              },
                              "range": [
                                220,
                                228
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  222,
                                  228
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 5
                                  }
                                }
                              }
                            },
                            "range": [
                              219,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 5
                              },
                              "start": {
                                "column": 25,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          218,
                          229
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 24,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      211,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 5
                    },
                    "start": {
                      "column": 37,
                      "line": 5
                    }
                  },
                  "range": [
                    231,
                    238
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      234,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 5
                      },
                      "start": {
                        "column": 40,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  210,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              198,
              239
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FullRule",
        "optional": false,
        "range": [
          141,
          149
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        131,
        241
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rule",
        "optional": false,
        "range": [
          248,
          252
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              255,
              261
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FullRule",
              "optional": false,
              "range": [
                264,
                272
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "range": [
              264,
              272
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          }
        ],
        "range": [
          255,
          272
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        }
      },
      "range": [
        243,
        273
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              },
              "range": [
                284,
                299
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
                      "name": "field",
                      "optional": false,
                      "range": [
                        287,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
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
                          "column": 23,
                          "line": 10
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      },
                      "range": [
                        292,
                        298
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Rule",
                          "optional": false,
                          "range": [
                            294,
                            298
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 10
                            },
                            "start": {
                              "column": 19,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          294,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 10
                          },
                          "start": {
                            "column": 19,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      287,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  286,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              281,
              299
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
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
                  "name": "field",
                  "optional": false,
                  "range": [
                    308,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "validate",
                        "optional": false,
                        "range": [
                          325,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "raw": "false",
                          "value": false,
                          "range": [
                            351,
                            356
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 12
                            },
                            "start": {
                              "column": 34,
                              "line": 12
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
                            "name": "_t",
                            "optional": false,
                            "range": [
                              336,
                              338
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 12
                              },
                              "start": {
                                "column": 19,
                                "line": 12
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_p",
                            "optional": false,
                            "range": [
                              340,
                              342
                            ],
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
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_s",
                            "optional": false,
                            "range": [
                              344,
                              346
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 12
                              },
                              "start": {
                                "column": 27,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          335,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 12
                          },
                          "start": {
                            "column": 18,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        325,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "normalize",
                        "optional": false,
                        "range": [
                          366,
                          375
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "match",
                            "optional": false,
                            "range": [
                              386,
                              391
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              392,
                              393
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 13
                              },
                              "start": {
                                "column": 34,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            386,
                            393
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 13
                            },
                            "start": {
                              "column": 28,
                              "line": 13
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
                            "name": "match",
                            "optional": false,
                            "range": [
                              377,
                              382
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 19,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          377,
                          393
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 13
                          },
                          "start": {
                            "column": 19,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        366,
                        393
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    315,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                },
                "range": [
                  308,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              302,
              402
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 27,
                "line": 10
              }
            }
          },
          "range": [
            281,
            402
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        275,
        403
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
