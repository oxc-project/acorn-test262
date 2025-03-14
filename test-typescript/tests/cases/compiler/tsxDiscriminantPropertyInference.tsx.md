__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    734
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
              41,
              68
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  66,
                  68
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "range": [
                  58,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "range": [
                48,
                68
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          35,
          70
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 2
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          31,
          34
        ],
        "decorators": [],
        "name": "JSX",
        "optional": false,
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
      "kind": "namespace",
      "range": [
        21,
        70
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorTrue",
        "optional": false,
        "range": [
          77,
          94
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
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
              "name": "disc",
              "optional": false,
              "range": [
                103,
                107
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              },
              "range": [
                107,
                113
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    109,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  }
                },
                "range": [
                  109,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              103,
              114
            ],
            "loc": {
              "end": {
                "column": 15,
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
              "name": "cb",
              "optional": false,
              "range": [
                119,
                121
              ],
              "loc": {
                "end": {
                  "column": 6,
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
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              },
              "range": [
                121,
                142
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 8
                        },
                        "start": {
                          "column": 10,
                          "line": 8
                        }
                      },
                      "range": [
                        125,
                        133
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          127,
                          133
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
                      }
                    },
                    "range": [
                      124,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  },
                  "range": [
                    135,
                    142
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      138,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  123,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              119,
              143
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          97,
          145
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 25,
            "line": 6
          }
        }
      },
      "range": [
        72,
        145
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "range": [
          152,
          170
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
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
              "name": "disc",
              "optional": false,
              "range": [
                179,
                183
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              },
              "range": [
                184,
                191
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    186,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                },
                "range": [
                  186,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              179,
              192
            ],
            "loc": {
              "end": {
                "column": 17,
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
              "name": "cb",
              "optional": false,
              "range": [
                197,
                199
              ],
              "loc": {
                "end": {
                  "column": 6,
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
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                199,
                220
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      },
                      "range": [
                        203,
                        211
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          205,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      202,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 20,
                      "line": 13
                    }
                  },
                  "range": [
                    213,
                    220
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      216,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  201,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              197,
              221
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          173,
          223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 26,
            "line": 11
          }
        }
      },
      "range": [
        147,
        223
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          230,
          235
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorTrue",
              "optional": false,
              "range": [
                238,
                255
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "range": [
              238,
              255
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 13,
                "line": 16
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "range": [
                258,
                276
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 16
                },
                "start": {
                  "column": 33,
                  "line": 16
                }
              }
            },
            "range": [
              258,
              276
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 16
              },
              "start": {
                "column": 33,
                "line": 16
              }
            }
          }
        ],
        "range": [
          238,
          276
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 16
          },
          "start": {
            "column": 13,
            "line": 16
          }
        }
      },
      "range": [
        225,
        277
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "range": [
          296,
          300
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
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
                "column": 67,
                "line": 18
              },
              "start": {
                "column": 27,
                "line": 18
              }
            },
            "range": [
              306,
              346
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "range": [
                      308,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    308,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 18
                    },
                    "start": {
                      "column": 29,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorFalse",
                    "optional": false,
                    "range": [
                      328,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 18
                      },
                      "start": {
                        "column": 49,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    328,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 18
                    },
                    "start": {
                      "column": 49,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                308,
                346
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 18
                },
                "start": {
                  "column": 29,
                  "line": 18
                }
              }
            }
          },
          "range": [
            301,
            346
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 18
            },
            "start": {
              "column": 22,
              "line": 18
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 81,
            "line": 18
          },
          "start": {
            "column": 68,
            "line": 18
          }
        },
        "range": [
          347,
          360
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                349,
                352
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 18
                },
                "start": {
                  "column": 70,
                  "line": 18
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                353,
                360
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 18
                },
                "start": {
                  "column": 74,
                  "line": 18
                }
              }
            },
            "range": [
              349,
              360
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 18
              },
              "start": {
                "column": 70,
                "line": 18
              }
            }
          },
          "range": [
            349,
            360
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 18
            },
            "start": {
              "column": 70,
              "line": 18
            }
          }
        }
      },
      "range": [
        279,
        361
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              389,
              424
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "range": [
                    395,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                },
                "value": null,
                "range": [
                  395,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "range": [
                    400,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 17,
                      "line": 21
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
                          "name": "s",
                          "optional": false,
                          "range": [
                            418,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 21
                            },
                            "start": {
                              "column": 35,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parseInt",
                        "optional": false,
                        "range": [
                          409,
                          417
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 21
                          },
                          "start": {
                            "column": 26,
                            "line": 21
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        409,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 21
                        },
                        "start": {
                          "column": 26,
                          "line": 21
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
                        "name": "s",
                        "optional": false,
                        "range": [
                          404,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 21
                          },
                          "start": {
                            "column": 21,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      404,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    403,
                    421
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  }
                },
                "range": [
                  400,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "range": [
                390,
                394
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              }
            },
            "selfClosing": true,
            "loc": {
              "end": {
                "column": 41,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "range": [
            389,
            424
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          383,
          425
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        383,
        426
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              454,
              497
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "range": [
                    460,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
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
                      466,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    465,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 17,
                      "line": 24
                    }
                  }
                },
                "range": [
                  460,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 24
                  },
                  "start": {
                    "column": 12,
                    "line": 24
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "range": [
                    473,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 24
                    },
                    "start": {
                      "column": 25,
                      "line": 24
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            482,
                            483
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 24
                            },
                            "start": {
                              "column": 34,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "range": [
                            484,
                            491
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 24
                            },
                            "start": {
                              "column": 36,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          482,
                          491
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 24
                          },
                          "start": {
                            "column": 34,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        482,
                        493
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 24
                        },
                        "start": {
                          "column": 34,
                          "line": 24
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          477,
                          478
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 24
                          },
                          "start": {
                            "column": 29,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      477,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 24
                      },
                      "start": {
                        "column": 29,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    476,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 24
                    },
                    "start": {
                      "column": 28,
                      "line": 24
                    }
                  }
                },
                "range": [
                  473,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 24
                  },
                  "start": {
                    "column": 25,
                    "line": 24
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "range": [
                455,
                459
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 24
                },
                "start": {
                  "column": 7,
                  "line": 24
                }
              }
            },
            "selfClosing": true,
            "loc": {
              "end": {
                "column": 49,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "range": [
            454,
            497
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          448,
          498
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        448,
        499
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              563,
              610
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "range": [
                    569,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      575,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 27
                      },
                      "start": {
                        "column": 18,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    574,
                    585
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 17,
                      "line": 27
                    }
                  }
                },
                "range": [
                  569,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 27
                  },
                  "start": {
                    "column": 12,
                    "line": 27
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "range": [
                    586,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 27
                    },
                    "start": {
                      "column": 29,
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            595,
                            596
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 27
                            },
                            "start": {
                              "column": 38,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "range": [
                            597,
                            604
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 27
                            },
                            "start": {
                              "column": 40,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          595,
                          604
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 27
                          },
                          "start": {
                            "column": 38,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        595,
                        606
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 27
                        },
                        "start": {
                          "column": 38,
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          590,
                          591
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 27
                          },
                          "start": {
                            "column": 33,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "range": [
                      590,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 27
                      },
                      "start": {
                        "column": 33,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    589,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 27
                    },
                    "start": {
                      "column": 32,
                      "line": 27
                    }
                  }
                },
                "range": [
                  586,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "range": [
                564,
                568
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 7,
                  "line": 27
                }
              }
            },
            "selfClosing": true,
            "loc": {
              "end": {
                "column": 53,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "range": [
            563,
            610
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          557,
          611
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        557,
        612
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              701,
              731
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "range": [
                    707,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 30
                    },
                    "start": {
                      "column": 12,
                      "line": 30
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            716,
                            717
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 30
                            },
                            "start": {
                              "column": 21,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "range": [
                            718,
                            725
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 30
                            },
                            "start": {
                              "column": 23,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          716,
                          725
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 30
                          },
                          "start": {
                            "column": 21,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        716,
                        727
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 30
                        },
                        "start": {
                          "column": 21,
                          "line": 30
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          711,
                          712
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 30
                          },
                          "start": {
                            "column": 16,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "range": [
                      711,
                      727
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 30
                      },
                      "start": {
                        "column": 16,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    710,
                    728
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 30
                    },
                    "start": {
                      "column": 15,
                      "line": 30
                    }
                  }
                },
                "range": [
                  707,
                  728
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 30
                  },
                  "start": {
                    "column": 12,
                    "line": 30
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "range": [
                702,
                706
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 30
                },
                "start": {
                  "column": 7,
                  "line": 30
                }
              }
            },
            "selfClosing": true,
            "loc": {
              "end": {
                "column": 36,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "range": [
            701,
            731
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          695,
          732
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        695,
        733
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
