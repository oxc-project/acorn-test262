__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    511
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false,
                    "range": [
                      121,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
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
                                  276,
                                  279
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 11
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IntrinsicElements",
                                "optional": false,
                                "range": [
                                  280,
                                  297
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                276,
                                297
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 11
                                },
                                "start": {
                                  "column": 14,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              276,
                              297
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 11
                              },
                              "start": {
                                "column": 14,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            270,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSMappedType",
                          "constraint": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
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
                                    174,
                                    177
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 8
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IntrinsicElements",
                                  "optional": false,
                                  "range": [
                                    178,
                                    195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  174,
                                  195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                174,
                                195
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 8
                                },
                                "start": {
                                  "column": 20,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              168,
                              195
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 8
                              },
                              "start": {
                                "column": 14,
                                "line": 8
                              }
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              163,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 8
                              },
                              "start": {
                                "column": 9,
                                "line": 8
                              }
                            }
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "range": [
                                  198,
                                  199
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                198,
                                199
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 8
                                },
                                "start": {
                                  "column": 44,
                                  "line": 8
                                }
                              }
                            },
                            "extendsType": {
                              "type": "TSIndexedAccessType",
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "range": [
                                    230,
                                    231
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 77,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 76,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  230,
                                  231
                                ],
                                "loc": {
                                  "end": {
                                    "column": 77,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 76,
                                    "line": 8
                                  }
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "range": [
                                      208,
                                      211
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false,
                                    "range": [
                                      212,
                                      229
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 75,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 58,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    208,
                                    229
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  208,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                208,
                                232
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 8
                                },
                                "start": {
                                  "column": 54,
                                  "line": 8
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                255,
                                260
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 10
                                },
                                "start": {
                                  "column": 10,
                                  "line": 10
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "range": [
                                  243,
                                  244
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                243,
                                244
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 9
                                },
                                "start": {
                                  "column": 10,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              198,
                              260
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 10
                              },
                              "start": {
                                "column": 44,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            152,
                            269
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          152,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            326,
                            329
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
                                  327,
                                  328
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                327,
                                328
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 12
                                },
                                "start": {
                                  "column": 28,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 12
                            },
                            "start": {
                              "column": 27,
                              "line": 12
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
                              307,
                              312
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 12
                              },
                              "start": {
                                "column": 8,
                                "line": 12
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ComponentType",
                            "optional": false,
                            "range": [
                              313,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 12
                              },
                              "start": {
                                "column": 14,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            307,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          307,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
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
                      150,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 12
                      },
                      "start": {
                        "column": 6,
                        "line": 7
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    },
                    "range": [
                      132,
                      141
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "default": {
                          "type": "TSAnyKeyword",
                          "range": [
                            137,
                            140
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 25,
                              "line": 6
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            133,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          133,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 21,
                            "line": 6
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    116,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                110,
                334
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                106,
                109
              ],
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "kind": "namespace",
            "range": [
              96,
              334
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "range": [
          92,
          336
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          85,
          91
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 4
          },
          "start": {
            "column": 8,
            "line": 4
          }
        }
      },
      "kind": "global",
      "range": [
        77,
        336
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 4
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
            "range": [
              390,
              391
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                394,
                401
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "range": [
                  395,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "range": [
              394,
              401
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "range": [
            390,
            401
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        386,
        402
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "c",
            "optional": false,
            "range": [
              495,
              496
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                499,
                509
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "ruhroh",
                "range": [
                  500,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 18,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              499,
              509
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            495,
            509
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        491,
        510
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
