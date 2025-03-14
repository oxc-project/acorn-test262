__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    637
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Map",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              11,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          },
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                33,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "range": [
              16,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "range": [
          11,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
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
        "name": "MapOrUndefined",
        "optional": false,
        "range": [
          44,
          58
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
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
              "name": "Map",
              "optional": false,
              "range": [
                61,
                64
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "range": [
              61,
              64
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              67,
              76
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 2
              },
              "start": {
                "column": 28,
                "line": 2
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"dummy\"",
              "value": "dummy",
              "range": [
                79,
                86
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
            },
            "range": [
              79,
              86
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
        ],
        "range": [
          61,
          86
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 2
          },
          "start": {
            "column": 22,
            "line": 2
          }
        }
      },
      "range": [
        39,
        86
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        87,
        359
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            104,
            359
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  108,
                  119
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 4
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  119,
                  357
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    354,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reuseTypeNode",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 6
                          },
                          "start": {
                            "column": 25,
                            "line": 6
                          }
                        },
                        "range": [
                          185,
                          202
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Map",
                                "optional": false,
                                "range": [
                                  187,
                                  190
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                187,
                                190
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 6
                                },
                                "start": {
                                  "column": 27,
                                  "line": 6
                                }
                              }
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "range": [
                                193,
                                202
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 6
                                },
                                "start": {
                                  "column": 33,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            187,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 6
                            },
                            "start": {
                              "column": 27,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        171,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      164,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reuseTypeNode2",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 7
                          },
                          "start": {
                            "column": 26,
                            "line": 7
                          }
                        },
                        "range": [
                          230,
                          264
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              239,
                              264
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "MapOrUndefined",
                                  "optional": false,
                                  "range": [
                                    240,
                                    254
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  240,
                                  254
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 7
                                  }
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "\"dummy\"",
                                  "value": "dummy",
                                  "range": [
                                    256,
                                    263
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  256,
                                  263
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 7
                              },
                              "start": {
                                "column": 35,
                                "line": 7
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "range": [
                              232,
                              239
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 7
                              },
                              "start": {
                                "column": 28,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            232,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 7
                            },
                            "start": {
                              "column": 28,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        215,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      208,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolveType",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 23,
                            "line": 9
                          }
                        },
                        "range": [
                          343,
                          348
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Map",
                            "optional": false,
                            "range": [
                              345,
                              348
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 9
                              },
                              "start": {
                                "column": 25,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            345,
                            348
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 9
                            },
                            "start": {
                              "column": 25,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        331,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      324,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 4,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "range": [
                108,
                357
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            100,
            103
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
        "implements": [],
        "superClass": null,
        "range": [
          94,
          359
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
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
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        361,
        636
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            632,
            636
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 27,
              "line": 19
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            377,
            381
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 16,
              "line": 13
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "reuseTypeNode",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                },
                "range": [
                  439,
                  456
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "range": [
                          441,
                          444
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 15
                          },
                          "start": {
                            "column": 19,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        441,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        447,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 15
                        },
                        "start": {
                          "column": 25,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    441,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 15
                    },
                    "start": {
                      "column": 19,
                      "line": 15
                    }
                  }
                }
              },
              "range": [
                426,
                456
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                459,
                461
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 15
                },
                "start": {
                  "column": 37,
                  "line": 15
                }
              }
            },
            "range": [
              426,
              461
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "reuseTypeNode2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                },
                "range": [
                  481,
                  515
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      490,
                      515
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MapOrUndefined",
                          "optional": false,
                          "range": [
                            491,
                            505
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 16
                            },
                            "start": {
                              "column": 28,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          491,
                          505
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 16
                          },
                          "start": {
                            "column": 28,
                            "line": 16
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"dummy\"",
                          "value": "dummy",
                          "range": [
                            507,
                            514
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 16
                            },
                            "start": {
                              "column": 44,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          507,
                          514
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 16
                          },
                          "start": {
                            "column": 44,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 16
                      },
                      "start": {
                        "column": 27,
                        "line": 16
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "range": [
                      483,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 20,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    483,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                }
              },
              "range": [
                467,
                515
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                519,
                521
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 16
                },
                "start": {
                  "column": 56,
                  "line": 16
                }
              }
            },
            "range": [
              467,
              521
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolveType",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 18
                  },
                  "start": {
                    "column": 15,
                    "line": 18
                  }
                },
                "range": [
                  592,
                  597
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "range": [
                      594,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    594,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                }
              },
              "range": [
                581,
                597
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                600,
                602
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 18
                },
                "start": {
                  "column": 23,
                  "line": 18
                }
              }
            },
            "range": [
              581,
              602
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "requiredParam",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              },
              "range": [
                622,
                630
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  624,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              609,
              630
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          368,
          636
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 13
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
      "line": 1
    }
  },
  "hashbang": null
}
```
