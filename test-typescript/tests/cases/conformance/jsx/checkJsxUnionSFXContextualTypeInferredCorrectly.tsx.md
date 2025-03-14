__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    762
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'react'",
        "value": "react",
        "range": [
          63,
          70
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            52,
            57
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              52,
              57
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        }
      ],
      "range": [
        45,
        71
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          86,
          190
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multi",
              "optional": false,
              "range": [
                92,
                97
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 4,
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
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                97,
                104
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    99,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  99,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              92,
              104
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 4,
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
              "name": "value",
              "optional": false,
              "range": [
                109,
                114
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 4,
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
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              },
              "range": [
                114,
                134
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      116,
                      122
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
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      125,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              109,
              134
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "range": [
                139,
                147
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                  "column": 53,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              },
              "range": [
                147,
                188
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      },
                      "range": [
                        159,
                        179
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              161,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 8
                              },
                              "start": {
                                "column": 26,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              170,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 8
                              },
                              "start": {
                                "column": 35,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "range": [
                          161,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 8
                          },
                          "start": {
                            "column": 26,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      150,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 8
                    },
                    "start": {
                      "column": 46,
                      "line": 8
                    }
                  },
                  "range": [
                    181,
                    188
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      184,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 8
                      },
                      "start": {
                        "column": 49,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  149,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              139,
              188
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PS",
        "optional": false,
        "range": [
          83,
          85
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        73,
        190
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          205,
          288
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multi",
              "optional": false,
              "range": [
                211,
                216
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              },
              "range": [
                216,
                222
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    218,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                },
                "range": [
                  218,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              211,
              222
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                227,
                232
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              },
              "range": [
                232,
                242
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    234,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  234,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              227,
              242
            ],
            "loc": {
              "end": {
                "column": 19,
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
              "name": "onChange",
              "optional": false,
              "range": [
                247,
                255
              ],
              "loc": {
                "end": {
                  "column": 12,
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
                  "column": 43,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
                }
              },
              "range": [
                255,
                286
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 14
                        },
                        "start": {
                          "column": 24,
                          "line": 14
                        }
                      },
                      "range": [
                        267,
                        277
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            269,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 14
                            },
                            "start": {
                              "column": 26,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          269,
                          277
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 26,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      258,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 36,
                      "line": 14
                    }
                  },
                  "range": [
                    279,
                    286
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      282,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 39,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  257,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 14,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              247,
              286
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 13,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PM",
        "optional": false,
        "range": [
          202,
          204
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "range": [
        192,
        288
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        290,
        366
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXElement",
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "range": [
                      360,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    358,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "range": [
                      355,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    354,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 11,
                      "line": 18
                    }
                  }
                },
                "range": [
                  354,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "range": [
                347,
                364
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            }
          ],
          "range": [
            341,
            366
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
            },
            "start": {
              "column": 51,
              "line": 17
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentWithUnion",
          "optional": false,
          "range": [
            306,
            324
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 17
            },
            "start": {
              "column": 16,
              "line": 17
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 17
                },
                "start": {
                  "column": 40,
                  "line": 17
                }
              },
              "range": [
                330,
                339
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PM",
                      "optional": false,
                      "range": [
                        332,
                        334
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 17
                        },
                        "start": {
                          "column": 42,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      332,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 17
                      },
                      "start": {
                        "column": 42,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PS",
                      "optional": false,
                      "range": [
                        337,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 17
                        },
                        "start": {
                          "column": 47,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      337,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 17
                      },
                      "start": {
                        "column": 47,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  332,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 17
                  },
                  "start": {
                    "column": 42,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              325,
              339
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 17
              },
              "start": {
                "column": 35,
                "line": 17
              }
            }
          }
        ],
        "range": [
          297,
          366
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 17
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
          "line": 17
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        392,
        611
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    448,
                    602
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "multi",
                        "range": [
                          480,
                          485
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "raw": "false",
                          "value": false,
                          "range": [
                            487,
                            492
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 25
                            },
                            "start": {
                              "column": 19,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          486,
                          493
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        480,
                        493
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "value",
                        "range": [
                          506,
                          511
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 26
                          },
                          "start": {
                            "column": 12,
                            "line": 26
                          }
                        }
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "raw": "'s'",
                          "value": "s",
                          "range": [
                            513,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 26
                            },
                            "start": {
                              "column": 19,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          512,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 26
                          },
                          "start": {
                            "column": 18,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        506,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 26
                        },
                        "start": {
                          "column": 12,
                          "line": 26
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "onChange",
                        "range": [
                          530,
                          538
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "range": [
                                  559,
                                  562
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 27
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
                                "name": "console",
                                "optional": false,
                                "range": [
                                  547,
                                  554
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 27
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "range": [
                                  555,
                                  558
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 27
                                  }
                                }
                              },
                              "range": [
                                547,
                                558
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 27
                                },
                                "start": {
                                  "column": 29,
                                  "line": 27
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              547,
                              563
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 27
                              },
                              "start": {
                                "column": 29,
                                "line": 27
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
                              "name": "val",
                              "optional": false,
                              "range": [
                                540,
                                543
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 27
                                },
                                "start": {
                                  "column": 22,
                                  "line": 27
                                }
                              }
                            }
                          ],
                          "range": [
                            540,
                            563
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 27
                            },
                            "start": {
                              "column": 22,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          539,
                          564
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 27
                          },
                          "start": {
                            "column": 21,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        530,
                        564
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ComponentWithUnion",
                    "range": [
                      449,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 9,
                        "line": 24
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "range": [
                  448,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "range": [
                431,
                609
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            425,
            611
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 33,
              "line": 22
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HereIsTheError",
          "optional": false,
          "range": [
            408,
            422
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 22
            },
            "start": {
              "column": 16,
              "line": 22
            }
          }
        },
        "params": [],
        "range": [
          399,
          611
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multi",
                  "optional": false,
                  "range": [
                    668,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    675,
                    680
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 34
                    },
                    "start": {
                      "column": 11,
                      "line": 34
                    }
                  }
                },
                "range": [
                  668,
                  680
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    686,
                    691
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'s'",
                  "value": "s",
                  "range": [
                    693,
                    696
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 35
                    },
                    "start": {
                      "column": 11,
                      "line": 35
                    }
                  }
                },
                "range": [
                  686,
                  696
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onChange",
                  "optional": false,
                  "range": [
                    702,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          731,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 36
                          },
                          "start": {
                            "column": 33,
                            "line": 36
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
                        "name": "console",
                        "optional": false,
                        "range": [
                          719,
                          726
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 36
                          },
                          "start": {
                            "column": 21,
                            "line": 36
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          727,
                          730
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 36
                          },
                          "start": {
                            "column": 29,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        719,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 36
                        },
                        "start": {
                          "column": 21,
                          "line": 36
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      719,
                      735
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 36
                      },
                      "start": {
                        "column": 21,
                        "line": 36
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
                      "name": "val",
                      "optional": false,
                      "range": [
                        712,
                        715
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 36
                        },
                        "start": {
                          "column": 14,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    712,
                    735
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "range": [
                  702,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              }
            ],
            "range": [
              662,
              759
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 37
              },
              "start": {
                "column": 19,
                "line": 33
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentWithUnion",
          "optional": false,
          "range": [
            643,
            661
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "range": [
          643,
          760
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        643,
        761
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
