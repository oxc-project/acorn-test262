__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    343
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          67,
          74
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              56,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        75
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  247,
                  340
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "range": [
                        257,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        263,
                        334
                      ],
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
                                  287,
                                  323
                                ],
                                "attributes": [
                                  {
                                    "type": "JSXSpreadAttribute",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          298,
                                          302
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 30,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "props",
                                        "optional": false,
                                        "range": [
                                          303,
                                          308
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "range": [
                                        298,
                                        308
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      294,
                                      309
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 7
                                      }
                                    }
                                  },
                                  {
                                    "type": "JSXAttribute",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "name",
                                      "range": [
                                        310,
                                        314
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "raw": "\"Matt\"",
                                      "value": "Matt",
                                      "range": [
                                        315,
                                        321
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      310,
                                      321
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 7
                                      }
                                    }
                                  }
                                ],
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "Inner",
                                  "range": [
                                    288,
                                    293
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 7
                                    }
                                  }
                                },
                                "selfClosing": true,
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                287,
                                323
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 7
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              280,
                              324
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          266,
                          334
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 14,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      257,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
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
                    "line": 9
                  },
                  "start": {
                    "column": 59,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "OuterComponent",
                "optional": false,
                "range": [
                  205,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "range": [
                    228,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 40,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "range": [
                    234,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 5
                    },
                    "start": {
                      "column": 46,
                      "line": 5
                    }
                  }
                },
                "range": [
                  228,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 5
                  },
                  "start": {
                    "column": 40,
                    "line": 5
                  }
                }
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  243,
                  246
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        244,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 5
                        },
                        "start": {
                          "column": 56,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      244,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 5
                      },
                      "start": {
                        "column": 56,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 5
                  },
                  "start": {
                    "column": 55,
                    "line": 5
                  }
                }
              },
              "range": [
                199,
                340
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              192,
              341
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          186,
          343
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 109,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myHigherOrderComponent",
        "optional": false,
        "range": [
          86,
          108
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Inner",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 82,
                "line": 4
              },
              "start": {
                "column": 40,
                "line": 4
              }
            },
            "range": [
              117,
              159
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  139,
                  159
                ],
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            140,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 4
                            },
                            "start": {
                              "column": 63,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          140,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 4
                          },
                          "start": {
                            "column": 63,
                            "line": 4
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
                              "name": "name",
                              "optional": false,
                              "range": [
                                145,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 4
                                },
                                "start": {
                                  "column": 68,
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
                                  "column": 80,
                                  "line": 4
                                },
                                "start": {
                                  "column": 72,
                                  "line": 4
                                }
                              },
                              "range": [
                                149,
                                157
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  151,
                                  157
                                ],
                                "loc": {
                                  "end": {
                                    "column": 80,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 74,
                                    "line": 4
                                  }
                                }
                              }
                            },
                            "range": [
                              145,
                              157
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 4
                              },
                              "start": {
                                "column": 68,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          144,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 4
                          },
                          "start": {
                            "column": 67,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      140,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 4
                      },
                      "start": {
                        "column": 63,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 4
                  },
                  "start": {
                    "column": 62,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "range": [
                    119,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 4
                    },
                    "start": {
                      "column": 42,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentClass",
                  "optional": false,
                  "range": [
                    125,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 4
                    },
                    "start": {
                      "column": 48,
                      "line": 4
                    }
                  }
                },
                "range": [
                  119,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              },
              "range": [
                119,
                159
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 4
                },
                "start": {
                  "column": 42,
                  "line": 4
                }
              }
            }
          },
          "range": [
            112,
            159
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 4
            },
            "start": {
              "column": 35,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 108,
            "line": 4
          },
          "start": {
            "column": 83,
            "line": 4
          }
        },
        "range": [
          160,
          185
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              182,
              185
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    183,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 4
                    },
                    "start": {
                      "column": 106,
                      "line": 4
                    }
                  }
                },
                "range": [
                  183,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 4
                  },
                  "start": {
                    "column": 106,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 108,
                "line": 4
              },
              "start": {
                "column": 105,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "range": [
                162,
                167
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 4
                },
                "start": {
                  "column": 85,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "range": [
                168,
                182
              ],
              "loc": {
                "end": {
                  "column": 105,
                  "line": 4
                },
                "start": {
                  "column": 91,
                  "line": 4
                }
              }
            },
            "range": [
              162,
              182
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 4
              },
              "start": {
                "column": 85,
                "line": 4
              }
            }
          },
          "range": [
            162,
            185
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 4
            },
            "start": {
              "column": 85,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 4
          }
        },
        "range": [
          108,
          111
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                109,
                110
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              109,
              110
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        77,
        343
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
