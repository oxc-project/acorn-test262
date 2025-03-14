__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    9061
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          22
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "range": [
          6,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
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
        24,
        52
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            49,
            52
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "range": [
            37,
            48
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          31,
          52
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        54,
        154
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            111,
            154
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myProperty",
                "optional": false,
                "range": [
                  117,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                },
                "range": [
                  127,
                  141
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      129,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    129,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                117,
                142
              ],
              "loc": {
                "end": {
                  "column": 29,
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
              "column": 57,
              "line": 7
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivatePropertyTypes",
          "optional": false,
          "range": [
            71,
            110
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "range": [
          61,
          154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        156,
        244
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            212,
            244
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myProperty",
                "optional": false,
                "range": [
                  218,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
                    "column": 27,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                },
                "range": [
                  228,
                  241
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      230,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    230,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                218,
                242
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 56,
              "line": 11
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicPropertyTypes",
          "optional": false,
          "range": [
            173,
            211
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "range": [
          163,
          244
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          297,
          330
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProperty",
              "optional": false,
              "range": [
                303,
                313
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 14,
                  "line": 16
                }
              },
              "range": [
                313,
                327
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    315,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
                    }
                  }
                },
                "range": [
                  315,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 16
                  },
                  "start": {
                    "column": 16,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              303,
              328
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 51,
            "line": 15
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivatePropertyTypes",
        "optional": false,
        "range": [
          256,
          296
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        246,
        330
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          382,
          414
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProperty",
              "optional": false,
              "range": [
                388,
                398
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              },
              "range": [
                398,
                411
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    400,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                },
                "range": [
                  400,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              388,
              412
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 50,
            "line": 19
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicPropertyTypes",
        "optional": false,
        "range": [
          342,
          381
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 19
          },
          "start": {
            "column": 10,
            "line": 19
          }
        }
      },
      "range": [
        332,
        414
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        416,
        678
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            469,
            678
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticProperty",
                "optional": false,
                "range": [
                  482,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 24
                  },
                  "start": {
                    "column": 33,
                    "line": 24
                  }
                },
                "range": [
                  504,
                  518
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      506,
                      518
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 24
                      },
                      "start": {
                        "column": 35,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    506,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 24
                    },
                    "start": {
                      "column": 35,
                      "line": 24
                    }
                  }
                }
              },
              "value": null,
              "range": [
                475,
                519
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticProperty",
                "optional": false,
                "range": [
                  548,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 25
                  },
                  "start": {
                    "column": 19,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 25
                  },
                  "start": {
                    "column": 42,
                    "line": 25
                  }
                },
                "range": [
                  571,
                  585
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      573,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 25
                      },
                      "start": {
                        "column": 44,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    573,
                    585
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 25
                    },
                    "start": {
                      "column": 44,
                      "line": 25
                    }
                  }
                }
              },
              "value": null,
              "range": [
                533,
                586
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "range": [
                  591,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                },
                "range": [
                  607,
                  621
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      609,
                      621
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 26
                      },
                      "start": {
                        "column": 22,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    609,
                    621
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 26
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  }
                }
              },
              "value": null,
              "range": [
                591,
                622
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateProperty",
                "optional": false,
                "range": [
                  644,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 12,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                },
                "range": [
                  661,
                  675
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      663,
                      675
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 27
                      },
                      "start": {
                        "column": 31,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    663,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 27
                    },
                    "start": {
                      "column": 31,
                      "line": 27
                    }
                  }
                }
              },
              "value": null,
              "range": [
                636,
                676
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 53,
              "line": 23
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivatePropertyTypes",
          "optional": false,
          "range": [
            429,
            468
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 23
            },
            "start": {
              "column": 13,
              "line": 23
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          423,
          678
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        680,
        919
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            732,
            919
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticProperty",
                "optional": false,
                "range": [
                  745,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 31
                  },
                  "start": {
                    "column": 33,
                    "line": 31
                  }
                },
                "range": [
                  767,
                  780
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      769,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 31
                      },
                      "start": {
                        "column": 35,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    769,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 31
                    },
                    "start": {
                      "column": 35,
                      "line": 31
                    }
                  }
                }
              },
              "value": null,
              "range": [
                738,
                781
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticProperty",
                "optional": false,
                "range": [
                  801,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 32
                  },
                  "start": {
                    "column": 19,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 32
                  },
                  "start": {
                    "column": 42,
                    "line": 32
                  }
                },
                "range": [
                  824,
                  837
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      826,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 32
                      },
                      "start": {
                        "column": 44,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    826,
                    837
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 32
                    },
                    "start": {
                      "column": 44,
                      "line": 32
                    }
                  }
                }
              },
              "value": null,
              "range": [
                786,
                838
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "range": [
                  843,
                  859
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
                  }
                },
                "range": [
                  859,
                  872
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      861,
                      872
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 33
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    861,
                    872
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 33
                    },
                    "start": {
                      "column": 22,
                      "line": 33
                    }
                  }
                }
              },
              "value": null,
              "range": [
                843,
                873
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateProperty",
                "optional": false,
                "range": [
                  886,
                  903
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 34
                  },
                  "start": {
                    "column": 29,
                    "line": 34
                  }
                },
                "range": [
                  903,
                  916
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      905,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 34
                      },
                      "start": {
                        "column": 31,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    905,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 34
                    },
                    "start": {
                      "column": 31,
                      "line": 34
                    }
                  }
                }
              },
              "value": null,
              "range": [
                878,
                917
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 52,
              "line": 30
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicPropertyTypes",
          "optional": false,
          "range": [
            693,
            731
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 30
            },
            "start": {
              "column": 13,
              "line": 30
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          687,
          919
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          968,
          1159
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "range": [
                981,
                1003
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 38
                },
                "start": {
                  "column": 33,
                  "line": 38
                }
              },
              "range": [
                1003,
                1017
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    1005,
                    1017
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 38
                    },
                    "start": {
                      "column": 35,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1005,
                  1017
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 38
                  },
                  "start": {
                    "column": 35,
                    "line": 38
                  }
                }
              }
            },
            "value": null,
            "range": [
              974,
              1018
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "range": [
                1038,
                1061
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 39
                },
                "start": {
                  "column": 19,
                  "line": 39
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 39
                },
                "start": {
                  "column": 42,
                  "line": 39
                }
              },
              "range": [
                1061,
                1075
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    1063,
                    1075
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 39
                    },
                    "start": {
                      "column": 44,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1063,
                  1075
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 39
                  },
                  "start": {
                    "column": 44,
                    "line": 39
                  }
                }
              }
            },
            "value": null,
            "range": [
              1023,
              1076
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "range": [
                1081,
                1097
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 40
                },
                "start": {
                  "column": 20,
                  "line": 40
                }
              },
              "range": [
                1097,
                1111
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    1099,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 40
                    },
                    "start": {
                      "column": 22,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1099,
                  1111
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 40
                  },
                  "start": {
                    "column": 22,
                    "line": 40
                  }
                }
              }
            },
            "value": null,
            "range": [
              1081,
              1112
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "range": [
                1125,
                1142
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 41
                },
                "start": {
                  "column": 12,
                  "line": 41
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 41
                },
                "start": {
                  "column": 29,
                  "line": 41
                }
              },
              "range": [
                1142,
                1156
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    1144,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 41
                    },
                    "start": {
                      "column": 31,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1144,
                  1156
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 41
                  },
                  "start": {
                    "column": 31,
                    "line": 41
                  }
                }
              }
            },
            "value": null,
            "range": [
              1117,
              1157
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 47,
            "line": 37
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivatePropertyTypes",
        "optional": false,
        "range": [
          927,
          967
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 37
          },
          "start": {
            "column": 6,
            "line": 37
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        921,
        1159
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1207,
          1394
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "range": [
                1220,
                1242
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 45
                },
                "start": {
                  "column": 33,
                  "line": 45
                }
              },
              "range": [
                1242,
                1255
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1244,
                    1255
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 45
                    },
                    "start": {
                      "column": 35,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1244,
                  1255
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 45
                  },
                  "start": {
                    "column": 35,
                    "line": 45
                  }
                }
              }
            },
            "value": null,
            "range": [
              1213,
              1256
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "range": [
                1276,
                1299
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 46
                },
                "start": {
                  "column": 19,
                  "line": 46
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 46
                },
                "start": {
                  "column": 42,
                  "line": 46
                }
              },
              "range": [
                1299,
                1312
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1301,
                    1312
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 46
                    },
                    "start": {
                      "column": 44,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1301,
                  1312
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 46
                  },
                  "start": {
                    "column": 44,
                    "line": 46
                  }
                }
              }
            },
            "value": null,
            "range": [
              1261,
              1313
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "range": [
                1318,
                1334
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 47
                },
                "start": {
                  "column": 20,
                  "line": 47
                }
              },
              "range": [
                1334,
                1347
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1336,
                    1347
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 47
                    },
                    "start": {
                      "column": 22,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1336,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 47
                  },
                  "start": {
                    "column": 22,
                    "line": 47
                  }
                }
              }
            },
            "value": null,
            "range": [
              1318,
              1348
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "range": [
                1361,
                1378
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 48
                },
                "start": {
                  "column": 29,
                  "line": 48
                }
              },
              "range": [
                1378,
                1391
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1380,
                    1391
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 48
                    },
                    "start": {
                      "column": 31,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1380,
                  1391
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 48
                  },
                  "start": {
                    "column": 31,
                    "line": 48
                  }
                }
              }
            },
            "value": null,
            "range": [
              1353,
              1392
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 46,
            "line": 44
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicPropertyTypes",
        "optional": false,
        "range": [
          1167,
          1206
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 44
          },
          "start": {
            "column": 6,
            "line": 44
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1161,
        1394
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1396,
        1455
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
              "name": "publicVarWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 51
                  },
                  "start": {
                    "column": 44,
                    "line": 51
                  }
                },
                "range": [
                  1440,
                  1454
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      1442,
                      1454
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 51
                      },
                      "start": {
                        "column": 46,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1442,
                    1454
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 51
                    },
                    "start": {
                      "column": 46,
                      "line": 51
                    }
                  }
                }
              },
              "range": [
                1407,
                1454
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "init": null,
            "range": [
              1407,
              1454
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 51
              },
              "start": {
                "column": 11,
                "line": 51
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1403,
          1455
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 51
          },
          "start": {
            "column": 7,
            "line": 51
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 59,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1465,
        1522
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
              "name": "publicVarWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 52
                  },
                  "start": {
                    "column": 43,
                    "line": 52
                  }
                },
                "range": [
                  1508,
                  1521
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      1510,
                      1521
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 52
                      },
                      "start": {
                        "column": 45,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1510,
                    1521
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 52
                    },
                    "start": {
                      "column": 45,
                      "line": 52
                    }
                  }
                }
              },
              "range": [
                1476,
                1521
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 52
                },
                "start": {
                  "column": 11,
                  "line": 52
                }
              }
            },
            "init": null,
            "range": [
              1476,
              1521
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 52
              },
              "start": {
                "column": 11,
                "line": 52
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1472,
          1522
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 52
          },
          "start": {
            "column": 7,
            "line": 52
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 57,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "privateVarWithPrivatePropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 53
                },
                "start": {
                  "column": 38,
                  "line": 53
                }
              },
              "range": [
                1561,
                1575
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    1563,
                    1575
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 53
                    },
                    "start": {
                      "column": 40,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1563,
                  1575
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 53
                  },
                  "start": {
                    "column": 40,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              1527,
              1575
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "init": null,
          "range": [
            1527,
            1575
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1523,
        1576
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "name": "privateVarWithPublicPropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 54
                },
                "start": {
                  "column": 37,
                  "line": 54
                }
              },
              "range": [
                1614,
                1627
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1616,
                    1627
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 54
                    },
                    "start": {
                      "column": 39,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1616,
                  1627
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 54
                  },
                  "start": {
                    "column": 39,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1581,
              1627
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "init": null,
          "range": [
            1581,
            1627
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 54
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1577,
        1628
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1630,
        1704
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
              "name": "publicAmbientVarWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 56
                  },
                  "start": {
                    "column": 59,
                    "line": 56
                  }
                },
                "range": [
                  1689,
                  1703
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      1691,
                      1703
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 56
                      },
                      "start": {
                        "column": 61,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1691,
                    1703
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 56
                    },
                    "start": {
                      "column": 61,
                      "line": 56
                    }
                  }
                }
              },
              "range": [
                1649,
                1703
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 56
                },
                "start": {
                  "column": 19,
                  "line": 56
                }
              }
            },
            "init": null,
            "range": [
              1649,
              1703
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 56
              },
              "start": {
                "column": 19,
                "line": 56
              }
            }
          }
        ],
        "declare": true,
        "kind": "var",
        "range": [
          1637,
          1704
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 56
          },
          "start": {
            "column": 7,
            "line": 56
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 74,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1714,
        1786
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
              "name": "publicAmbientVarWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 57
                  },
                  "start": {
                    "column": 58,
                    "line": 57
                  }
                },
                "range": [
                  1772,
                  1785
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      1774,
                      1785
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 57
                      },
                      "start": {
                        "column": 60,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1774,
                    1785
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 57
                    },
                    "start": {
                      "column": 60,
                      "line": 57
                    }
                  }
                }
              },
              "range": [
                1733,
                1785
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 57
                },
                "start": {
                  "column": 19,
                  "line": 57
                }
              }
            },
            "init": null,
            "range": [
              1733,
              1785
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 57
              },
              "start": {
                "column": 19,
                "line": 57
              }
            }
          }
        ],
        "declare": true,
        "kind": "var",
        "range": [
          1721,
          1786
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 57
          },
          "start": {
            "column": 7,
            "line": 57
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 72,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "privateAmbientVarWithPrivatePropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 58
                },
                "start": {
                  "column": 53,
                  "line": 58
                }
              },
              "range": [
                1840,
                1854
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    1842,
                    1854
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 58
                    },
                    "start": {
                      "column": 55,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1842,
                  1854
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 58
                  },
                  "start": {
                    "column": 55,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              1799,
              1854
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 58
              },
              "start": {
                "column": 12,
                "line": 58
              }
            }
          },
          "init": null,
          "range": [
            1799,
            1854
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 58
            },
            "start": {
              "column": 12,
              "line": 58
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1787,
        1855
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "privateAmbientVarWithPublicPropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 59
                },
                "start": {
                  "column": 52,
                  "line": 59
                }
              },
              "range": [
                1908,
                1921
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    1910,
                    1921
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 59
                    },
                    "start": {
                      "column": 54,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1910,
                  1921
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 59
                  },
                  "start": {
                    "column": 54,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1868,
              1921
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 59
              },
              "start": {
                "column": 12,
                "line": 59
              }
            }
          },
          "init": null,
          "range": [
            1868,
            1921
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 59
            },
            "start": {
              "column": 12,
              "line": 59
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1856,
        1922
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1924,
        2042
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            1987,
            2042
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myProperty",
                "optional": false,
                "range": [
                  1993,
                  2003
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
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
                    "column": 41,
                    "line": 62
                  },
                  "start": {
                    "column": 14,
                    "line": 62
                  }
                },
                "range": [
                  2003,
                  2030
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "range": [
                        2005,
                        2018
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 62
                        },
                        "start": {
                          "column": 16,
                          "line": 62
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        2019,
                        2030
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 62
                        },
                        "start": {
                          "column": 30,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      2005,
                      2030
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 62
                      },
                      "start": {
                        "column": 16,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    2005,
                    2030
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 62
                    },
                    "start": {
                      "column": 16,
                      "line": 62
                    }
                  }
                }
              },
              "range": [
                1993,
                2031
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 63
            },
            "start": {
              "column": 63,
              "line": 61
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateModulePropertyTypes",
          "optional": false,
          "range": [
            1941,
            1986
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 61
            },
            "start": {
              "column": 17,
              "line": 61
            }
          }
        },
        "range": [
          1931,
          2042
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 7,
            "line": 61
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2043,
        2230
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            2098,
            2230
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticProperty",
                "optional": false,
                "range": [
                  2111,
                  2133
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 65
                  },
                  "start": {
                    "column": 33,
                    "line": 65
                  }
                },
                "range": [
                  2133,
                  2160
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "range": [
                        2135,
                        2148
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 65
                        },
                        "start": {
                          "column": 35,
                          "line": 65
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        2149,
                        2160
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 65
                        },
                        "start": {
                          "column": 49,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      2135,
                      2160
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 65
                      },
                      "start": {
                        "column": 35,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    2135,
                    2160
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 65
                    },
                    "start": {
                      "column": 35,
                      "line": 65
                    }
                  }
                }
              },
              "value": null,
              "range": [
                2104,
                2161
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "range": [
                  2175,
                  2191
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 66
                  },
                  "start": {
                    "column": 20,
                    "line": 66
                  }
                },
                "range": [
                  2191,
                  2218
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "range": [
                        2193,
                        2206
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 66
                        },
                        "start": {
                          "column": 22,
                          "line": 66
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        2207,
                        2218
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 66
                        },
                        "start": {
                          "column": 36,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      2193,
                      2218
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 66
                      },
                      "start": {
                        "column": 22,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    2193,
                    2218
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 66
                    },
                    "start": {
                      "column": 22,
                      "line": 66
                    }
                  }
                }
              },
              "value": null,
              "range": [
                2175,
                2219
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 67
            },
            "start": {
              "column": 55,
              "line": 64
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateModulePropertyTypes",
          "optional": false,
          "range": [
            2056,
            2097
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 64
            },
            "start": {
              "column": 13,
              "line": 64
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          2050,
          2230
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 7,
            "line": 64
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2231,
        2309
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
              "name": "publicVarWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 68
                  },
                  "start": {
                    "column": 50,
                    "line": 68
                  }
                },
                "range": [
                  2281,
                  2308
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "range": [
                        2283,
                        2296
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 68
                        },
                        "start": {
                          "column": 52,
                          "line": 68
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        2297,
                        2308
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 68
                        },
                        "start": {
                          "column": 66,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      2283,
                      2308
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 68
                      },
                      "start": {
                        "column": 52,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    2283,
                    2308
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 68
                    },
                    "start": {
                      "column": 52,
                      "line": 68
                    }
                  }
                }
              },
              "range": [
                2242,
                2308
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 68
                },
                "start": {
                  "column": 11,
                  "line": 68
                }
              }
            },
            "init": null,
            "range": [
              2242,
              2308
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 68
              },
              "start": {
                "column": 11,
                "line": 68
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          2238,
          2309
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 68
          },
          "start": {
            "column": 7,
            "line": 68
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 78,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2319,
        2412
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
              "name": "publicAmbientVarWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 69
                  },
                  "start": {
                    "column": 65,
                    "line": 69
                  }
                },
                "range": [
                  2384,
                  2411
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "range": [
                        2386,
                        2399
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 69
                        },
                        "start": {
                          "column": 67,
                          "line": 69
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        2400,
                        2411
                      ],
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 69
                        },
                        "start": {
                          "column": 81,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      2386,
                      2411
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 69
                      },
                      "start": {
                        "column": 67,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    2386,
                    2411
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 69
                    },
                    "start": {
                      "column": 67,
                      "line": 69
                    }
                  }
                }
              },
              "range": [
                2338,
                2411
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 69
                },
                "start": {
                  "column": 19,
                  "line": 69
                }
              }
            },
            "init": null,
            "range": [
              2338,
              2411
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 69
              },
              "start": {
                "column": 19,
                "line": 69
              }
            }
          }
        ],
        "declare": true,
        "kind": "var",
        "range": [
          2326,
          2412
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 69
          },
          "start": {
            "column": 7,
            "line": 69
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 93,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2480,
          2526
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProperty",
              "optional": false,
              "range": [
                2486,
                2496
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
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
                  "column": 41,
                  "line": 72
                },
                "start": {
                  "column": 14,
                  "line": 72
                }
              },
              "range": [
                2496,
                2523
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "range": [
                      2498,
                      2511
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 72
                      },
                      "start": {
                        "column": 16,
                        "line": 72
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      2512,
                      2523
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 72
                      },
                      "start": {
                        "column": 30,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    2498,
                    2523
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 72
                    },
                    "start": {
                      "column": 16,
                      "line": 72
                    }
                  }
                },
                "range": [
                  2498,
                  2523
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 72
                  },
                  "start": {
                    "column": 16,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              2486,
              2524
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 57,
            "line": 71
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateModulePropertyTypes",
        "optional": false,
        "range": [
          2433,
          2479
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 71
          },
          "start": {
            "column": 10,
            "line": 71
          }
        }
      },
      "range": [
        2423,
        2526
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2576,
          2690
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "range": [
                2589,
                2611
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 75
                },
                "start": {
                  "column": 11,
                  "line": 75
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 60,
                  "line": 75
                },
                "start": {
                  "column": 33,
                  "line": 75
                }
              },
              "range": [
                2611,
                2638
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "range": [
                      2613,
                      2626
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 75
                      },
                      "start": {
                        "column": 35,
                        "line": 75
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      2627,
                      2638
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 75
                      },
                      "start": {
                        "column": 49,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    2613,
                    2638
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 75
                    },
                    "start": {
                      "column": 35,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2613,
                  2638
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 75
                  },
                  "start": {
                    "column": 35,
                    "line": 75
                  }
                }
              }
            },
            "value": null,
            "range": [
              2582,
              2639
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "range": [
                2644,
                2660
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 76
                },
                "start": {
                  "column": 20,
                  "line": 76
                }
              },
              "range": [
                2660,
                2687
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "range": [
                      2662,
                      2675
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 76
                      },
                      "start": {
                        "column": 22,
                        "line": 76
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      2676,
                      2687
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 76
                      },
                      "start": {
                        "column": 36,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    2662,
                    2687
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 76
                    },
                    "start": {
                      "column": 22,
                      "line": 76
                    }
                  }
                },
                "range": [
                  2662,
                  2687
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 76
                  },
                  "start": {
                    "column": 22,
                    "line": 76
                  }
                }
              }
            },
            "value": null,
            "range": [
              2644,
              2688
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 49,
            "line": 74
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateModulePropertyTypes",
        "optional": false,
        "range": [
          2533,
          2575
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 74
          },
          "start": {
            "column": 6,
            "line": 74
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2527,
        2690
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 74
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
            "name": "privateVarWithPrivateModulePropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 78
                },
                "start": {
                  "column": 44,
                  "line": 78
                }
              },
              "range": [
                2735,
                2762
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "range": [
                      2737,
                      2750
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 78
                      },
                      "start": {
                        "column": 46,
                        "line": 78
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      2751,
                      2762
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 78
                      },
                      "start": {
                        "column": 60,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    2737,
                    2762
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 78
                    },
                    "start": {
                      "column": 46,
                      "line": 78
                    }
                  }
                },
                "range": [
                  2737,
                  2762
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 78
                  },
                  "start": {
                    "column": 46,
                    "line": 78
                  }
                }
              }
            },
            "range": [
              2695,
              2762
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          "init": null,
          "range": [
            2695,
            2762
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 78
            },
            "start": {
              "column": 4,
              "line": 78
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2691,
        2763
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
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
            "name": "privateAmbientVarWithPrivateModulePropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 86,
                  "line": 79
                },
                "start": {
                  "column": 59,
                  "line": 79
                }
              },
              "range": [
                2823,
                2850
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "range": [
                      2825,
                      2838
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 79
                      },
                      "start": {
                        "column": 61,
                        "line": 79
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "range": [
                      2839,
                      2850
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 79
                      },
                      "start": {
                        "column": 75,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    2825,
                    2850
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 79
                    },
                    "start": {
                      "column": 61,
                      "line": 79
                    }
                  }
                },
                "range": [
                  2825,
                  2850
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 79
                  },
                  "start": {
                    "column": 61,
                    "line": 79
                  }
                }
              }
            },
            "range": [
              2776,
              2850
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 79
              },
              "start": {
                "column": 12,
                "line": 79
              }
            }
          },
          "init": null,
          "range": [
            2776,
            2850
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 79
            },
            "start": {
              "column": 12,
              "line": 79
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        2764,
        2851
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2853,
        5999
      ],
      "attributes": [],
      "declaration": {
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
                  2905,
                  2912
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 83
                  },
                  "start": {
                    "column": 23,
                    "line": 82
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "range": [
                  2892,
                  2904
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 82
                  },
                  "start": {
                    "column": 10,
                    "line": 82
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                2886,
                2912
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                2918,
                2950
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    2943,
                    2950
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 86
                    },
                    "start": {
                      "column": 29,
                      "line": 85
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    2931,
                    2942
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 85
                    },
                    "start": {
                      "column": 17,
                      "line": 85
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  2925,
                  2950
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 86
                  },
                  "start": {
                    "column": 11,
                    "line": 85
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                2956,
                3064
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    3013,
                    3064
                  ],
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myProperty",
                        "optional": false,
                        "range": [
                          3023,
                          3033
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 89
                          },
                          "start": {
                            "column": 8,
                            "line": 89
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
                            "column": 32,
                            "line": 89
                          },
                          "start": {
                            "column": 18,
                            "line": 89
                          }
                        },
                        "range": [
                          3033,
                          3047
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "range": [
                              3035,
                              3047
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 89
                              },
                              "start": {
                                "column": 20,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            3035,
                            3047
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 89
                            },
                            "start": {
                              "column": 20,
                              "line": 89
                            }
                          }
                        }
                      },
                      "range": [
                        3023,
                        3048
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 89
                        },
                        "start": {
                          "column": 8,
                          "line": 89
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 90
                    },
                    "start": {
                      "column": 61,
                      "line": 88
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivatePropertyTypes",
                  "optional": false,
                  "range": [
                    2973,
                    3012
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 88
                    },
                    "start": {
                      "column": 21,
                      "line": 88
                    }
                  }
                },
                "range": [
                  2963,
                  3064
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 90
                  },
                  "start": {
                    "column": 11,
                    "line": 88
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                3070,
                3166
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    3126,
                    3166
                  ],
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myProperty",
                        "optional": false,
                        "range": [
                          3136,
                          3146
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 93
                          },
                          "start": {
                            "column": 8,
                            "line": 93
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
                            "line": 93
                          },
                          "start": {
                            "column": 18,
                            "line": 93
                          }
                        },
                        "range": [
                          3146,
                          3159
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              3148,
                              3159
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 93
                              },
                              "start": {
                                "column": 20,
                                "line": 93
                              }
                            }
                          },
                          "range": [
                            3148,
                            3159
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 93
                            },
                            "start": {
                              "column": 20,
                              "line": 93
                            }
                          }
                        }
                      },
                      "range": [
                        3136,
                        3160
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 93
                        },
                        "start": {
                          "column": 8,
                          "line": 93
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 94
                    },
                    "start": {
                      "column": 60,
                      "line": 92
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicPropertyTypes",
                  "optional": false,
                  "range": [
                    3087,
                    3125
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 92
                    },
                    "start": {
                      "column": 21,
                      "line": 92
                    }
                  }
                },
                "range": [
                  3077,
                  3166
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 94
                  },
                  "start": {
                    "column": 11,
                    "line": 92
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  3223,
                  3264
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        3233,
                        3243
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 97
                        },
                        "start": {
                          "column": 8,
                          "line": 97
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
                          "column": 32,
                          "line": 97
                        },
                        "start": {
                          "column": 18,
                          "line": 97
                        }
                      },
                      "range": [
                        3243,
                        3257
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            3245,
                            3257
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 97
                            },
                            "start": {
                              "column": 20,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          3245,
                          3257
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 97
                          },
                          "start": {
                            "column": 20,
                            "line": 97
                          }
                        }
                      }
                    },
                    "range": [
                      3233,
                      3258
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 97
                      },
                      "start": {
                        "column": 8,
                        "line": 97
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 98
                  },
                  "start": {
                    "column": 55,
                    "line": 96
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "range": [
                  3182,
                  3222
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 96
                  },
                  "start": {
                    "column": 14,
                    "line": 96
                  }
                }
              },
              "range": [
                3172,
                3264
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  3320,
                  3360
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        3330,
                        3340
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 101
                        },
                        "start": {
                          "column": 8,
                          "line": 101
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
                          "line": 101
                        },
                        "start": {
                          "column": 18,
                          "line": 101
                        }
                      },
                      "range": [
                        3340,
                        3353
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            3342,
                            3353
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 101
                            },
                            "start": {
                              "column": 20,
                              "line": 101
                            }
                          }
                        },
                        "range": [
                          3342,
                          3353
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 101
                          },
                          "start": {
                            "column": 20,
                            "line": 101
                          }
                        }
                      }
                    },
                    "range": [
                      3330,
                      3354
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 101
                      },
                      "start": {
                        "column": 8,
                        "line": 101
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 102
                  },
                  "start": {
                    "column": 54,
                    "line": 100
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicPropertyTypes",
                "optional": false,
                "range": [
                  3280,
                  3319
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 100
                  },
                  "start": {
                    "column": 14,
                    "line": 100
                  }
                }
              },
              "range": [
                3270,
                3360
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                3366,
                3648
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    3419,
                    3648
                  ],
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "range": [
                          3436,
                          3458
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 105
                          },
                          "start": {
                            "column": 15,
                            "line": 105
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 105
                          },
                          "start": {
                            "column": 37,
                            "line": 105
                          }
                        },
                        "range": [
                          3458,
                          3472
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "range": [
                              3460,
                              3472
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 105
                              },
                              "start": {
                                "column": 39,
                                "line": 105
                              }
                            }
                          },
                          "range": [
                            3460,
                            3472
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 105
                            },
                            "start": {
                              "column": 39,
                              "line": 105
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3429,
                        3473
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 105
                        },
                        "start": {
                          "column": 8,
                          "line": 105
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticProperty",
                        "optional": false,
                        "range": [
                          3506,
                          3529
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 106
                          },
                          "start": {
                            "column": 23,
                            "line": 106
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 106
                          },
                          "start": {
                            "column": 46,
                            "line": 106
                          }
                        },
                        "range": [
                          3529,
                          3543
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "range": [
                              3531,
                              3543
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 106
                              },
                              "start": {
                                "column": 48,
                                "line": 106
                              }
                            }
                          },
                          "range": [
                            3531,
                            3543
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 106
                            },
                            "start": {
                              "column": 48,
                              "line": 106
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3491,
                        3544
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 106
                        },
                        "start": {
                          "column": 8,
                          "line": 106
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "range": [
                          3553,
                          3569
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 107
                          },
                          "start": {
                            "column": 8,
                            "line": 107
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 107
                          },
                          "start": {
                            "column": 24,
                            "line": 107
                          }
                        },
                        "range": [
                          3569,
                          3583
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "range": [
                              3571,
                              3583
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 107
                              },
                              "start": {
                                "column": 26,
                                "line": 107
                              }
                            }
                          },
                          "range": [
                            3571,
                            3583
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 107
                            },
                            "start": {
                              "column": 26,
                              "line": 107
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3553,
                        3584
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 107
                        },
                        "start": {
                          "column": 8,
                          "line": 107
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateProperty",
                        "optional": false,
                        "range": [
                          3610,
                          3627
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 108
                          },
                          "start": {
                            "column": 16,
                            "line": 108
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 108
                          },
                          "start": {
                            "column": 33,
                            "line": 108
                          }
                        },
                        "range": [
                          3627,
                          3641
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "range": [
                              3629,
                              3641
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 108
                              },
                              "start": {
                                "column": 35,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            3629,
                            3641
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 108
                            },
                            "start": {
                              "column": 35,
                              "line": 108
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3602,
                        3642
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 108
                        },
                        "start": {
                          "column": 8,
                          "line": 108
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 109
                    },
                    "start": {
                      "column": 57,
                      "line": 104
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivatePropertyTypes",
                  "optional": false,
                  "range": [
                    3379,
                    3418
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 104
                    },
                    "start": {
                      "column": 17,
                      "line": 104
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  3373,
                  3648
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 109
                  },
                  "start": {
                    "column": 11,
                    "line": 104
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 109
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                3654,
                3913
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    3706,
                    3913
                  ],
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "range": [
                          3723,
                          3745
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 112
                          },
                          "start": {
                            "column": 15,
                            "line": 112
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 112
                          },
                          "start": {
                            "column": 37,
                            "line": 112
                          }
                        },
                        "range": [
                          3745,
                          3758
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              3747,
                              3758
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 112
                              },
                              "start": {
                                "column": 39,
                                "line": 112
                              }
                            }
                          },
                          "range": [
                            3747,
                            3758
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 112
                            },
                            "start": {
                              "column": 39,
                              "line": 112
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3716,
                        3759
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 112
                        },
                        "start": {
                          "column": 8,
                          "line": 112
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticProperty",
                        "optional": false,
                        "range": [
                          3783,
                          3806
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 113
                          },
                          "start": {
                            "column": 23,
                            "line": 113
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 113
                          },
                          "start": {
                            "column": 46,
                            "line": 113
                          }
                        },
                        "range": [
                          3806,
                          3819
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              3808,
                              3819
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 113
                              },
                              "start": {
                                "column": 48,
                                "line": 113
                              }
                            }
                          },
                          "range": [
                            3808,
                            3819
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 113
                            },
                            "start": {
                              "column": 48,
                              "line": 113
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3768,
                        3820
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 113
                        },
                        "start": {
                          "column": 8,
                          "line": 113
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "range": [
                          3829,
                          3845
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 114
                          },
                          "start": {
                            "column": 8,
                            "line": 114
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 114
                          },
                          "start": {
                            "column": 24,
                            "line": 114
                          }
                        },
                        "range": [
                          3845,
                          3858
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              3847,
                              3858
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 114
                              },
                              "start": {
                                "column": 26,
                                "line": 114
                              }
                            }
                          },
                          "range": [
                            3847,
                            3858
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 114
                            },
                            "start": {
                              "column": 26,
                              "line": 114
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3829,
                        3859
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 114
                        },
                        "start": {
                          "column": 8,
                          "line": 114
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateProperty",
                        "optional": false,
                        "range": [
                          3876,
                          3893
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 115
                          },
                          "start": {
                            "column": 16,
                            "line": 115
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 115
                          },
                          "start": {
                            "column": 33,
                            "line": 115
                          }
                        },
                        "range": [
                          3893,
                          3906
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              3895,
                              3906
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 115
                              },
                              "start": {
                                "column": 35,
                                "line": 115
                              }
                            }
                          },
                          "range": [
                            3895,
                            3906
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 115
                            },
                            "start": {
                              "column": 35,
                              "line": 115
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        3868,
                        3907
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 115
                        },
                        "start": {
                          "column": 8,
                          "line": 115
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 116
                    },
                    "start": {
                      "column": 56,
                      "line": 111
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicPropertyTypes",
                  "optional": false,
                  "range": [
                    3667,
                    3705
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 111
                    },
                    "start": {
                      "column": 17,
                      "line": 111
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  3661,
                  3913
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 116
                  },
                  "start": {
                    "column": 11,
                    "line": 111
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 116
                },
                "start": {
                  "column": 4,
                  "line": 111
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  3966,
                  4177
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        3983,
                        4005
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 119
                        },
                        "start": {
                          "column": 15,
                          "line": 119
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 119
                        },
                        "start": {
                          "column": 37,
                          "line": 119
                        }
                      },
                      "range": [
                        4005,
                        4019
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4007,
                            4019
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 119
                            },
                            "start": {
                              "column": 39,
                              "line": 119
                            }
                          }
                        },
                        "range": [
                          4007,
                          4019
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 119
                          },
                          "start": {
                            "column": 39,
                            "line": 119
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      3976,
                      4020
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 119
                      },
                      "start": {
                        "column": 8,
                        "line": 119
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "range": [
                        4044,
                        4067
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 120
                        },
                        "start": {
                          "column": 23,
                          "line": 120
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 120
                        },
                        "start": {
                          "column": 46,
                          "line": 120
                        }
                      },
                      "range": [
                        4067,
                        4081
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4069,
                            4081
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 120
                            },
                            "start": {
                              "column": 48,
                              "line": 120
                            }
                          }
                        },
                        "range": [
                          4069,
                          4081
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 120
                          },
                          "start": {
                            "column": 48,
                            "line": 120
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4029,
                      4082
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 120
                      },
                      "start": {
                        "column": 8,
                        "line": 120
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        4091,
                        4107
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 121
                        },
                        "start": {
                          "column": 8,
                          "line": 121
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 121
                        },
                        "start": {
                          "column": 24,
                          "line": 121
                        }
                      },
                      "range": [
                        4107,
                        4121
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4109,
                            4121
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 121
                            },
                            "start": {
                              "column": 26,
                              "line": 121
                            }
                          }
                        },
                        "range": [
                          4109,
                          4121
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 121
                          },
                          "start": {
                            "column": 26,
                            "line": 121
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4091,
                      4122
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 121
                      },
                      "start": {
                        "column": 8,
                        "line": 121
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "range": [
                        4139,
                        4156
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 122
                        },
                        "start": {
                          "column": 16,
                          "line": 122
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 122
                        },
                        "start": {
                          "column": 33,
                          "line": 122
                        }
                      },
                      "range": [
                        4156,
                        4170
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4158,
                            4170
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 122
                            },
                            "start": {
                              "column": 35,
                              "line": 122
                            }
                          }
                        },
                        "range": [
                          4158,
                          4170
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 122
                          },
                          "start": {
                            "column": 35,
                            "line": 122
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4131,
                      4171
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 122
                      },
                      "start": {
                        "column": 8,
                        "line": 122
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 123
                  },
                  "start": {
                    "column": 51,
                    "line": 118
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivatePropertyTypes",
                "optional": false,
                "range": [
                  3925,
                  3965
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 118
                  },
                  "start": {
                    "column": 10,
                    "line": 118
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                3919,
                4177
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 123
                },
                "start": {
                  "column": 4,
                  "line": 118
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  4229,
                  4436
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        4246,
                        4268
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 126
                        },
                        "start": {
                          "column": 15,
                          "line": 126
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 126
                        },
                        "start": {
                          "column": 37,
                          "line": 126
                        }
                      },
                      "range": [
                        4268,
                        4281
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4270,
                            4281
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 126
                            },
                            "start": {
                              "column": 39,
                              "line": 126
                            }
                          }
                        },
                        "range": [
                          4270,
                          4281
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 126
                          },
                          "start": {
                            "column": 39,
                            "line": 126
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4239,
                      4282
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 126
                      },
                      "start": {
                        "column": 8,
                        "line": 126
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "range": [
                        4306,
                        4329
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 127
                        },
                        "start": {
                          "column": 23,
                          "line": 127
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 127
                        },
                        "start": {
                          "column": 46,
                          "line": 127
                        }
                      },
                      "range": [
                        4329,
                        4342
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4331,
                            4342
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 127
                            },
                            "start": {
                              "column": 48,
                              "line": 127
                            }
                          }
                        },
                        "range": [
                          4331,
                          4342
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 127
                          },
                          "start": {
                            "column": 48,
                            "line": 127
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4291,
                      4343
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 127
                      },
                      "start": {
                        "column": 8,
                        "line": 127
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        4352,
                        4368
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 128
                        },
                        "start": {
                          "column": 8,
                          "line": 128
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 128
                        },
                        "start": {
                          "column": 24,
                          "line": 128
                        }
                      },
                      "range": [
                        4368,
                        4381
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4370,
                            4381
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 128
                            },
                            "start": {
                              "column": 26,
                              "line": 128
                            }
                          }
                        },
                        "range": [
                          4370,
                          4381
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 128
                          },
                          "start": {
                            "column": 26,
                            "line": 128
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4352,
                      4382
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 128
                      },
                      "start": {
                        "column": 8,
                        "line": 128
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "range": [
                        4399,
                        4416
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 129
                        },
                        "start": {
                          "column": 16,
                          "line": 129
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 129
                        },
                        "start": {
                          "column": 33,
                          "line": 129
                        }
                      },
                      "range": [
                        4416,
                        4429
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4418,
                            4429
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 129
                            },
                            "start": {
                              "column": 35,
                              "line": 129
                            }
                          }
                        },
                        "range": [
                          4418,
                          4429
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 129
                          },
                          "start": {
                            "column": 35,
                            "line": 129
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4391,
                      4430
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 129
                      },
                      "start": {
                        "column": 8,
                        "line": 129
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 130
                  },
                  "start": {
                    "column": 50,
                    "line": 125
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicPropertyTypes",
                "optional": false,
                "range": [
                  4189,
                  4228
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 125
                  },
                  "start": {
                    "column": 10,
                    "line": 125
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                4183,
                4436
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 130
                },
                "start": {
                  "column": 4,
                  "line": 125
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                4442,
                4501
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
                      "name": "publicVarWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 132
                          },
                          "start": {
                            "column": 48,
                            "line": 132
                          }
                        },
                        "range": [
                          4486,
                          4500
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "range": [
                              4488,
                              4500
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 132
                              },
                              "start": {
                                "column": 50,
                                "line": 132
                              }
                            }
                          },
                          "range": [
                            4488,
                            4500
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 132
                            },
                            "start": {
                              "column": 50,
                              "line": 132
                            }
                          }
                        }
                      },
                      "range": [
                        4453,
                        4500
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 132
                        },
                        "start": {
                          "column": 15,
                          "line": 132
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      4453,
                      4500
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 132
                      },
                      "start": {
                        "column": 15,
                        "line": 132
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  4449,
                  4501
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 132
                  },
                  "start": {
                    "column": 11,
                    "line": 132
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 132
                },
                "start": {
                  "column": 4,
                  "line": 132
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                4515,
                4572
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
                      "name": "publicVarWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 133
                          },
                          "start": {
                            "column": 47,
                            "line": 133
                          }
                        },
                        "range": [
                          4558,
                          4571
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              4560,
                              4571
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 133
                              },
                              "start": {
                                "column": 49,
                                "line": 133
                              }
                            }
                          },
                          "range": [
                            4560,
                            4571
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 133
                            },
                            "start": {
                              "column": 49,
                              "line": 133
                            }
                          }
                        }
                      },
                      "range": [
                        4526,
                        4571
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 133
                        },
                        "start": {
                          "column": 15,
                          "line": 133
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      4526,
                      4571
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 133
                      },
                      "start": {
                        "column": 15,
                        "line": 133
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  4522,
                  4572
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 133
                  },
                  "start": {
                    "column": 11,
                    "line": 133
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 133
                },
                "start": {
                  "column": 4,
                  "line": 133
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
                    "name": "privateVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 134
                        },
                        "start": {
                          "column": 42,
                          "line": 134
                        }
                      },
                      "range": [
                        4615,
                        4629
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4617,
                            4629
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 134
                            },
                            "start": {
                              "column": 44,
                              "line": 134
                            }
                          }
                        },
                        "range": [
                          4617,
                          4629
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 134
                          },
                          "start": {
                            "column": 44,
                            "line": 134
                          }
                        }
                      }
                    },
                    "range": [
                      4581,
                      4629
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 134
                      },
                      "start": {
                        "column": 8,
                        "line": 134
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    4581,
                    4629
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 134
                    },
                    "start": {
                      "column": 8,
                      "line": 134
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                4577,
                4630
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 134
                },
                "start": {
                  "column": 4,
                  "line": 134
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
                    "name": "privateVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 135
                        },
                        "start": {
                          "column": 41,
                          "line": 135
                        }
                      },
                      "range": [
                        4672,
                        4685
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4674,
                            4685
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 135
                            },
                            "start": {
                              "column": 43,
                              "line": 135
                            }
                          }
                        },
                        "range": [
                          4674,
                          4685
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 135
                          },
                          "start": {
                            "column": 43,
                            "line": 135
                          }
                        }
                      }
                    },
                    "range": [
                      4639,
                      4685
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 135
                      },
                      "start": {
                        "column": 8,
                        "line": 135
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    4639,
                    4685
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 135
                    },
                    "start": {
                      "column": 8,
                      "line": 135
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                4635,
                4686
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 135
                },
                "start": {
                  "column": 4,
                  "line": 135
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                4692,
                4766
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
                      "name": "publicAmbientVarWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 137
                          },
                          "start": {
                            "column": 63,
                            "line": 137
                          }
                        },
                        "range": [
                          4751,
                          4765
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "range": [
                              4753,
                              4765
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 137
                              },
                              "start": {
                                "column": 65,
                                "line": 137
                              }
                            }
                          },
                          "range": [
                            4753,
                            4765
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 137
                            },
                            "start": {
                              "column": 65,
                              "line": 137
                            }
                          }
                        }
                      },
                      "range": [
                        4711,
                        4765
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 137
                        },
                        "start": {
                          "column": 23,
                          "line": 137
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      4711,
                      4765
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 137
                      },
                      "start": {
                        "column": 23,
                        "line": 137
                      }
                    }
                  }
                ],
                "declare": true,
                "kind": "var",
                "range": [
                  4699,
                  4766
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 137
                  },
                  "start": {
                    "column": 11,
                    "line": 137
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 137
                },
                "start": {
                  "column": 4,
                  "line": 137
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                4780,
                4852
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
                      "name": "publicAmbientVarWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 138
                          },
                          "start": {
                            "column": 62,
                            "line": 138
                          }
                        },
                        "range": [
                          4838,
                          4851
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              4840,
                              4851
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 138
                              },
                              "start": {
                                "column": 64,
                                "line": 138
                              }
                            }
                          },
                          "range": [
                            4840,
                            4851
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 138
                            },
                            "start": {
                              "column": 64,
                              "line": 138
                            }
                          }
                        }
                      },
                      "range": [
                        4799,
                        4851
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 138
                        },
                        "start": {
                          "column": 23,
                          "line": 138
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      4799,
                      4851
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 138
                      },
                      "start": {
                        "column": 23,
                        "line": 138
                      }
                    }
                  }
                ],
                "declare": true,
                "kind": "var",
                "range": [
                  4787,
                  4852
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 138
                  },
                  "start": {
                    "column": 11,
                    "line": 138
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 138
                },
                "start": {
                  "column": 4,
                  "line": 138
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
                    "name": "privateAmbientVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 139
                        },
                        "start": {
                          "column": 57,
                          "line": 139
                        }
                      },
                      "range": [
                        4910,
                        4924
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4912,
                            4924
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 139
                            },
                            "start": {
                              "column": 59,
                              "line": 139
                            }
                          }
                        },
                        "range": [
                          4912,
                          4924
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 139
                          },
                          "start": {
                            "column": 59,
                            "line": 139
                          }
                        }
                      }
                    },
                    "range": [
                      4869,
                      4924
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 139
                      },
                      "start": {
                        "column": 16,
                        "line": 139
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    4869,
                    4924
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 139
                    },
                    "start": {
                      "column": 16,
                      "line": 139
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                4857,
                4925
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 139
                },
                "start": {
                  "column": 4,
                  "line": 139
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
                    "name": "privateAmbientVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 140
                        },
                        "start": {
                          "column": 56,
                          "line": 140
                        }
                      },
                      "range": [
                        4982,
                        4995
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4984,
                            4995
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 140
                            },
                            "start": {
                              "column": 58,
                              "line": 140
                            }
                          }
                        },
                        "range": [
                          4984,
                          4995
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 140
                          },
                          "start": {
                            "column": 58,
                            "line": 140
                          }
                        }
                      }
                    },
                    "range": [
                      4942,
                      4995
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 140
                      },
                      "start": {
                        "column": 16,
                        "line": 140
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    4942,
                    4995
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 140
                    },
                    "start": {
                      "column": 16,
                      "line": 140
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                4930,
                4996
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 140
                },
                "start": {
                  "column": 4,
                  "line": 140
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                5002,
                5128
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    5065,
                    5128
                  ],
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myProperty",
                        "optional": false,
                        "range": [
                          5075,
                          5085
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 143
                          },
                          "start": {
                            "column": 8,
                            "line": 143
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
                            "column": 45,
                            "line": 143
                          },
                          "start": {
                            "column": 18,
                            "line": 143
                          }
                        },
                        "range": [
                          5085,
                          5112
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "range": [
                                5087,
                                5100
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 143
                                },
                                "start": {
                                  "column": 20,
                                  "line": 143
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                5101,
                                5112
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 143
                                },
                                "start": {
                                  "column": 34,
                                  "line": 143
                                }
                              }
                            },
                            "range": [
                              5087,
                              5112
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 143
                              },
                              "start": {
                                "column": 20,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            5087,
                            5112
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 143
                            },
                            "start": {
                              "column": 20,
                              "line": 143
                            }
                          }
                        }
                      },
                      "range": [
                        5075,
                        5113
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 143
                        },
                        "start": {
                          "column": 8,
                          "line": 143
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 144
                    },
                    "start": {
                      "column": 67,
                      "line": 142
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateModulePropertyTypes",
                  "optional": false,
                  "range": [
                    5019,
                    5064
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 142
                    },
                    "start": {
                      "column": 21,
                      "line": 142
                    }
                  }
                },
                "range": [
                  5009,
                  5128
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 144
                  },
                  "start": {
                    "column": 11,
                    "line": 142
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 144
                },
                "start": {
                  "column": 4,
                  "line": 142
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                5133,
                5332
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    5188,
                    5332
                  ],
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "range": [
                          5205,
                          5227
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 146
                          },
                          "start": {
                            "column": 15,
                            "line": 146
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 146
                          },
                          "start": {
                            "column": 37,
                            "line": 146
                          }
                        },
                        "range": [
                          5227,
                          5254
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "range": [
                                5229,
                                5242
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 146
                                },
                                "start": {
                                  "column": 39,
                                  "line": 146
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                5243,
                                5254
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 146
                                },
                                "start": {
                                  "column": 53,
                                  "line": 146
                                }
                              }
                            },
                            "range": [
                              5229,
                              5254
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 146
                              },
                              "start": {
                                "column": 39,
                                "line": 146
                              }
                            }
                          },
                          "range": [
                            5229,
                            5254
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 146
                            },
                            "start": {
                              "column": 39,
                              "line": 146
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        5198,
                        5255
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 146
                        },
                        "start": {
                          "column": 8,
                          "line": 146
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "range": [
                          5273,
                          5289
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 147
                          },
                          "start": {
                            "column": 8,
                            "line": 147
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 147
                          },
                          "start": {
                            "column": 24,
                            "line": 147
                          }
                        },
                        "range": [
                          5289,
                          5316
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "range": [
                                5291,
                                5304
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 147
                                },
                                "start": {
                                  "column": 26,
                                  "line": 147
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                5305,
                                5316
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 147
                                },
                                "start": {
                                  "column": 40,
                                  "line": 147
                                }
                              }
                            },
                            "range": [
                              5291,
                              5316
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 147
                              },
                              "start": {
                                "column": 26,
                                "line": 147
                              }
                            }
                          },
                          "range": [
                            5291,
                            5316
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 147
                            },
                            "start": {
                              "column": 26,
                              "line": 147
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        5273,
                        5317
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 147
                        },
                        "start": {
                          "column": 8,
                          "line": 147
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 148
                    },
                    "start": {
                      "column": 59,
                      "line": 145
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateModulePropertyTypes",
                  "optional": false,
                  "range": [
                    5146,
                    5187
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 145
                    },
                    "start": {
                      "column": 17,
                      "line": 145
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  5140,
                  5332
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 148
                  },
                  "start": {
                    "column": 11,
                    "line": 145
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 148
                },
                "start": {
                  "column": 4,
                  "line": 145
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                5337,
                5415
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
                      "name": "publicVarWithPrivateModulePropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 149
                          },
                          "start": {
                            "column": 54,
                            "line": 149
                          }
                        },
                        "range": [
                          5387,
                          5414
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "range": [
                                5389,
                                5402
                              ],
                              "loc": {
                                "end": {
                                  "column": 69,
                                  "line": 149
                                },
                                "start": {
                                  "column": 56,
                                  "line": 149
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                5403,
                                5414
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 149
                                },
                                "start": {
                                  "column": 70,
                                  "line": 149
                                }
                              }
                            },
                            "range": [
                              5389,
                              5414
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 149
                              },
                              "start": {
                                "column": 56,
                                "line": 149
                              }
                            }
                          },
                          "range": [
                            5389,
                            5414
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 149
                            },
                            "start": {
                              "column": 56,
                              "line": 149
                            }
                          }
                        }
                      },
                      "range": [
                        5348,
                        5414
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 149
                        },
                        "start": {
                          "column": 15,
                          "line": 149
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      5348,
                      5414
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 149
                      },
                      "start": {
                        "column": 15,
                        "line": 149
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  5344,
                  5415
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 149
                  },
                  "start": {
                    "column": 11,
                    "line": 149
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 149
                },
                "start": {
                  "column": 4,
                  "line": 149
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                5429,
                5522
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
                      "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 150
                          },
                          "start": {
                            "column": 69,
                            "line": 150
                          }
                        },
                        "range": [
                          5494,
                          5521
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "range": [
                                5496,
                                5509
                              ],
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 150
                                },
                                "start": {
                                  "column": 71,
                                  "line": 150
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                5510,
                                5521
                              ],
                              "loc": {
                                "end": {
                                  "column": 96,
                                  "line": 150
                                },
                                "start": {
                                  "column": 85,
                                  "line": 150
                                }
                              }
                            },
                            "range": [
                              5496,
                              5521
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 150
                              },
                              "start": {
                                "column": 71,
                                "line": 150
                              }
                            }
                          },
                          "range": [
                            5496,
                            5521
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 150
                            },
                            "start": {
                              "column": 71,
                              "line": 150
                            }
                          }
                        }
                      },
                      "range": [
                        5448,
                        5521
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 150
                        },
                        "start": {
                          "column": 23,
                          "line": 150
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      5448,
                      5521
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 150
                      },
                      "start": {
                        "column": 23,
                        "line": 150
                      }
                    }
                  }
                ],
                "declare": true,
                "kind": "var",
                "range": [
                  5436,
                  5522
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 150
                  },
                  "start": {
                    "column": 11,
                    "line": 150
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 150
                },
                "start": {
                  "column": 4,
                  "line": 150
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  5594,
                  5648
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        5604,
                        5614
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 153
                        },
                        "start": {
                          "column": 8,
                          "line": 153
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
                          "column": 45,
                          "line": 153
                        },
                        "start": {
                          "column": 18,
                          "line": 153
                        }
                      },
                      "range": [
                        5614,
                        5641
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              5616,
                              5629
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 153
                              },
                              "start": {
                                "column": 20,
                                "line": 153
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              5630,
                              5641
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 153
                              },
                              "start": {
                                "column": 34,
                                "line": 153
                              }
                            }
                          },
                          "range": [
                            5616,
                            5641
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 153
                            },
                            "start": {
                              "column": 20,
                              "line": 153
                            }
                          }
                        },
                        "range": [
                          5616,
                          5641
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 153
                          },
                          "start": {
                            "column": 20,
                            "line": 153
                          }
                        }
                      }
                    },
                    "range": [
                      5604,
                      5642
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 153
                      },
                      "start": {
                        "column": 8,
                        "line": 153
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 154
                  },
                  "start": {
                    "column": 61,
                    "line": 152
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "range": [
                  5547,
                  5593
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 152
                  },
                  "start": {
                    "column": 14,
                    "line": 152
                  }
                }
              },
              "range": [
                5537,
                5648
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 154
                },
                "start": {
                  "column": 4,
                  "line": 152
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  5702,
                  5828
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        5719,
                        5741
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 156
                        },
                        "start": {
                          "column": 15,
                          "line": 156
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 156
                        },
                        "start": {
                          "column": 37,
                          "line": 156
                        }
                      },
                      "range": [
                        5741,
                        5768
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              5743,
                              5756
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 156
                              },
                              "start": {
                                "column": 39,
                                "line": 156
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              5757,
                              5768
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 156
                              },
                              "start": {
                                "column": 53,
                                "line": 156
                              }
                            }
                          },
                          "range": [
                            5743,
                            5768
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 156
                            },
                            "start": {
                              "column": 39,
                              "line": 156
                            }
                          }
                        },
                        "range": [
                          5743,
                          5768
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 156
                          },
                          "start": {
                            "column": 39,
                            "line": 156
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      5712,
                      5769
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 156
                      },
                      "start": {
                        "column": 8,
                        "line": 156
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        5778,
                        5794
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 157
                        },
                        "start": {
                          "column": 8,
                          "line": 157
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 157
                        },
                        "start": {
                          "column": 24,
                          "line": 157
                        }
                      },
                      "range": [
                        5794,
                        5821
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              5796,
                              5809
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 157
                              },
                              "start": {
                                "column": 26,
                                "line": 157
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              5810,
                              5821
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 157
                              },
                              "start": {
                                "column": 40,
                                "line": 157
                              }
                            }
                          },
                          "range": [
                            5796,
                            5821
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 157
                            },
                            "start": {
                              "column": 26,
                              "line": 157
                            }
                          }
                        },
                        "range": [
                          5796,
                          5821
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 157
                          },
                          "start": {
                            "column": 26,
                            "line": 157
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      5778,
                      5822
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 157
                      },
                      "start": {
                        "column": 8,
                        "line": 157
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 158
                  },
                  "start": {
                    "column": 53,
                    "line": 155
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateModulePropertyTypes",
                "optional": false,
                "range": [
                  5659,
                  5701
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 155
                  },
                  "start": {
                    "column": 10,
                    "line": 155
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                5653,
                5828
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 158
                },
                "start": {
                  "column": 4,
                  "line": 155
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
                    "name": "privateVarWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 159
                        },
                        "start": {
                          "column": 48,
                          "line": 159
                        }
                      },
                      "range": [
                        5877,
                        5904
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              5879,
                              5892
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 159
                              },
                              "start": {
                                "column": 50,
                                "line": 159
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              5893,
                              5904
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 159
                              },
                              "start": {
                                "column": 64,
                                "line": 159
                              }
                            }
                          },
                          "range": [
                            5879,
                            5904
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 159
                            },
                            "start": {
                              "column": 50,
                              "line": 159
                            }
                          }
                        },
                        "range": [
                          5879,
                          5904
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 159
                          },
                          "start": {
                            "column": 50,
                            "line": 159
                          }
                        }
                      }
                    },
                    "range": [
                      5837,
                      5904
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 159
                      },
                      "start": {
                        "column": 8,
                        "line": 159
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    5837,
                    5904
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 159
                    },
                    "start": {
                      "column": 8,
                      "line": 159
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                5833,
                5905
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 159
                },
                "start": {
                  "column": 4,
                  "line": 159
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
                    "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 160
                        },
                        "start": {
                          "column": 63,
                          "line": 160
                        }
                      },
                      "range": [
                        5969,
                        5996
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              5971,
                              5984
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 160
                              },
                              "start": {
                                "column": 65,
                                "line": 160
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              5985,
                              5996
                            ],
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 160
                              },
                              "start": {
                                "column": 79,
                                "line": 160
                              }
                            }
                          },
                          "range": [
                            5971,
                            5996
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 160
                            },
                            "start": {
                              "column": 65,
                              "line": 160
                            }
                          }
                        },
                        "range": [
                          5971,
                          5996
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 160
                          },
                          "start": {
                            "column": 65,
                            "line": 160
                          }
                        }
                      }
                    },
                    "range": [
                      5922,
                      5996
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 160
                      },
                      "start": {
                        "column": 16,
                        "line": 160
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    5922,
                    5996
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 160
                    },
                    "start": {
                      "column": 16,
                      "line": 160
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                5910,
                5997
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 160
                },
                "start": {
                  "column": 4,
                  "line": 160
                }
              }
            }
          ],
          "range": [
            2880,
            5999
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 161
            },
            "start": {
              "column": 27,
              "line": 81
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            2867,
            2879
          ],
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "loc": {
            "end": {
              "column": 26,
              "line": 81
            },
            "start": {
              "column": 14,
              "line": 81
            }
          }
        },
        "kind": "module",
        "range": [
          2860,
          5999
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 161
          },
          "start": {
            "column": 7,
            "line": 81
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 81
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
                6047,
                6054
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 165
                },
                "start": {
                  "column": 23,
                  "line": 164
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "range": [
                6034,
                6046
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 164
                },
                "start": {
                  "column": 10,
                  "line": 164
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              6028,
              6054
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 165
              },
              "start": {
                "column": 4,
                "line": 164
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6060,
              6092
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  6085,
                  6092
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 168
                  },
                  "start": {
                    "column": 29,
                    "line": 167
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "range": [
                  6073,
                  6084
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 167
                  },
                  "start": {
                    "column": 17,
                    "line": 167
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                6067,
                6092
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 168
                },
                "start": {
                  "column": 11,
                  "line": 167
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 168
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6098,
              6198
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  6155,
                  6198
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        6165,
                        6175
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 171
                        },
                        "start": {
                          "column": 8,
                          "line": 171
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
                          "column": 32,
                          "line": 171
                        },
                        "start": {
                          "column": 18,
                          "line": 171
                        }
                      },
                      "range": [
                        6175,
                        6189
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            6177,
                            6189
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 171
                            },
                            "start": {
                              "column": 20,
                              "line": 171
                            }
                          }
                        },
                        "range": [
                          6177,
                          6189
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 171
                          },
                          "start": {
                            "column": 20,
                            "line": 171
                          }
                        }
                      }
                    },
                    "range": [
                      6165,
                      6190
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 171
                      },
                      "start": {
                        "column": 8,
                        "line": 171
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 172
                  },
                  "start": {
                    "column": 61,
                    "line": 170
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "range": [
                  6115,
                  6154
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 170
                  },
                  "start": {
                    "column": 21,
                    "line": 170
                  }
                }
              },
              "range": [
                6105,
                6198
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 172
                },
                "start": {
                  "column": 11,
                  "line": 170
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 172
              },
              "start": {
                "column": 4,
                "line": 170
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6204,
              6300
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  6260,
                  6300
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        6270,
                        6280
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 175
                        },
                        "start": {
                          "column": 8,
                          "line": 175
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
                          "line": 175
                        },
                        "start": {
                          "column": 18,
                          "line": 175
                        }
                      },
                      "range": [
                        6280,
                        6293
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6282,
                            6293
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 175
                            },
                            "start": {
                              "column": 20,
                              "line": 175
                            }
                          }
                        },
                        "range": [
                          6282,
                          6293
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 175
                          },
                          "start": {
                            "column": 20,
                            "line": 175
                          }
                        }
                      }
                    },
                    "range": [
                      6270,
                      6294
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 175
                      },
                      "start": {
                        "column": 8,
                        "line": 175
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 176
                  },
                  "start": {
                    "column": 60,
                    "line": 174
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicPropertyTypes",
                "optional": false,
                "range": [
                  6221,
                  6259
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 174
                  },
                  "start": {
                    "column": 21,
                    "line": 174
                  }
                }
              },
              "range": [
                6211,
                6300
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 176
                },
                "start": {
                  "column": 11,
                  "line": 174
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 176
              },
              "start": {
                "column": 4,
                "line": 174
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                6357,
                6398
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProperty",
                    "optional": false,
                    "range": [
                      6367,
                      6377
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 179
                      },
                      "start": {
                        "column": 8,
                        "line": 179
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
                        "column": 32,
                        "line": 179
                      },
                      "start": {
                        "column": 18,
                        "line": 179
                      }
                    },
                    "range": [
                      6377,
                      6391
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          6379,
                          6391
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 179
                          },
                          "start": {
                            "column": 20,
                            "line": 179
                          }
                        }
                      },
                      "range": [
                        6379,
                        6391
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 179
                        },
                        "start": {
                          "column": 20,
                          "line": 179
                        }
                      }
                    }
                  },
                  "range": [
                    6367,
                    6392
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 179
                    },
                    "start": {
                      "column": 8,
                      "line": 179
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 180
                },
                "start": {
                  "column": 55,
                  "line": 178
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "optional": false,
              "range": [
                6316,
                6356
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 178
                },
                "start": {
                  "column": 14,
                  "line": 178
                }
              }
            },
            "range": [
              6306,
              6398
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 180
              },
              "start": {
                "column": 4,
                "line": 178
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                6454,
                6494
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProperty",
                    "optional": false,
                    "range": [
                      6464,
                      6474
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 183
                      },
                      "start": {
                        "column": 8,
                        "line": 183
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
                        "line": 183
                      },
                      "start": {
                        "column": 18,
                        "line": 183
                      }
                    },
                    "range": [
                      6474,
                      6487
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          6476,
                          6487
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 183
                          },
                          "start": {
                            "column": 20,
                            "line": 183
                          }
                        }
                      },
                      "range": [
                        6476,
                        6487
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 183
                        },
                        "start": {
                          "column": 20,
                          "line": 183
                        }
                      }
                    }
                  },
                  "range": [
                    6464,
                    6488
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 183
                    },
                    "start": {
                      "column": 8,
                      "line": 183
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 184
                },
                "start": {
                  "column": 54,
                  "line": 182
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicPropertyTypes",
              "optional": false,
              "range": [
                6414,
                6453
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 182
                },
                "start": {
                  "column": 14,
                  "line": 182
                }
              }
            },
            "range": [
              6404,
              6494
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 184
              },
              "start": {
                "column": 4,
                "line": 182
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6500,
              6766
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  6553,
                  6766
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        6570,
                        6592
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 187
                        },
                        "start": {
                          "column": 15,
                          "line": 187
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 187
                        },
                        "start": {
                          "column": 37,
                          "line": 187
                        }
                      },
                      "range": [
                        6592,
                        6606
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            6594,
                            6606
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 187
                            },
                            "start": {
                              "column": 39,
                              "line": 187
                            }
                          }
                        },
                        "range": [
                          6594,
                          6606
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 187
                          },
                          "start": {
                            "column": 39,
                            "line": 187
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6563,
                      6607
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 187
                      },
                      "start": {
                        "column": 8,
                        "line": 187
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "range": [
                        6632,
                        6655
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 188
                        },
                        "start": {
                          "column": 23,
                          "line": 188
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 188
                        },
                        "start": {
                          "column": 46,
                          "line": 188
                        }
                      },
                      "range": [
                        6655,
                        6669
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            6657,
                            6669
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 188
                            },
                            "start": {
                              "column": 48,
                              "line": 188
                            }
                          }
                        },
                        "range": [
                          6657,
                          6669
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 188
                          },
                          "start": {
                            "column": 48,
                            "line": 188
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6617,
                      6670
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 188
                      },
                      "start": {
                        "column": 8,
                        "line": 188
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        6679,
                        6695
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 189
                        },
                        "start": {
                          "column": 8,
                          "line": 189
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 189
                        },
                        "start": {
                          "column": 24,
                          "line": 189
                        }
                      },
                      "range": [
                        6695,
                        6709
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            6697,
                            6709
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 189
                            },
                            "start": {
                              "column": 26,
                              "line": 189
                            }
                          }
                        },
                        "range": [
                          6697,
                          6709
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 189
                          },
                          "start": {
                            "column": 26,
                            "line": 189
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6679,
                      6710
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 189
                      },
                      "start": {
                        "column": 8,
                        "line": 189
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "range": [
                        6728,
                        6745
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 190
                        },
                        "start": {
                          "column": 16,
                          "line": 190
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 190
                        },
                        "start": {
                          "column": 33,
                          "line": 190
                        }
                      },
                      "range": [
                        6745,
                        6759
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            6747,
                            6759
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 190
                            },
                            "start": {
                              "column": 35,
                              "line": 190
                            }
                          }
                        },
                        "range": [
                          6747,
                          6759
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 190
                          },
                          "start": {
                            "column": 35,
                            "line": 190
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6720,
                      6760
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 190
                      },
                      "start": {
                        "column": 8,
                        "line": 190
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 191
                  },
                  "start": {
                    "column": 57,
                    "line": 186
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivatePropertyTypes",
                "optional": false,
                "range": [
                  6513,
                  6552
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 186
                  },
                  "start": {
                    "column": 17,
                    "line": 186
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                6507,
                6766
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 191
                },
                "start": {
                  "column": 11,
                  "line": 186
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 191
              },
              "start": {
                "column": 4,
                "line": 186
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6772,
              7031
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  6824,
                  7031
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        6841,
                        6863
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 194
                        },
                        "start": {
                          "column": 15,
                          "line": 194
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 194
                        },
                        "start": {
                          "column": 37,
                          "line": 194
                        }
                      },
                      "range": [
                        6863,
                        6876
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6865,
                            6876
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 194
                            },
                            "start": {
                              "column": 39,
                              "line": 194
                            }
                          }
                        },
                        "range": [
                          6865,
                          6876
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 194
                          },
                          "start": {
                            "column": 39,
                            "line": 194
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6834,
                      6877
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 194
                      },
                      "start": {
                        "column": 8,
                        "line": 194
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "range": [
                        6901,
                        6924
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 195
                        },
                        "start": {
                          "column": 23,
                          "line": 195
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 195
                        },
                        "start": {
                          "column": 46,
                          "line": 195
                        }
                      },
                      "range": [
                        6924,
                        6937
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6926,
                            6937
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 195
                            },
                            "start": {
                              "column": 48,
                              "line": 195
                            }
                          }
                        },
                        "range": [
                          6926,
                          6937
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 195
                          },
                          "start": {
                            "column": 48,
                            "line": 195
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6886,
                      6938
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 195
                      },
                      "start": {
                        "column": 8,
                        "line": 195
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        6947,
                        6963
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 196
                        },
                        "start": {
                          "column": 8,
                          "line": 196
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 196
                        },
                        "start": {
                          "column": 24,
                          "line": 196
                        }
                      },
                      "range": [
                        6963,
                        6976
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6965,
                            6976
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 196
                            },
                            "start": {
                              "column": 26,
                              "line": 196
                            }
                          }
                        },
                        "range": [
                          6965,
                          6976
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 196
                          },
                          "start": {
                            "column": 26,
                            "line": 196
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6947,
                      6977
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 196
                      },
                      "start": {
                        "column": 8,
                        "line": 196
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "range": [
                        6994,
                        7011
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 197
                        },
                        "start": {
                          "column": 16,
                          "line": 197
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 197
                        },
                        "start": {
                          "column": 33,
                          "line": 197
                        }
                      },
                      "range": [
                        7011,
                        7024
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            7013,
                            7024
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 197
                            },
                            "start": {
                              "column": 35,
                              "line": 197
                            }
                          }
                        },
                        "range": [
                          7013,
                          7024
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 197
                          },
                          "start": {
                            "column": 35,
                            "line": 197
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6986,
                      7025
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 197
                      },
                      "start": {
                        "column": 8,
                        "line": 197
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 198
                  },
                  "start": {
                    "column": 56,
                    "line": 193
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicPropertyTypes",
                "optional": false,
                "range": [
                  6785,
                  6823
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 193
                  },
                  "start": {
                    "column": 17,
                    "line": 193
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                6779,
                7031
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 198
                },
                "start": {
                  "column": 11,
                  "line": 193
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 198
              },
              "start": {
                "column": 4,
                "line": 193
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                7084,
                7295
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "range": [
                      7101,
                      7123
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 201
                      },
                      "start": {
                        "column": 15,
                        "line": 201
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 201
                      },
                      "start": {
                        "column": 37,
                        "line": 201
                      }
                    },
                    "range": [
                      7123,
                      7137
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          7125,
                          7137
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 201
                          },
                          "start": {
                            "column": 39,
                            "line": 201
                          }
                        }
                      },
                      "range": [
                        7125,
                        7137
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 201
                        },
                        "start": {
                          "column": 39,
                          "line": 201
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7094,
                    7138
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 201
                    },
                    "start": {
                      "column": 8,
                      "line": 201
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "range": [
                      7162,
                      7185
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 202
                      },
                      "start": {
                        "column": 23,
                        "line": 202
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 202
                      },
                      "start": {
                        "column": 46,
                        "line": 202
                      }
                    },
                    "range": [
                      7185,
                      7199
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          7187,
                          7199
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 202
                          },
                          "start": {
                            "column": 48,
                            "line": 202
                          }
                        }
                      },
                      "range": [
                        7187,
                        7199
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 202
                        },
                        "start": {
                          "column": 48,
                          "line": 202
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7147,
                    7200
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 202
                    },
                    "start": {
                      "column": 8,
                      "line": 202
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "range": [
                      7209,
                      7225
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 203
                      },
                      "start": {
                        "column": 8,
                        "line": 203
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 203
                      },
                      "start": {
                        "column": 24,
                        "line": 203
                      }
                    },
                    "range": [
                      7225,
                      7239
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          7227,
                          7239
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 203
                          },
                          "start": {
                            "column": 26,
                            "line": 203
                          }
                        }
                      },
                      "range": [
                        7227,
                        7239
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 203
                        },
                        "start": {
                          "column": 26,
                          "line": 203
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7209,
                    7240
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 203
                    },
                    "start": {
                      "column": 8,
                      "line": 203
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "range": [
                      7257,
                      7274
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 204
                      },
                      "start": {
                        "column": 16,
                        "line": 204
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 204
                      },
                      "start": {
                        "column": 33,
                        "line": 204
                      }
                    },
                    "range": [
                      7274,
                      7288
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          7276,
                          7288
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 204
                          },
                          "start": {
                            "column": 35,
                            "line": 204
                          }
                        }
                      },
                      "range": [
                        7276,
                        7288
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 204
                        },
                        "start": {
                          "column": 35,
                          "line": 204
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7249,
                    7289
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 204
                    },
                    "start": {
                      "column": 8,
                      "line": 204
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 205
                },
                "start": {
                  "column": 51,
                  "line": 200
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivatePropertyTypes",
              "optional": false,
              "range": [
                7043,
                7083
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 200
                },
                "start": {
                  "column": 10,
                  "line": 200
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              7037,
              7295
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 205
              },
              "start": {
                "column": 4,
                "line": 200
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                7347,
                7554
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "range": [
                      7364,
                      7386
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 208
                      },
                      "start": {
                        "column": 15,
                        "line": 208
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 208
                      },
                      "start": {
                        "column": 37,
                        "line": 208
                      }
                    },
                    "range": [
                      7386,
                      7399
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          7388,
                          7399
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 208
                          },
                          "start": {
                            "column": 39,
                            "line": 208
                          }
                        }
                      },
                      "range": [
                        7388,
                        7399
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 208
                        },
                        "start": {
                          "column": 39,
                          "line": 208
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7357,
                    7400
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 208
                    },
                    "start": {
                      "column": 8,
                      "line": 208
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "range": [
                      7424,
                      7447
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 209
                      },
                      "start": {
                        "column": 23,
                        "line": 209
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 209
                      },
                      "start": {
                        "column": 46,
                        "line": 209
                      }
                    },
                    "range": [
                      7447,
                      7460
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          7449,
                          7460
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 209
                          },
                          "start": {
                            "column": 48,
                            "line": 209
                          }
                        }
                      },
                      "range": [
                        7449,
                        7460
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 209
                        },
                        "start": {
                          "column": 48,
                          "line": 209
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7409,
                    7461
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 209
                    },
                    "start": {
                      "column": 8,
                      "line": 209
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "range": [
                      7470,
                      7486
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 210
                      },
                      "start": {
                        "column": 8,
                        "line": 210
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 210
                      },
                      "start": {
                        "column": 24,
                        "line": 210
                      }
                    },
                    "range": [
                      7486,
                      7499
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          7488,
                          7499
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 210
                          },
                          "start": {
                            "column": 26,
                            "line": 210
                          }
                        }
                      },
                      "range": [
                        7488,
                        7499
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 210
                        },
                        "start": {
                          "column": 26,
                          "line": 210
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7470,
                    7500
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 210
                    },
                    "start": {
                      "column": 8,
                      "line": 210
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "range": [
                      7517,
                      7534
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 211
                      },
                      "start": {
                        "column": 16,
                        "line": 211
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 211
                      },
                      "start": {
                        "column": 33,
                        "line": 211
                      }
                    },
                    "range": [
                      7534,
                      7547
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          7536,
                          7547
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 211
                          },
                          "start": {
                            "column": 35,
                            "line": 211
                          }
                        }
                      },
                      "range": [
                        7536,
                        7547
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 211
                        },
                        "start": {
                          "column": 35,
                          "line": 211
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    7509,
                    7548
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 211
                    },
                    "start": {
                      "column": 8,
                      "line": 211
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 212
                },
                "start": {
                  "column": 50,
                  "line": 207
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicPropertyTypes",
              "optional": false,
              "range": [
                7307,
                7346
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 207
                },
                "start": {
                  "column": 10,
                  "line": 207
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              7301,
              7554
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 212
              },
              "start": {
                "column": 4,
                "line": 207
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              7560,
              7619
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
                    "name": "publicVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 214
                        },
                        "start": {
                          "column": 48,
                          "line": 214
                        }
                      },
                      "range": [
                        7604,
                        7618
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            7606,
                            7618
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 214
                            },
                            "start": {
                              "column": 50,
                              "line": 214
                            }
                          }
                        },
                        "range": [
                          7606,
                          7618
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 214
                          },
                          "start": {
                            "column": 50,
                            "line": 214
                          }
                        }
                      }
                    },
                    "range": [
                      7571,
                      7618
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 214
                      },
                      "start": {
                        "column": 15,
                        "line": 214
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    7571,
                    7618
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 214
                    },
                    "start": {
                      "column": 15,
                      "line": 214
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                7567,
                7619
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 214
                },
                "start": {
                  "column": 11,
                  "line": 214
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 63,
                "line": 214
              },
              "start": {
                "column": 4,
                "line": 214
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              7625,
              7682
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
                    "name": "publicVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 215
                        },
                        "start": {
                          "column": 47,
                          "line": 215
                        }
                      },
                      "range": [
                        7668,
                        7681
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            7670,
                            7681
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 215
                            },
                            "start": {
                              "column": 49,
                              "line": 215
                            }
                          }
                        },
                        "range": [
                          7670,
                          7681
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 215
                          },
                          "start": {
                            "column": 49,
                            "line": 215
                          }
                        }
                      }
                    },
                    "range": [
                      7636,
                      7681
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 215
                      },
                      "start": {
                        "column": 15,
                        "line": 215
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    7636,
                    7681
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 215
                    },
                    "start": {
                      "column": 15,
                      "line": 215
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                7632,
                7682
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 215
                },
                "start": {
                  "column": 11,
                  "line": 215
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 61,
                "line": 215
              },
              "start": {
                "column": 4,
                "line": 215
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
                  "name": "privateVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 216
                      },
                      "start": {
                        "column": 42,
                        "line": 216
                      }
                    },
                    "range": [
                      7725,
                      7739
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          7727,
                          7739
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 216
                          },
                          "start": {
                            "column": 44,
                            "line": 216
                          }
                        }
                      },
                      "range": [
                        7727,
                        7739
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 216
                        },
                        "start": {
                          "column": 44,
                          "line": 216
                        }
                      }
                    }
                  },
                  "range": [
                    7691,
                    7739
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 216
                    },
                    "start": {
                      "column": 8,
                      "line": 216
                    }
                  }
                },
                "init": null,
                "range": [
                  7691,
                  7739
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 216
                  },
                  "start": {
                    "column": 8,
                    "line": 216
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              7687,
              7740
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 216
              },
              "start": {
                "column": 4,
                "line": 216
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
                  "name": "privateVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 217
                      },
                      "start": {
                        "column": 41,
                        "line": 217
                      }
                    },
                    "range": [
                      7782,
                      7795
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          7784,
                          7795
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 217
                          },
                          "start": {
                            "column": 43,
                            "line": 217
                          }
                        }
                      },
                      "range": [
                        7784,
                        7795
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 217
                        },
                        "start": {
                          "column": 43,
                          "line": 217
                        }
                      }
                    }
                  },
                  "range": [
                    7749,
                    7795
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 217
                    },
                    "start": {
                      "column": 8,
                      "line": 217
                    }
                  }
                },
                "init": null,
                "range": [
                  7749,
                  7795
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 217
                  },
                  "start": {
                    "column": 8,
                    "line": 217
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              7745,
              7796
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 217
              },
              "start": {
                "column": 4,
                "line": 217
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              7802,
              7876
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
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 219
                        },
                        "start": {
                          "column": 63,
                          "line": 219
                        }
                      },
                      "range": [
                        7861,
                        7875
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            7863,
                            7875
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 219
                            },
                            "start": {
                              "column": 65,
                              "line": 219
                            }
                          }
                        },
                        "range": [
                          7863,
                          7875
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 219
                          },
                          "start": {
                            "column": 65,
                            "line": 219
                          }
                        }
                      }
                    },
                    "range": [
                      7821,
                      7875
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 219
                      },
                      "start": {
                        "column": 23,
                        "line": 219
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    7821,
                    7875
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 219
                    },
                    "start": {
                      "column": 23,
                      "line": 219
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                7809,
                7876
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 219
                },
                "start": {
                  "column": 11,
                  "line": 219
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 78,
                "line": 219
              },
              "start": {
                "column": 4,
                "line": 219
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              7882,
              7954
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
                    "name": "publicAmbientVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 220
                        },
                        "start": {
                          "column": 62,
                          "line": 220
                        }
                      },
                      "range": [
                        7940,
                        7953
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            7942,
                            7953
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 220
                            },
                            "start": {
                              "column": 64,
                              "line": 220
                            }
                          }
                        },
                        "range": [
                          7942,
                          7953
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 220
                          },
                          "start": {
                            "column": 64,
                            "line": 220
                          }
                        }
                      }
                    },
                    "range": [
                      7901,
                      7953
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 220
                      },
                      "start": {
                        "column": 23,
                        "line": 220
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    7901,
                    7953
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 220
                    },
                    "start": {
                      "column": 23,
                      "line": 220
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                7889,
                7954
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 220
                },
                "start": {
                  "column": 11,
                  "line": 220
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 76,
                "line": 220
              },
              "start": {
                "column": 4,
                "line": 220
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
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 221
                      },
                      "start": {
                        "column": 57,
                        "line": 221
                      }
                    },
                    "range": [
                      8012,
                      8026
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          8014,
                          8026
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 221
                          },
                          "start": {
                            "column": 59,
                            "line": 221
                          }
                        }
                      },
                      "range": [
                        8014,
                        8026
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 221
                        },
                        "start": {
                          "column": 59,
                          "line": 221
                        }
                      }
                    }
                  },
                  "range": [
                    7971,
                    8026
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 221
                    },
                    "start": {
                      "column": 16,
                      "line": 221
                    }
                  }
                },
                "init": null,
                "range": [
                  7971,
                  8026
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 221
                  },
                  "start": {
                    "column": 16,
                    "line": 221
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              7959,
              8027
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 221
              },
              "start": {
                "column": 4,
                "line": 221
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
                  "name": "privateAmbientVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 222
                      },
                      "start": {
                        "column": 56,
                        "line": 222
                      }
                    },
                    "range": [
                      8084,
                      8097
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          8086,
                          8097
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 222
                          },
                          "start": {
                            "column": 58,
                            "line": 222
                          }
                        }
                      },
                      "range": [
                        8086,
                        8097
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 222
                        },
                        "start": {
                          "column": 58,
                          "line": 222
                        }
                      }
                    }
                  },
                  "range": [
                    8044,
                    8097
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 222
                    },
                    "start": {
                      "column": 16,
                      "line": 222
                    }
                  }
                },
                "init": null,
                "range": [
                  8044,
                  8097
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 222
                  },
                  "start": {
                    "column": 16,
                    "line": 222
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              8032,
              8098
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 222
              },
              "start": {
                "column": 4,
                "line": 222
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              8104,
              8222
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  8167,
                  8222
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        8177,
                        8187
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 225
                        },
                        "start": {
                          "column": 8,
                          "line": 225
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
                          "column": 45,
                          "line": 225
                        },
                        "start": {
                          "column": 18,
                          "line": 225
                        }
                      },
                      "range": [
                        8187,
                        8214
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              8189,
                              8202
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 225
                              },
                              "start": {
                                "column": 20,
                                "line": 225
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              8203,
                              8214
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 225
                              },
                              "start": {
                                "column": 34,
                                "line": 225
                              }
                            }
                          },
                          "range": [
                            8189,
                            8214
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 225
                            },
                            "start": {
                              "column": 20,
                              "line": 225
                            }
                          }
                        },
                        "range": [
                          8189,
                          8214
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 225
                          },
                          "start": {
                            "column": 20,
                            "line": 225
                          }
                        }
                      }
                    },
                    "range": [
                      8177,
                      8215
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 225
                      },
                      "start": {
                        "column": 8,
                        "line": 225
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 226
                  },
                  "start": {
                    "column": 67,
                    "line": 224
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "range": [
                  8121,
                  8166
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 224
                  },
                  "start": {
                    "column": 21,
                    "line": 224
                  }
                }
              },
              "range": [
                8111,
                8222
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 226
                },
                "start": {
                  "column": 11,
                  "line": 224
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 226
              },
              "start": {
                "column": 4,
                "line": 224
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              8227,
              8410
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  8282,
                  8410
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        8299,
                        8321
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 228
                        },
                        "start": {
                          "column": 15,
                          "line": 228
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 228
                        },
                        "start": {
                          "column": 37,
                          "line": 228
                        }
                      },
                      "range": [
                        8321,
                        8348
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              8323,
                              8336
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 228
                              },
                              "start": {
                                "column": 39,
                                "line": 228
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              8337,
                              8348
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 228
                              },
                              "start": {
                                "column": 53,
                                "line": 228
                              }
                            }
                          },
                          "range": [
                            8323,
                            8348
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 228
                            },
                            "start": {
                              "column": 39,
                              "line": 228
                            }
                          }
                        },
                        "range": [
                          8323,
                          8348
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 228
                          },
                          "start": {
                            "column": 39,
                            "line": 228
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      8292,
                      8349
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 228
                      },
                      "start": {
                        "column": 8,
                        "line": 228
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        8359,
                        8375
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 229
                        },
                        "start": {
                          "column": 8,
                          "line": 229
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 229
                        },
                        "start": {
                          "column": 24,
                          "line": 229
                        }
                      },
                      "range": [
                        8375,
                        8402
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              8377,
                              8390
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 229
                              },
                              "start": {
                                "column": 26,
                                "line": 229
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              8391,
                              8402
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 229
                              },
                              "start": {
                                "column": 40,
                                "line": 229
                              }
                            }
                          },
                          "range": [
                            8377,
                            8402
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 229
                            },
                            "start": {
                              "column": 26,
                              "line": 229
                            }
                          }
                        },
                        "range": [
                          8377,
                          8402
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 229
                          },
                          "start": {
                            "column": 26,
                            "line": 229
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      8359,
                      8403
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 229
                      },
                      "start": {
                        "column": 8,
                        "line": 229
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 230
                  },
                  "start": {
                    "column": 59,
                    "line": 227
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModulePropertyTypes",
                "optional": false,
                "range": [
                  8240,
                  8281
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 227
                  },
                  "start": {
                    "column": 17,
                    "line": 227
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                8234,
                8410
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 230
                },
                "start": {
                  "column": 11,
                  "line": 227
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 230
              },
              "start": {
                "column": 4,
                "line": 227
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              8415,
              8493
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
                    "name": "publicVarWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 231
                        },
                        "start": {
                          "column": 54,
                          "line": 231
                        }
                      },
                      "range": [
                        8465,
                        8492
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              8467,
                              8480
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 231
                              },
                              "start": {
                                "column": 56,
                                "line": 231
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              8481,
                              8492
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 231
                              },
                              "start": {
                                "column": 70,
                                "line": 231
                              }
                            }
                          },
                          "range": [
                            8467,
                            8492
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 231
                            },
                            "start": {
                              "column": 56,
                              "line": 231
                            }
                          }
                        },
                        "range": [
                          8467,
                          8492
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 231
                          },
                          "start": {
                            "column": 56,
                            "line": 231
                          }
                        }
                      }
                    },
                    "range": [
                      8426,
                      8492
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 231
                      },
                      "start": {
                        "column": 15,
                        "line": 231
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    8426,
                    8492
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 231
                    },
                    "start": {
                      "column": 15,
                      "line": 231
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                8422,
                8493
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 231
                },
                "start": {
                  "column": 11,
                  "line": 231
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 82,
                "line": 231
              },
              "start": {
                "column": 4,
                "line": 231
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              8499,
              8592
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
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 232
                        },
                        "start": {
                          "column": 69,
                          "line": 232
                        }
                      },
                      "range": [
                        8564,
                        8591
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              8566,
                              8579
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 232
                              },
                              "start": {
                                "column": 71,
                                "line": 232
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              8580,
                              8591
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 232
                              },
                              "start": {
                                "column": 85,
                                "line": 232
                              }
                            }
                          },
                          "range": [
                            8566,
                            8591
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 232
                            },
                            "start": {
                              "column": 71,
                              "line": 232
                            }
                          }
                        },
                        "range": [
                          8566,
                          8591
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 232
                          },
                          "start": {
                            "column": 71,
                            "line": 232
                          }
                        }
                      }
                    },
                    "range": [
                      8518,
                      8591
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 232
                      },
                      "start": {
                        "column": 23,
                        "line": 232
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    8518,
                    8591
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 232
                    },
                    "start": {
                      "column": 23,
                      "line": 232
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                8506,
                8592
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 232
                },
                "start": {
                  "column": 11,
                  "line": 232
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 97,
                "line": 232
              },
              "start": {
                "column": 4,
                "line": 232
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                8655,
                8709
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProperty",
                    "optional": false,
                    "range": [
                      8665,
                      8675
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 235
                      },
                      "start": {
                        "column": 8,
                        "line": 235
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
                        "column": 45,
                        "line": 235
                      },
                      "start": {
                        "column": 18,
                        "line": 235
                      }
                    },
                    "range": [
                      8675,
                      8702
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            8677,
                            8690
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 235
                            },
                            "start": {
                              "column": 20,
                              "line": 235
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            8691,
                            8702
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 235
                            },
                            "start": {
                              "column": 34,
                              "line": 235
                            }
                          }
                        },
                        "range": [
                          8677,
                          8702
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 235
                          },
                          "start": {
                            "column": 20,
                            "line": 235
                          }
                        }
                      },
                      "range": [
                        8677,
                        8702
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 235
                        },
                        "start": {
                          "column": 20,
                          "line": 235
                        }
                      }
                    }
                  },
                  "range": [
                    8665,
                    8703
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 235
                    },
                    "start": {
                      "column": 8,
                      "line": 235
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 236
                },
                "start": {
                  "column": 61,
                  "line": 234
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "optional": false,
              "range": [
                8608,
                8654
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 234
                },
                "start": {
                  "column": 14,
                  "line": 234
                }
              }
            },
            "range": [
              8598,
              8709
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 236
              },
              "start": {
                "column": 4,
                "line": 234
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                8763,
                8889
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "range": [
                      8780,
                      8802
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 238
                      },
                      "start": {
                        "column": 15,
                        "line": 238
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 238
                      },
                      "start": {
                        "column": 37,
                        "line": 238
                      }
                    },
                    "range": [
                      8802,
                      8829
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            8804,
                            8817
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 238
                            },
                            "start": {
                              "column": 39,
                              "line": 238
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            8818,
                            8829
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 238
                            },
                            "start": {
                              "column": 53,
                              "line": 238
                            }
                          }
                        },
                        "range": [
                          8804,
                          8829
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 238
                          },
                          "start": {
                            "column": 39,
                            "line": 238
                          }
                        }
                      },
                      "range": [
                        8804,
                        8829
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 238
                        },
                        "start": {
                          "column": 39,
                          "line": 238
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    8773,
                    8830
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 238
                    },
                    "start": {
                      "column": 8,
                      "line": 238
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "range": [
                      8839,
                      8855
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 239
                      },
                      "start": {
                        "column": 8,
                        "line": 239
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 239
                      },
                      "start": {
                        "column": 24,
                        "line": 239
                      }
                    },
                    "range": [
                      8855,
                      8882
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            8857,
                            8870
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 239
                            },
                            "start": {
                              "column": 26,
                              "line": 239
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            8871,
                            8882
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 239
                            },
                            "start": {
                              "column": 40,
                              "line": 239
                            }
                          }
                        },
                        "range": [
                          8857,
                          8882
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 239
                          },
                          "start": {
                            "column": 26,
                            "line": 239
                          }
                        }
                      },
                      "range": [
                        8857,
                        8882
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 239
                        },
                        "start": {
                          "column": 26,
                          "line": 239
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    8839,
                    8883
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 239
                    },
                    "start": {
                      "column": 8,
                      "line": 239
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 240
                },
                "start": {
                  "column": 53,
                  "line": 237
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModulePropertyTypes",
              "optional": false,
              "range": [
                8720,
                8762
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 237
                },
                "start": {
                  "column": 10,
                  "line": 237
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              8714,
              8889
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 240
              },
              "start": {
                "column": 4,
                "line": 237
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
                  "name": "privateVarWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 241
                      },
                      "start": {
                        "column": 48,
                        "line": 241
                      }
                    },
                    "range": [
                      8938,
                      8965
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            8940,
                            8953
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 241
                            },
                            "start": {
                              "column": 50,
                              "line": 241
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            8954,
                            8965
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 241
                            },
                            "start": {
                              "column": 64,
                              "line": 241
                            }
                          }
                        },
                        "range": [
                          8940,
                          8965
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 241
                          },
                          "start": {
                            "column": 50,
                            "line": 241
                          }
                        }
                      },
                      "range": [
                        8940,
                        8965
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 241
                        },
                        "start": {
                          "column": 50,
                          "line": 241
                        }
                      }
                    }
                  },
                  "range": [
                    8898,
                    8965
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 241
                    },
                    "start": {
                      "column": 8,
                      "line": 241
                    }
                  }
                },
                "init": null,
                "range": [
                  8898,
                  8965
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 241
                  },
                  "start": {
                    "column": 8,
                    "line": 241
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              8894,
              8966
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 241
              },
              "start": {
                "column": 4,
                "line": 241
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
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 242
                      },
                      "start": {
                        "column": 63,
                        "line": 242
                      }
                    },
                    "range": [
                      9030,
                      9057
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            9032,
                            9045
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 242
                            },
                            "start": {
                              "column": 65,
                              "line": 242
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            9046,
                            9057
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 242
                            },
                            "start": {
                              "column": 79,
                              "line": 242
                            }
                          }
                        },
                        "range": [
                          9032,
                          9057
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 242
                          },
                          "start": {
                            "column": 65,
                            "line": 242
                          }
                        }
                      },
                      "range": [
                        9032,
                        9057
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 242
                        },
                        "start": {
                          "column": 65,
                          "line": 242
                        }
                      }
                    }
                  },
                  "range": [
                    8983,
                    9057
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 242
                    },
                    "start": {
                      "column": 16,
                      "line": 242
                    }
                  }
                },
                "init": null,
                "range": [
                  8983,
                  9057
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 242
                  },
                  "start": {
                    "column": 16,
                    "line": 242
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              8971,
              9058
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 242
              },
              "start": {
                "column": 4,
                "line": 242
              }
            }
          }
        ],
        "range": [
          6022,
          9060
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 243
          },
          "start": {
            "column": 21,
            "line": 163
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          6008,
          6021
        ],
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 163
          },
          "start": {
            "column": 7,
            "line": 163
          }
        }
      },
      "kind": "module",
      "range": [
        6001,
        9060
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 243
        },
        "start": {
          "column": 0,
          "line": 163
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 244
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
    7021
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          26,
          29
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 26,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "range": [
          6,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          87,
          127
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProperty",
              "optional": false,
              "range": [
                93,
                103
              ],
              "loc": {
                "end": {
                  "column": 14,
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
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                103,
                124
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "range": [
                    105,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "range": [
                  105,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              93,
              125
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 57,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceWithPublicPropertyTypesInGlobal",
        "optional": false,
        "range": [
          40,
          86
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        30,
        127
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          181,
          400
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "range": [
                194,
                216
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              },
              "range": [
                216,
                237
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "range": [
                    218,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                "range": [
                  218,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 7
                  },
                  "start": {
                    "column": 35,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              187,
              238
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "range": [
                258,
                281
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 8
                },
                "start": {
                  "column": 42,
                  "line": 8
                }
              },
              "range": [
                281,
                302
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "range": [
                    283,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 8
                    },
                    "start": {
                      "column": 44,
                      "line": 8
                    }
                  }
                },
                "range": [
                  283,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              243,
              303
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "range": [
                308,
                324
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              },
              "range": [
                324,
                345
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "range": [
                    326,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                },
                "range": [
                  326,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              308,
              346
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "range": [
                359,
                376
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              },
              "range": [
                376,
                397
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "range": [
                    378,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 10
                    },
                    "start": {
                      "column": 31,
                      "line": 10
                    }
                  }
                },
                "range": [
                  378,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 10
                  }
                }
              }
            },
            "value": null,
            "range": [
              351,
              398
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
            "column": 53,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassWithWithPublicPropertyTypesInGlobal",
        "optional": false,
        "range": [
          134,
          180
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        128,
        400
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "publicVarWithPublicPropertyTypesInGlobal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 12
                },
                "start": {
                  "column": 44,
                  "line": 12
                }
              },
              "range": [
                445,
                466
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "range": [
                    447,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 12
                    },
                    "start": {
                      "column": 46,
                      "line": 12
                    }
                  }
                },
                "range": [
                  447,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 12
                  },
                  "start": {
                    "column": 46,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              405,
              466
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            405,
            466
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        401,
        467
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "publicAmbientVarWithPublicPropertyTypesInGlobal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 80,
                  "line": 13
                },
                "start": {
                  "column": 59,
                  "line": 13
                }
              },
              "range": [
                527,
                548
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "range": [
                    529,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 13
                    },
                    "start": {
                      "column": 61,
                      "line": 13
                    }
                  }
                },
                "range": [
                  529,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 13
                  },
                  "start": {
                    "column": 61,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              480,
              548
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            480,
            548
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        468,
        549
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
                604,
                611
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 23,
                  "line": 16
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "range": [
                591,
                603
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              585,
              611
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              617,
              649
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  642,
                  649
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 29,
                    "line": 19
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "range": [
                  630,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 19
                  },
                  "start": {
                    "column": 17,
                    "line": 19
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                624,
                649
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 19
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
                      705,
                      716
                    ],
                    "body": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 27,
                        "line": 23
                      }
                    }
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "range": [
                      692,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 14,
                        "line": 23
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    686,
                    716
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    726,
                    762
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        751,
                        762
                      ],
                      "body": [],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 27
                        },
                        "start": {
                          "column": 33,
                          "line": 26
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "range": [
                        739,
                        750
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 26
                        },
                        "start": {
                          "column": 21,
                          "line": 26
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      733,
                      762
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 27
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    772,
                    878
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "body": {
                      "type": "TSInterfaceBody",
                      "range": [
                        829,
                        878
                      ],
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myProperty",
                            "optional": false,
                            "range": [
                              843,
                              853
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 30
                              },
                              "start": {
                                "column": 12,
                                "line": 30
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
                                "column": 36,
                                "line": 30
                              },
                              "start": {
                                "column": 22,
                                "line": 30
                              }
                            },
                            "range": [
                              853,
                              867
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "range": [
                                  855,
                                  867
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                855,
                                867
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 30
                                },
                                "start": {
                                  "column": 24,
                                  "line": 30
                                }
                              }
                            }
                          },
                          "range": [
                            843,
                            868
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 31
                        },
                        "start": {
                          "column": 65,
                          "line": 29
                        }
                      }
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivatePropertyTypes",
                      "optional": false,
                      "range": [
                        789,
                        828
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 29
                        },
                        "start": {
                          "column": 25,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      779,
                      878
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 31
                      },
                      "start": {
                        "column": 15,
                        "line": 29
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    888,
                    992
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "body": {
                      "type": "TSInterfaceBody",
                      "range": [
                        944,
                        992
                      ],
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myProperty",
                            "optional": false,
                            "range": [
                              958,
                              968
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 34
                              },
                              "start": {
                                "column": 12,
                                "line": 34
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
                                "column": 35,
                                "line": 34
                              },
                              "start": {
                                "column": 22,
                                "line": 34
                              }
                            },
                            "range": [
                              968,
                              981
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  970,
                                  981
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                970,
                                981
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 34
                                },
                                "start": {
                                  "column": 24,
                                  "line": 34
                                }
                              }
                            }
                          },
                          "range": [
                            958,
                            982
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 34
                            },
                            "start": {
                              "column": 12,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 35
                        },
                        "start": {
                          "column": 64,
                          "line": 33
                        }
                      }
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPublicPropertyTypes",
                      "optional": false,
                      "range": [
                        905,
                        943
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 33
                        },
                        "start": {
                          "column": 25,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      895,
                      992
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 35
                      },
                      "start": {
                        "column": 15,
                        "line": 33
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      1053,
                      1102
                    ],
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myProperty",
                          "optional": false,
                          "range": [
                            1067,
                            1077
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 38
                            },
                            "start": {
                              "column": 12,
                              "line": 38
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
                              "column": 36,
                              "line": 38
                            },
                            "start": {
                              "column": 22,
                              "line": 38
                            }
                          },
                          "range": [
                            1077,
                            1091
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "range": [
                                1079,
                                1091
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 38
                                },
                                "start": {
                                  "column": 24,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              1079,
                              1091
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 38
                              },
                              "start": {
                                "column": 24,
                                "line": 38
                              }
                            }
                          }
                        },
                        "range": [
                          1067,
                          1092
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 39
                      },
                      "start": {
                        "column": 59,
                        "line": 37
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivatePropertyTypes",
                    "optional": false,
                    "range": [
                      1012,
                      1052
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 37
                      },
                      "start": {
                        "column": 18,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1002,
                    1102
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      1162,
                      1210
                    ],
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myProperty",
                          "optional": false,
                          "range": [
                            1176,
                            1186
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 42
                            },
                            "start": {
                              "column": 12,
                              "line": 42
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
                              "column": 35,
                              "line": 42
                            },
                            "start": {
                              "column": 22,
                              "line": 42
                            }
                          },
                          "range": [
                            1186,
                            1199
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                1188,
                                1199
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 42
                                },
                                "start": {
                                  "column": 24,
                                  "line": 42
                                }
                              }
                            },
                            "range": [
                              1188,
                              1199
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 42
                              },
                              "start": {
                                "column": 24,
                                "line": 42
                              }
                            }
                          }
                        },
                        "range": [
                          1176,
                          1200
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 42
                          },
                          "start": {
                            "column": 12,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 43
                      },
                      "start": {
                        "column": 58,
                        "line": 41
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPublicPropertyTypes",
                    "optional": false,
                    "range": [
                      1122,
                      1161
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 41
                      },
                      "start": {
                        "column": 18,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1112,
                    1210
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    1220,
                    1504
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        1273,
                        1504
                      ],
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "range": [
                              1294,
                              1316
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 46
                              },
                              "start": {
                                "column": 19,
                                "line": 46
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 46
                              },
                              "start": {
                                "column": 41,
                                "line": 46
                              }
                            },
                            "range": [
                              1316,
                              1330
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "range": [
                                  1318,
                                  1330
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 46
                                  }
                                }
                              },
                              "range": [
                                1318,
                                1330
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 46
                                },
                                "start": {
                                  "column": 43,
                                  "line": 46
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1287,
                            1331
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 46
                            },
                            "start": {
                              "column": 12,
                              "line": 46
                            }
                          }
                        },
                        {
                          "type": "PropertyDefinition",
                          "accessibility": "private",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticProperty",
                            "optional": false,
                            "range": [
                              1359,
                              1382
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 47
                              },
                              "start": {
                                "column": 27,
                                "line": 47
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 47
                              },
                              "start": {
                                "column": 50,
                                "line": 47
                              }
                            },
                            "range": [
                              1382,
                              1396
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "range": [
                                  1384,
                                  1396
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 47
                                  }
                                }
                              },
                              "range": [
                                1384,
                                1396
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 47
                                },
                                "start": {
                                  "column": 52,
                                  "line": 47
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1344,
                            1397
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 47
                            },
                            "start": {
                              "column": 12,
                              "line": 47
                            }
                          }
                        },
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "range": [
                              1410,
                              1426
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 48
                              },
                              "start": {
                                "column": 12,
                                "line": 48
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 48
                              },
                              "start": {
                                "column": 28,
                                "line": 48
                              }
                            },
                            "range": [
                              1426,
                              1440
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "range": [
                                  1428,
                                  1440
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 48
                                  }
                                }
                              },
                              "range": [
                                1428,
                                1440
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 48
                                },
                                "start": {
                                  "column": 30,
                                  "line": 48
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1410,
                            1441
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 48
                            },
                            "start": {
                              "column": 12,
                              "line": 48
                            }
                          }
                        },
                        {
                          "type": "PropertyDefinition",
                          "accessibility": "private",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateProperty",
                            "optional": false,
                            "range": [
                              1462,
                              1479
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 49
                              },
                              "start": {
                                "column": 20,
                                "line": 49
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 49
                              },
                              "start": {
                                "column": 37,
                                "line": 49
                              }
                            },
                            "range": [
                              1479,
                              1493
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "range": [
                                  1481,
                                  1493
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 49
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 49
                                  }
                                }
                              },
                              "range": [
                                1481,
                                1493
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 49
                                },
                                "start": {
                                  "column": 39,
                                  "line": 49
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1454,
                            1494
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 49
                            },
                            "start": {
                              "column": 12,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 50
                        },
                        "start": {
                          "column": 61,
                          "line": 45
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPrivatePropertyTypes",
                      "optional": false,
                      "range": [
                        1233,
                        1272
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 45
                        },
                        "start": {
                          "column": 21,
                          "line": 45
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      1227,
                      1504
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 50
                      },
                      "start": {
                        "column": 15,
                        "line": 45
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    1514,
                    1793
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        1566,
                        1793
                      ],
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "range": [
                              1587,
                              1609
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 53
                              },
                              "start": {
                                "column": 19,
                                "line": 53
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 53
                              },
                              "start": {
                                "column": 41,
                                "line": 53
                              }
                            },
                            "range": [
                              1609,
                              1622
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  1611,
                                  1622
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 53
                                  }
                                }
                              },
                              "range": [
                                1611,
                                1622
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 53
                                },
                                "start": {
                                  "column": 43,
                                  "line": 53
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1580,
                            1623
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 53
                            },
                            "start": {
                              "column": 12,
                              "line": 53
                            }
                          }
                        },
                        {
                          "type": "PropertyDefinition",
                          "accessibility": "private",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticProperty",
                            "optional": false,
                            "range": [
                              1651,
                              1674
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 54
                              },
                              "start": {
                                "column": 27,
                                "line": 54
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 54
                              },
                              "start": {
                                "column": 50,
                                "line": 54
                              }
                            },
                            "range": [
                              1674,
                              1687
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  1676,
                                  1687
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 54
                                  }
                                }
                              },
                              "range": [
                                1676,
                                1687
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 54
                                },
                                "start": {
                                  "column": 52,
                                  "line": 54
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1636,
                            1688
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 54
                            },
                            "start": {
                              "column": 12,
                              "line": 54
                            }
                          }
                        },
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "range": [
                              1701,
                              1717
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 55
                              },
                              "start": {
                                "column": 12,
                                "line": 55
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 55
                              },
                              "start": {
                                "column": 28,
                                "line": 55
                              }
                            },
                            "range": [
                              1717,
                              1730
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  1719,
                                  1730
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 55
                                  }
                                }
                              },
                              "range": [
                                1719,
                                1730
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 55
                                },
                                "start": {
                                  "column": 30,
                                  "line": 55
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1701,
                            1731
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 55
                            },
                            "start": {
                              "column": 12,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "PropertyDefinition",
                          "accessibility": "private",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateProperty",
                            "optional": false,
                            "range": [
                              1752,
                              1769
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 56
                              },
                              "start": {
                                "column": 20,
                                "line": 56
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 56
                              },
                              "start": {
                                "column": 37,
                                "line": 56
                              }
                            },
                            "range": [
                              1769,
                              1782
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  1771,
                                  1782
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 56
                                  }
                                }
                              },
                              "range": [
                                1771,
                                1782
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 56
                                },
                                "start": {
                                  "column": 39,
                                  "line": 56
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            1744,
                            1783
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 56
                            },
                            "start": {
                              "column": 12,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 57
                        },
                        "start": {
                          "column": 60,
                          "line": 52
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPublicPropertyTypes",
                      "optional": false,
                      "range": [
                        1527,
                        1565
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 52
                        },
                        "start": {
                          "column": 21,
                          "line": 52
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      1521,
                      1793
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 15,
                        "line": 52
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "ClassDeclaration",
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "range": [
                      1850,
                      2081
                    ],
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "range": [
                            1871,
                            1893
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 60
                            },
                            "start": {
                              "column": 19,
                              "line": 60
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 60
                            },
                            "start": {
                              "column": 41,
                              "line": 60
                            }
                          },
                          "range": [
                            1893,
                            1907
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "range": [
                                1895,
                                1907
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 60
                                },
                                "start": {
                                  "column": 43,
                                  "line": 60
                                }
                              }
                            },
                            "range": [
                              1895,
                              1907
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 60
                              },
                              "start": {
                                "column": 43,
                                "line": 60
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          1864,
                          1908
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 60
                          },
                          "start": {
                            "column": 12,
                            "line": 60
                          }
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "accessibility": "private",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticProperty",
                          "optional": false,
                          "range": [
                            1936,
                            1959
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 61
                            },
                            "start": {
                              "column": 27,
                              "line": 61
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 61
                            },
                            "start": {
                              "column": 50,
                              "line": 61
                            }
                          },
                          "range": [
                            1959,
                            1973
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "range": [
                                1961,
                                1973
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 61
                                },
                                "start": {
                                  "column": 52,
                                  "line": 61
                                }
                              }
                            },
                            "range": [
                              1961,
                              1973
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 61
                              },
                              "start": {
                                "column": 52,
                                "line": 61
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          1921,
                          1974
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
                          }
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "range": [
                            1987,
                            2003
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 62
                            },
                            "start": {
                              "column": 12,
                              "line": 62
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 62
                            },
                            "start": {
                              "column": 28,
                              "line": 62
                            }
                          },
                          "range": [
                            2003,
                            2017
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "range": [
                                2005,
                                2017
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 62
                                },
                                "start": {
                                  "column": 30,
                                  "line": 62
                                }
                              }
                            },
                            "range": [
                              2005,
                              2017
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 62
                              },
                              "start": {
                                "column": 30,
                                "line": 62
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          1987,
                          2018
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 62
                          },
                          "start": {
                            "column": 12,
                            "line": 62
                          }
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "accessibility": "private",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateProperty",
                          "optional": false,
                          "range": [
                            2039,
                            2056
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 63
                            },
                            "start": {
                              "column": 20,
                              "line": 63
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 63
                            },
                            "start": {
                              "column": 37,
                              "line": 63
                            }
                          },
                          "range": [
                            2056,
                            2070
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "range": [
                                2058,
                                2070
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 63
                                },
                                "start": {
                                  "column": 39,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              2058,
                              2070
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 63
                              },
                              "start": {
                                "column": 39,
                                "line": 63
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          2031,
                          2071
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 63
                          },
                          "start": {
                            "column": 12,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 64
                      },
                      "start": {
                        "column": 55,
                        "line": 59
                      }
                    }
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPrivatePropertyTypes",
                    "optional": false,
                    "range": [
                      1809,
                      1849
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 59
                      },
                      "start": {
                        "column": 14,
                        "line": 59
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    1803,
                    2081
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "ClassDeclaration",
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "range": [
                      2137,
                      2364
                    ],
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "range": [
                            2158,
                            2180
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 67
                            },
                            "start": {
                              "column": 19,
                              "line": 67
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 67
                            },
                            "start": {
                              "column": 41,
                              "line": 67
                            }
                          },
                          "range": [
                            2180,
                            2193
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                2182,
                                2193
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 67
                                },
                                "start": {
                                  "column": 43,
                                  "line": 67
                                }
                              }
                            },
                            "range": [
                              2182,
                              2193
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 67
                              },
                              "start": {
                                "column": 43,
                                "line": 67
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          2151,
                          2194
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "accessibility": "private",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticProperty",
                          "optional": false,
                          "range": [
                            2222,
                            2245
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 68
                            },
                            "start": {
                              "column": 27,
                              "line": 68
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 68
                            },
                            "start": {
                              "column": 50,
                              "line": 68
                            }
                          },
                          "range": [
                            2245,
                            2258
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                2247,
                                2258
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 68
                                },
                                "start": {
                                  "column": 52,
                                  "line": 68
                                }
                              }
                            },
                            "range": [
                              2247,
                              2258
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 68
                              },
                              "start": {
                                "column": 52,
                                "line": 68
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          2207,
                          2259
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
                          }
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "range": [
                            2272,
                            2288
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 69
                            },
                            "start": {
                              "column": 12,
                              "line": 69
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 69
                            },
                            "start": {
                              "column": 28,
                              "line": 69
                            }
                          },
                          "range": [
                            2288,
                            2301
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                2290,
                                2301
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 69
                                },
                                "start": {
                                  "column": 30,
                                  "line": 69
                                }
                              }
                            },
                            "range": [
                              2290,
                              2301
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 69
                              },
                              "start": {
                                "column": 30,
                                "line": 69
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          2272,
                          2302
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 69
                          },
                          "start": {
                            "column": 12,
                            "line": 69
                          }
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "accessibility": "private",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateProperty",
                          "optional": false,
                          "range": [
                            2323,
                            2340
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 70
                            },
                            "start": {
                              "column": 20,
                              "line": 70
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 70
                            },
                            "start": {
                              "column": 37,
                              "line": 70
                            }
                          },
                          "range": [
                            2340,
                            2353
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                2342,
                                2353
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 70
                                },
                                "start": {
                                  "column": 39,
                                  "line": 70
                                }
                              }
                            },
                            "range": [
                              2342,
                              2353
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 70
                              },
                              "start": {
                                "column": 39,
                                "line": 70
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          2315,
                          2354
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 70
                          },
                          "start": {
                            "column": 12,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 71
                      },
                      "start": {
                        "column": 54,
                        "line": 66
                      }
                    }
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPublicPropertyTypes",
                    "optional": false,
                    "range": [
                      2097,
                      2136
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 66
                      },
                      "start": {
                        "column": 14,
                        "line": 66
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    2091,
                    2364
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    2374,
                    2433
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
                          "name": "publicVarWithPrivatePropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 73
                              },
                              "start": {
                                "column": 52,
                                "line": 73
                              }
                            },
                            "range": [
                              2418,
                              2432
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "range": [
                                  2420,
                                  2432
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 73
                                  }
                                }
                              },
                              "range": [
                                2420,
                                2432
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 73
                                },
                                "start": {
                                  "column": 54,
                                  "line": 73
                                }
                              }
                            }
                          },
                          "range": [
                            2385,
                            2432
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 73
                            },
                            "start": {
                              "column": 19,
                              "line": 73
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2385,
                          2432
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 73
                          },
                          "start": {
                            "column": 19,
                            "line": 73
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2381,
                      2433
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 73
                      },
                      "start": {
                        "column": 15,
                        "line": 73
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    2442,
                    2499
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
                          "name": "publicVarWithPublicPropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 74
                              },
                              "start": {
                                "column": 51,
                                "line": 74
                              }
                            },
                            "range": [
                              2485,
                              2498
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  2487,
                                  2498
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 53,
                                    "line": 74
                                  }
                                }
                              },
                              "range": [
                                2487,
                                2498
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 74
                                },
                                "start": {
                                  "column": 53,
                                  "line": 74
                                }
                              }
                            }
                          },
                          "range": [
                            2453,
                            2498
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 74
                            },
                            "start": {
                              "column": 19,
                              "line": 74
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2453,
                          2498
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 74
                          },
                          "start": {
                            "column": 19,
                            "line": 74
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2449,
                      2499
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 74
                      },
                      "start": {
                        "column": 15,
                        "line": 74
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
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
                        "name": "privateVarWithPrivatePropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 75
                            },
                            "start": {
                              "column": 46,
                              "line": 75
                            }
                          },
                          "range": [
                            2546,
                            2560
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "range": [
                                2548,
                                2560
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 75
                                },
                                "start": {
                                  "column": 48,
                                  "line": 75
                                }
                              }
                            },
                            "range": [
                              2548,
                              2560
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 75
                              },
                              "start": {
                                "column": 48,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          2512,
                          2560
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 75
                          },
                          "start": {
                            "column": 12,
                            "line": 75
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2512,
                        2560
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 75
                        },
                        "start": {
                          "column": 12,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2508,
                    2561
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
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
                        "name": "privateVarWithPublicPropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 76
                            },
                            "start": {
                              "column": 45,
                              "line": 76
                            }
                          },
                          "range": [
                            2607,
                            2620
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                2609,
                                2620
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 76
                                },
                                "start": {
                                  "column": 47,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              2609,
                              2620
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 76
                              },
                              "start": {
                                "column": 47,
                                "line": 76
                              }
                            }
                          }
                        },
                        "range": [
                          2574,
                          2620
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 76
                          },
                          "start": {
                            "column": 12,
                            "line": 76
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2574,
                        2620
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 76
                        },
                        "start": {
                          "column": 12,
                          "line": 76
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2570,
                    2621
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 76
                    },
                    "start": {
                      "column": 8,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    2631,
                    2705
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
                          "name": "publicAmbientVarWithPrivatePropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 78
                              },
                              "start": {
                                "column": 67,
                                "line": 78
                              }
                            },
                            "range": [
                              2690,
                              2704
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "range": [
                                  2692,
                                  2704
                                ],
                                "loc": {
                                  "end": {
                                    "column": 81,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 78
                                  }
                                }
                              },
                              "range": [
                                2692,
                                2704
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 78
                                },
                                "start": {
                                  "column": 69,
                                  "line": 78
                                }
                              }
                            }
                          },
                          "range": [
                            2650,
                            2704
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 78
                            },
                            "start": {
                              "column": 27,
                              "line": 78
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2650,
                          2704
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 78
                          },
                          "start": {
                            "column": 27,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "declare": true,
                    "kind": "var",
                    "range": [
                      2638,
                      2705
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 78
                      },
                      "start": {
                        "column": 15,
                        "line": 78
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    2714,
                    2786
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
                          "name": "publicAmbientVarWithPublicPropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 79
                              },
                              "start": {
                                "column": 66,
                                "line": 79
                              }
                            },
                            "range": [
                              2772,
                              2785
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  2774,
                                  2785
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 79
                                  }
                                }
                              },
                              "range": [
                                2774,
                                2785
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 79
                                },
                                "start": {
                                  "column": 68,
                                  "line": 79
                                }
                              }
                            }
                          },
                          "range": [
                            2733,
                            2785
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 79
                            },
                            "start": {
                              "column": 27,
                              "line": 79
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2733,
                          2785
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 79
                          },
                          "start": {
                            "column": 27,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "declare": true,
                    "kind": "var",
                    "range": [
                      2721,
                      2786
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 79
                      },
                      "start": {
                        "column": 15,
                        "line": 79
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
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
                        "name": "privateAmbientVarWithPrivatePropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 80
                            },
                            "start": {
                              "column": 61,
                              "line": 80
                            }
                          },
                          "range": [
                            2848,
                            2862
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "range": [
                                2850,
                                2862
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 80
                                },
                                "start": {
                                  "column": 63,
                                  "line": 80
                                }
                              }
                            },
                            "range": [
                              2850,
                              2862
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 80
                              },
                              "start": {
                                "column": 63,
                                "line": 80
                              }
                            }
                          }
                        },
                        "range": [
                          2807,
                          2862
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 80
                          },
                          "start": {
                            "column": 20,
                            "line": 80
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2807,
                        2862
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 80
                        },
                        "start": {
                          "column": 20,
                          "line": 80
                        }
                      }
                    }
                  ],
                  "declare": true,
                  "kind": "var",
                  "range": [
                    2795,
                    2863
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 80
                    },
                    "start": {
                      "column": 8,
                      "line": 80
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
                        "name": "privateAmbientVarWithPublicPropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 81
                            },
                            "start": {
                              "column": 60,
                              "line": 81
                            }
                          },
                          "range": [
                            2924,
                            2937
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "range": [
                                2926,
                                2937
                              ],
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 81
                                },
                                "start": {
                                  "column": 62,
                                  "line": 81
                                }
                              }
                            },
                            "range": [
                              2926,
                              2937
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 81
                              },
                              "start": {
                                "column": 62,
                                "line": 81
                              }
                            }
                          }
                        },
                        "range": [
                          2884,
                          2937
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 81
                          },
                          "start": {
                            "column": 20,
                            "line": 81
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2884,
                        2937
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 81
                        },
                        "start": {
                          "column": 20,
                          "line": 81
                        }
                      }
                    }
                  ],
                  "declare": true,
                  "kind": "var",
                  "range": [
                    2872,
                    2938
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    2948,
                    3073
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "body": {
                      "type": "TSInterfaceBody",
                      "range": [
                        3011,
                        3073
                      ],
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myProperty",
                            "optional": false,
                            "range": [
                              3025,
                              3035
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 84
                              },
                              "start": {
                                "column": 12,
                                "line": 84
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
                                "column": 49,
                                "line": 84
                              },
                              "start": {
                                "column": 22,
                                "line": 84
                              }
                            },
                            "range": [
                              3035,
                              3062
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "range": [
                                    3037,
                                    3050
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 84
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "range": [
                                    3051,
                                    3062
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 84
                                    }
                                  }
                                },
                                "range": [
                                  3037,
                                  3062
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 84
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 84
                                  }
                                }
                              },
                              "range": [
                                3037,
                                3062
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 84
                                },
                                "start": {
                                  "column": 24,
                                  "line": 84
                                }
                              }
                            }
                          },
                          "range": [
                            3025,
                            3063
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 84
                            },
                            "start": {
                              "column": 12,
                              "line": 84
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 85
                        },
                        "start": {
                          "column": 71,
                          "line": 83
                        }
                      }
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivateModulePropertyTypes",
                      "optional": false,
                      "range": [
                        2965,
                        3010
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 83
                        },
                        "start": {
                          "column": 25,
                          "line": 83
                        }
                      }
                    },
                    "range": [
                      2955,
                      3073
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 85
                      },
                      "start": {
                        "column": 15,
                        "line": 83
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    3082,
                    3275
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        3137,
                        3275
                      ],
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "range": [
                              3158,
                              3180
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 87
                              },
                              "start": {
                                "column": 19,
                                "line": 87
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 87
                              },
                              "start": {
                                "column": 41,
                                "line": 87
                              }
                            },
                            "range": [
                              3180,
                              3207
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "range": [
                                    3182,
                                    3195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 87
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 87
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "range": [
                                    3196,
                                    3207
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 68,
                                      "line": 87
                                    },
                                    "start": {
                                      "column": 57,
                                      "line": 87
                                    }
                                  }
                                },
                                "range": [
                                  3182,
                                  3207
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 87
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 87
                                  }
                                }
                              },
                              "range": [
                                3182,
                                3207
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 87
                                },
                                "start": {
                                  "column": 43,
                                  "line": 87
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            3151,
                            3208
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 87
                            },
                            "start": {
                              "column": 12,
                              "line": 87
                            }
                          }
                        },
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "range": [
                              3221,
                              3237
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 88
                              },
                              "start": {
                                "column": 12,
                                "line": 88
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 88
                              },
                              "start": {
                                "column": 28,
                                "line": 88
                              }
                            },
                            "range": [
                              3237,
                              3264
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "range": [
                                    3239,
                                    3252
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 88
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "range": [
                                    3253,
                                    3264
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 88
                                    }
                                  }
                                },
                                "range": [
                                  3239,
                                  3264
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 88
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 88
                                  }
                                }
                              },
                              "range": [
                                3239,
                                3264
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 88
                                },
                                "start": {
                                  "column": 30,
                                  "line": 88
                                }
                              }
                            }
                          },
                          "value": null,
                          "range": [
                            3221,
                            3265
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 88
                            },
                            "start": {
                              "column": 12,
                              "line": 88
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 89
                        },
                        "start": {
                          "column": 63,
                          "line": 86
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithPrivateModulePropertyTypes",
                      "optional": false,
                      "range": [
                        3095,
                        3136
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 86
                        },
                        "start": {
                          "column": 21,
                          "line": 86
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      3089,
                      3275
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 89
                      },
                      "start": {
                        "column": 15,
                        "line": 86
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 86
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    3284,
                    3362
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
                          "name": "publicVarWithPrivateModulePropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 90
                              },
                              "start": {
                                "column": 58,
                                "line": 90
                              }
                            },
                            "range": [
                              3334,
                              3361
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "range": [
                                    3336,
                                    3349
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 73,
                                      "line": 90
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 90
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "range": [
                                    3350,
                                    3361
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 90
                                    },
                                    "start": {
                                      "column": 74,
                                      "line": 90
                                    }
                                  }
                                },
                                "range": [
                                  3336,
                                  3361
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 90
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 90
                                  }
                                }
                              },
                              "range": [
                                3336,
                                3361
                              ],
                              "loc": {
                                "end": {
                                  "column": 85,
                                  "line": 90
                                },
                                "start": {
                                  "column": 60,
                                  "line": 90
                                }
                              }
                            }
                          },
                          "range": [
                            3295,
                            3361
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 90
                            },
                            "start": {
                              "column": 19,
                              "line": 90
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          3295,
                          3361
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 90
                          },
                          "start": {
                            "column": 19,
                            "line": 90
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3291,
                      3362
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 90
                      },
                      "start": {
                        "column": 15,
                        "line": 90
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    3371,
                    3464
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
                          "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 100,
                                "line": 91
                              },
                              "start": {
                                "column": 73,
                                "line": 91
                              }
                            },
                            "range": [
                              3436,
                              3463
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "range": [
                                    3438,
                                    3451
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 88,
                                      "line": 91
                                    },
                                    "start": {
                                      "column": 75,
                                      "line": 91
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "range": [
                                    3452,
                                    3463
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 100,
                                      "line": 91
                                    },
                                    "start": {
                                      "column": 89,
                                      "line": 91
                                    }
                                  }
                                },
                                "range": [
                                  3438,
                                  3463
                                ],
                                "loc": {
                                  "end": {
                                    "column": 100,
                                    "line": 91
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 91
                                  }
                                }
                              },
                              "range": [
                                3438,
                                3463
                              ],
                              "loc": {
                                "end": {
                                  "column": 100,
                                  "line": 91
                                },
                                "start": {
                                  "column": 75,
                                  "line": 91
                                }
                              }
                            }
                          },
                          "range": [
                            3390,
                            3463
                          ],
                          "loc": {
                            "end": {
                              "column": 100,
                              "line": 91
                            },
                            "start": {
                              "column": 27,
                              "line": 91
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          3390,
                          3463
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 91
                          },
                          "start": {
                            "column": 27,
                            "line": 91
                          }
                        }
                      }
                    ],
                    "declare": true,
                    "kind": "var",
                    "range": [
                      3378,
                      3464
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 91
                      },
                      "start": {
                        "column": 15,
                        "line": 91
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      3531,
                      3593
                    ],
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myProperty",
                          "optional": false,
                          "range": [
                            3545,
                            3555
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 94
                            },
                            "start": {
                              "column": 12,
                              "line": 94
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
                              "column": 49,
                              "line": 94
                            },
                            "start": {
                              "column": 22,
                              "line": 94
                            }
                          },
                          "range": [
                            3555,
                            3582
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "range": [
                                  3557,
                                  3570
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 94
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 94
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  3571,
                                  3582
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 94
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 94
                                  }
                                }
                              },
                              "range": [
                                3557,
                                3582
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 94
                                },
                                "start": {
                                  "column": 24,
                                  "line": 94
                                }
                              }
                            },
                            "range": [
                              3557,
                              3582
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 94
                              },
                              "start": {
                                "column": 24,
                                "line": 94
                              }
                            }
                          }
                        },
                        "range": [
                          3545,
                          3583
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 94
                          },
                          "start": {
                            "column": 12,
                            "line": 94
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 95
                      },
                      "start": {
                        "column": 65,
                        "line": 93
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivateModulePropertyTypes",
                    "optional": false,
                    "range": [
                      3484,
                      3530
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 93
                      },
                      "start": {
                        "column": 18,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    3474,
                    3593
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 95
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "ClassDeclaration",
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "range": [
                      3651,
                      3789
                    ],
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "range": [
                            3672,
                            3694
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 97
                            },
                            "start": {
                              "column": 19,
                              "line": 97
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 97
                            },
                            "start": {
                              "column": 41,
                              "line": 97
                            }
                          },
                          "range": [
                            3694,
                            3721
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "range": [
                                  3696,
                                  3709
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 97
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 97
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  3710,
                                  3721
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 97
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 97
                                  }
                                }
                              },
                              "range": [
                                3696,
                                3721
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 97
                                },
                                "start": {
                                  "column": 43,
                                  "line": 97
                                }
                              }
                            },
                            "range": [
                              3696,
                              3721
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 97
                              },
                              "start": {
                                "column": 43,
                                "line": 97
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          3665,
                          3722
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 97
                          },
                          "start": {
                            "column": 12,
                            "line": 97
                          }
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "range": [
                            3735,
                            3751
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 98
                            },
                            "start": {
                              "column": 12,
                              "line": 98
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 98
                            },
                            "start": {
                              "column": 28,
                              "line": 98
                            }
                          },
                          "range": [
                            3751,
                            3778
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "range": [
                                  3753,
                                  3766
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 98
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 98
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  3767,
                                  3778
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 98
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 98
                                  }
                                }
                              },
                              "range": [
                                3753,
                                3778
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 98
                                },
                                "start": {
                                  "column": 30,
                                  "line": 98
                                }
                              }
                            },
                            "range": [
                              3753,
                              3778
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 98
                              },
                              "start": {
                                "column": 30,
                                "line": 98
                              }
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          3735,
                          3779
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 98
                          },
                          "start": {
                            "column": 12,
                            "line": 98
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 99
                      },
                      "start": {
                        "column": 57,
                        "line": 96
                      }
                    }
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithPrivateModulePropertyTypes",
                    "optional": false,
                    "range": [
                      3608,
                      3650
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 96
                      },
                      "start": {
                        "column": 14,
                        "line": 96
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    3602,
                    3789
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 96
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
                        "name": "privateVarWithPrivateModulePropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 100
                            },
                            "start": {
                              "column": 52,
                              "line": 100
                            }
                          },
                          "range": [
                            3842,
                            3869
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "range": [
                                  3844,
                                  3857
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 100
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  3858,
                                  3869
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 100
                                  }
                                }
                              },
                              "range": [
                                3844,
                                3869
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 100
                                },
                                "start": {
                                  "column": 54,
                                  "line": 100
                                }
                              }
                            },
                            "range": [
                              3844,
                              3869
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 100
                              },
                              "start": {
                                "column": 54,
                                "line": 100
                              }
                            }
                          }
                        },
                        "range": [
                          3802,
                          3869
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 100
                          },
                          "start": {
                            "column": 12,
                            "line": 100
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        3802,
                        3869
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 100
                        },
                        "start": {
                          "column": 12,
                          "line": 100
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3798,
                    3870
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 100
                    },
                    "start": {
                      "column": 8,
                      "line": 100
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
                        "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 101
                            },
                            "start": {
                              "column": 67,
                              "line": 101
                            }
                          },
                          "range": [
                            3938,
                            3965
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "range": [
                                  3940,
                                  3953
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 101
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 101
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "range": [
                                  3954,
                                  3965
                                ],
                                "loc": {
                                  "end": {
                                    "column": 94,
                                    "line": 101
                                  },
                                  "start": {
                                    "column": 83,
                                    "line": 101
                                  }
                                }
                              },
                              "range": [
                                3940,
                                3965
                              ],
                              "loc": {
                                "end": {
                                  "column": 94,
                                  "line": 101
                                },
                                "start": {
                                  "column": 69,
                                  "line": 101
                                }
                              }
                            },
                            "range": [
                              3940,
                              3965
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 101
                              },
                              "start": {
                                "column": 69,
                                "line": 101
                              }
                            }
                          }
                        },
                        "range": [
                          3891,
                          3965
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 101
                          },
                          "start": {
                            "column": 20,
                            "line": 101
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        3891,
                        3965
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 101
                        },
                        "start": {
                          "column": 20,
                          "line": 101
                        }
                      }
                    }
                  ],
                  "declare": true,
                  "kind": "var",
                  "range": [
                    3879,
                    3966
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 101
                    },
                    "start": {
                      "column": 8,
                      "line": 101
                    }
                  }
                }
              ],
              "range": [
                676,
                3972
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 25,
                  "line": 22
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                662,
                675
              ],
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "loc": {
                "end": {
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "kind": "module",
            "range": [
              655,
              3972
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              3978,
              4086
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  4035,
                  4086
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        4045,
                        4055
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 105
                        },
                        "start": {
                          "column": 8,
                          "line": 105
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
                          "column": 32,
                          "line": 105
                        },
                        "start": {
                          "column": 18,
                          "line": 105
                        }
                      },
                      "range": [
                        4055,
                        4069
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4057,
                            4069
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 105
                            },
                            "start": {
                              "column": 20,
                              "line": 105
                            }
                          }
                        },
                        "range": [
                          4057,
                          4069
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 105
                          },
                          "start": {
                            "column": 20,
                            "line": 105
                          }
                        }
                      }
                    },
                    "range": [
                      4045,
                      4070
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 105
                      },
                      "start": {
                        "column": 8,
                        "line": 105
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 106
                  },
                  "start": {
                    "column": 61,
                    "line": 104
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "range": [
                  3995,
                  4034
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 104
                  },
                  "start": {
                    "column": 21,
                    "line": 104
                  }
                }
              },
              "range": [
                3985,
                4086
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 106
                },
                "start": {
                  "column": 11,
                  "line": 104
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              4092,
              4188
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  4148,
                  4188
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        4158,
                        4168
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 109
                        },
                        "start": {
                          "column": 8,
                          "line": 109
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
                          "line": 109
                        },
                        "start": {
                          "column": 18,
                          "line": 109
                        }
                      },
                      "range": [
                        4168,
                        4181
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4170,
                            4181
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 109
                            },
                            "start": {
                              "column": 20,
                              "line": 109
                            }
                          }
                        },
                        "range": [
                          4170,
                          4181
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 109
                          },
                          "start": {
                            "column": 20,
                            "line": 109
                          }
                        }
                      }
                    },
                    "range": [
                      4158,
                      4182
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 109
                      },
                      "start": {
                        "column": 8,
                        "line": 109
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 110
                  },
                  "start": {
                    "column": 60,
                    "line": 108
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicPropertyTypes",
                "optional": false,
                "range": [
                  4109,
                  4147
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 108
                  },
                  "start": {
                    "column": 21,
                    "line": 108
                  }
                }
              },
              "range": [
                4099,
                4188
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 110
                },
                "start": {
                  "column": 11,
                  "line": 108
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                4245,
                4286
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProperty",
                    "optional": false,
                    "range": [
                      4255,
                      4265
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 113
                      },
                      "start": {
                        "column": 8,
                        "line": 113
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
                        "column": 32,
                        "line": 113
                      },
                      "start": {
                        "column": 18,
                        "line": 113
                      }
                    },
                    "range": [
                      4265,
                      4279
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          4267,
                          4279
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 113
                          },
                          "start": {
                            "column": 20,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        4267,
                        4279
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 113
                        },
                        "start": {
                          "column": 20,
                          "line": 113
                        }
                      }
                    }
                  },
                  "range": [
                    4255,
                    4280
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 113
                    },
                    "start": {
                      "column": 8,
                      "line": 113
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 114
                },
                "start": {
                  "column": 55,
                  "line": 112
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "optional": false,
              "range": [
                4204,
                4244
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 112
                },
                "start": {
                  "column": 14,
                  "line": 112
                }
              }
            },
            "range": [
              4194,
              4286
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 112
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                4342,
                4382
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProperty",
                    "optional": false,
                    "range": [
                      4352,
                      4362
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 117
                      },
                      "start": {
                        "column": 8,
                        "line": 117
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
                        "line": 117
                      },
                      "start": {
                        "column": 18,
                        "line": 117
                      }
                    },
                    "range": [
                      4362,
                      4375
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          4364,
                          4375
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 117
                          },
                          "start": {
                            "column": 20,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        4364,
                        4375
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 117
                        },
                        "start": {
                          "column": 20,
                          "line": 117
                        }
                      }
                    }
                  },
                  "range": [
                    4352,
                    4376
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 117
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 118
                },
                "start": {
                  "column": 54,
                  "line": 116
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicPropertyTypes",
              "optional": false,
              "range": [
                4302,
                4341
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 116
                },
                "start": {
                  "column": 14,
                  "line": 116
                }
              }
            },
            "range": [
              4292,
              4382
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              4388,
              4670
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  4441,
                  4670
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        4458,
                        4480
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 121
                        },
                        "start": {
                          "column": 15,
                          "line": 121
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 121
                        },
                        "start": {
                          "column": 37,
                          "line": 121
                        }
                      },
                      "range": [
                        4480,
                        4494
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4482,
                            4494
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 121
                            },
                            "start": {
                              "column": 39,
                              "line": 121
                            }
                          }
                        },
                        "range": [
                          4482,
                          4494
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 121
                          },
                          "start": {
                            "column": 39,
                            "line": 121
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4451,
                      4495
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 121
                      },
                      "start": {
                        "column": 8,
                        "line": 121
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "range": [
                        4528,
                        4551
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 122
                        },
                        "start": {
                          "column": 23,
                          "line": 122
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 122
                        },
                        "start": {
                          "column": 46,
                          "line": 122
                        }
                      },
                      "range": [
                        4551,
                        4565
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4553,
                            4565
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 122
                            },
                            "start": {
                              "column": 48,
                              "line": 122
                            }
                          }
                        },
                        "range": [
                          4553,
                          4565
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 122
                          },
                          "start": {
                            "column": 48,
                            "line": 122
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4513,
                      4566
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 122
                      },
                      "start": {
                        "column": 8,
                        "line": 122
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        4575,
                        4591
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 123
                        },
                        "start": {
                          "column": 8,
                          "line": 123
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 123
                        },
                        "start": {
                          "column": 24,
                          "line": 123
                        }
                      },
                      "range": [
                        4591,
                        4605
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4593,
                            4605
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 123
                            },
                            "start": {
                              "column": 26,
                              "line": 123
                            }
                          }
                        },
                        "range": [
                          4593,
                          4605
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 123
                          },
                          "start": {
                            "column": 26,
                            "line": 123
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4575,
                      4606
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 123
                      },
                      "start": {
                        "column": 8,
                        "line": 123
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "range": [
                        4632,
                        4649
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 124
                        },
                        "start": {
                          "column": 16,
                          "line": 124
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 124
                        },
                        "start": {
                          "column": 33,
                          "line": 124
                        }
                      },
                      "range": [
                        4649,
                        4663
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            4651,
                            4663
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 124
                            },
                            "start": {
                              "column": 35,
                              "line": 124
                            }
                          }
                        },
                        "range": [
                          4651,
                          4663
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 124
                          },
                          "start": {
                            "column": 35,
                            "line": 124
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4624,
                      4664
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 124
                      },
                      "start": {
                        "column": 8,
                        "line": 124
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 125
                  },
                  "start": {
                    "column": 57,
                    "line": 120
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivatePropertyTypes",
                "optional": false,
                "range": [
                  4401,
                  4440
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 120
                  },
                  "start": {
                    "column": 17,
                    "line": 120
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                4395,
                4670
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 125
                },
                "start": {
                  "column": 11,
                  "line": 120
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 120
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              4676,
              4935
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  4728,
                  4935
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        4745,
                        4767
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 128
                        },
                        "start": {
                          "column": 15,
                          "line": 128
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 128
                        },
                        "start": {
                          "column": 37,
                          "line": 128
                        }
                      },
                      "range": [
                        4767,
                        4780
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4769,
                            4780
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 128
                            },
                            "start": {
                              "column": 39,
                              "line": 128
                            }
                          }
                        },
                        "range": [
                          4769,
                          4780
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 128
                          },
                          "start": {
                            "column": 39,
                            "line": 128
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4738,
                      4781
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 128
                      },
                      "start": {
                        "column": 8,
                        "line": 128
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "range": [
                        4805,
                        4828
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 129
                        },
                        "start": {
                          "column": 23,
                          "line": 129
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 129
                        },
                        "start": {
                          "column": 46,
                          "line": 129
                        }
                      },
                      "range": [
                        4828,
                        4841
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4830,
                            4841
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 129
                            },
                            "start": {
                              "column": 48,
                              "line": 129
                            }
                          }
                        },
                        "range": [
                          4830,
                          4841
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 129
                          },
                          "start": {
                            "column": 48,
                            "line": 129
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4790,
                      4842
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 129
                      },
                      "start": {
                        "column": 8,
                        "line": 129
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        4851,
                        4867
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 130
                        },
                        "start": {
                          "column": 8,
                          "line": 130
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 130
                        },
                        "start": {
                          "column": 24,
                          "line": 130
                        }
                      },
                      "range": [
                        4867,
                        4880
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4869,
                            4880
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 130
                            },
                            "start": {
                              "column": 26,
                              "line": 130
                            }
                          }
                        },
                        "range": [
                          4869,
                          4880
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 130
                          },
                          "start": {
                            "column": 26,
                            "line": 130
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4851,
                      4881
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 130
                      },
                      "start": {
                        "column": 8,
                        "line": 130
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "range": [
                        4898,
                        4915
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 131
                        },
                        "start": {
                          "column": 16,
                          "line": 131
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 131
                        },
                        "start": {
                          "column": 33,
                          "line": 131
                        }
                      },
                      "range": [
                        4915,
                        4928
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            4917,
                            4928
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 131
                            },
                            "start": {
                              "column": 35,
                              "line": 131
                            }
                          }
                        },
                        "range": [
                          4917,
                          4928
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 131
                          },
                          "start": {
                            "column": 35,
                            "line": 131
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      4890,
                      4929
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 131
                      },
                      "start": {
                        "column": 8,
                        "line": 131
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 132
                  },
                  "start": {
                    "column": 56,
                    "line": 127
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicPropertyTypes",
                "optional": false,
                "range": [
                  4689,
                  4727
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 127
                  },
                  "start": {
                    "column": 17,
                    "line": 127
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                4683,
                4935
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 132
                },
                "start": {
                  "column": 11,
                  "line": 127
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 127
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                4988,
                5199
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "range": [
                      5005,
                      5027
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 135
                      },
                      "start": {
                        "column": 15,
                        "line": 135
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 135
                      },
                      "start": {
                        "column": 37,
                        "line": 135
                      }
                    },
                    "range": [
                      5027,
                      5041
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          5029,
                          5041
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 135
                          },
                          "start": {
                            "column": 39,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        5029,
                        5041
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 135
                        },
                        "start": {
                          "column": 39,
                          "line": 135
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    4998,
                    5042
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 135
                    },
                    "start": {
                      "column": 8,
                      "line": 135
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "range": [
                      5066,
                      5089
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 136
                      },
                      "start": {
                        "column": 23,
                        "line": 136
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 136
                      },
                      "start": {
                        "column": 46,
                        "line": 136
                      }
                    },
                    "range": [
                      5089,
                      5103
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          5091,
                          5103
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 136
                          },
                          "start": {
                            "column": 48,
                            "line": 136
                          }
                        }
                      },
                      "range": [
                        5091,
                        5103
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 136
                        },
                        "start": {
                          "column": 48,
                          "line": 136
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    5051,
                    5104
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 136
                    },
                    "start": {
                      "column": 8,
                      "line": 136
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "range": [
                      5113,
                      5129
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 137
                      },
                      "start": {
                        "column": 8,
                        "line": 137
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 137
                      },
                      "start": {
                        "column": 24,
                        "line": 137
                      }
                    },
                    "range": [
                      5129,
                      5143
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          5131,
                          5143
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 137
                          },
                          "start": {
                            "column": 26,
                            "line": 137
                          }
                        }
                      },
                      "range": [
                        5131,
                        5143
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 137
                        },
                        "start": {
                          "column": 26,
                          "line": 137
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    5113,
                    5144
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 137
                    },
                    "start": {
                      "column": 8,
                      "line": 137
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "range": [
                      5161,
                      5178
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 138
                      },
                      "start": {
                        "column": 16,
                        "line": 138
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 138
                      },
                      "start": {
                        "column": 33,
                        "line": 138
                      }
                    },
                    "range": [
                      5178,
                      5192
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          5180,
                          5192
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 138
                          },
                          "start": {
                            "column": 35,
                            "line": 138
                          }
                        }
                      },
                      "range": [
                        5180,
                        5192
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 138
                        },
                        "start": {
                          "column": 35,
                          "line": 138
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    5153,
                    5193
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 138
                    },
                    "start": {
                      "column": 8,
                      "line": 138
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 139
                },
                "start": {
                  "column": 51,
                  "line": 134
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivatePropertyTypes",
              "optional": false,
              "range": [
                4947,
                4987
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 134
                },
                "start": {
                  "column": 10,
                  "line": 134
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              4941,
              5199
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 139
              },
              "start": {
                "column": 4,
                "line": 134
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                5251,
                5458
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "range": [
                      5268,
                      5290
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 142
                      },
                      "start": {
                        "column": 15,
                        "line": 142
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 142
                      },
                      "start": {
                        "column": 37,
                        "line": 142
                      }
                    },
                    "range": [
                      5290,
                      5303
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          5292,
                          5303
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 142
                          },
                          "start": {
                            "column": 39,
                            "line": 142
                          }
                        }
                      },
                      "range": [
                        5292,
                        5303
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 142
                        },
                        "start": {
                          "column": 39,
                          "line": 142
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    5261,
                    5304
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 142
                    },
                    "start": {
                      "column": 8,
                      "line": 142
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "range": [
                      5328,
                      5351
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 143
                      },
                      "start": {
                        "column": 23,
                        "line": 143
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 143
                      },
                      "start": {
                        "column": 46,
                        "line": 143
                      }
                    },
                    "range": [
                      5351,
                      5364
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          5353,
                          5364
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 143
                          },
                          "start": {
                            "column": 48,
                            "line": 143
                          }
                        }
                      },
                      "range": [
                        5353,
                        5364
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 143
                        },
                        "start": {
                          "column": 48,
                          "line": 143
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    5313,
                    5365
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 143
                    },
                    "start": {
                      "column": 8,
                      "line": 143
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "range": [
                      5374,
                      5390
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 144
                      },
                      "start": {
                        "column": 8,
                        "line": 144
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 144
                      },
                      "start": {
                        "column": 24,
                        "line": 144
                      }
                    },
                    "range": [
                      5390,
                      5403
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          5392,
                          5403
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 144
                          },
                          "start": {
                            "column": 26,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        5392,
                        5403
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 144
                        },
                        "start": {
                          "column": 26,
                          "line": 144
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    5374,
                    5404
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 144
                    },
                    "start": {
                      "column": 8,
                      "line": 144
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "range": [
                      5421,
                      5438
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 145
                      },
                      "start": {
                        "column": 16,
                        "line": 145
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 145
                      },
                      "start": {
                        "column": 33,
                        "line": 145
                      }
                    },
                    "range": [
                      5438,
                      5451
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          5440,
                          5451
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 145
                          },
                          "start": {
                            "column": 35,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        5440,
                        5451
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 145
                        },
                        "start": {
                          "column": 35,
                          "line": 145
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    5413,
                    5452
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 145
                    },
                    "start": {
                      "column": 8,
                      "line": 145
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 146
                },
                "start": {
                  "column": 50,
                  "line": 141
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicPropertyTypes",
              "optional": false,
              "range": [
                5211,
                5250
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 141
                },
                "start": {
                  "column": 10,
                  "line": 141
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              5205,
              5458
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 146
              },
              "start": {
                "column": 4,
                "line": 141
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              5464,
              5523
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
                    "name": "publicVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 148
                        },
                        "start": {
                          "column": 48,
                          "line": 148
                        }
                      },
                      "range": [
                        5508,
                        5522
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            5510,
                            5522
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 148
                            },
                            "start": {
                              "column": 50,
                              "line": 148
                            }
                          }
                        },
                        "range": [
                          5510,
                          5522
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 148
                          },
                          "start": {
                            "column": 50,
                            "line": 148
                          }
                        }
                      }
                    },
                    "range": [
                      5475,
                      5522
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 148
                      },
                      "start": {
                        "column": 15,
                        "line": 148
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    5475,
                    5522
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 148
                    },
                    "start": {
                      "column": 15,
                      "line": 148
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                5471,
                5523
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 148
                },
                "start": {
                  "column": 11,
                  "line": 148
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 63,
                "line": 148
              },
              "start": {
                "column": 4,
                "line": 148
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              5537,
              5594
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
                    "name": "publicVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 149
                        },
                        "start": {
                          "column": 47,
                          "line": 149
                        }
                      },
                      "range": [
                        5580,
                        5593
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            5582,
                            5593
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 149
                            },
                            "start": {
                              "column": 49,
                              "line": 149
                            }
                          }
                        },
                        "range": [
                          5582,
                          5593
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 149
                          },
                          "start": {
                            "column": 49,
                            "line": 149
                          }
                        }
                      }
                    },
                    "range": [
                      5548,
                      5593
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 149
                      },
                      "start": {
                        "column": 15,
                        "line": 149
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    5548,
                    5593
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 149
                    },
                    "start": {
                      "column": 15,
                      "line": 149
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                5544,
                5594
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 149
                },
                "start": {
                  "column": 11,
                  "line": 149
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 61,
                "line": 149
              },
              "start": {
                "column": 4,
                "line": 149
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
                  "name": "privateVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 150
                      },
                      "start": {
                        "column": 42,
                        "line": 150
                      }
                    },
                    "range": [
                      5637,
                      5651
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          5639,
                          5651
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 150
                          },
                          "start": {
                            "column": 44,
                            "line": 150
                          }
                        }
                      },
                      "range": [
                        5639,
                        5651
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 150
                        },
                        "start": {
                          "column": 44,
                          "line": 150
                        }
                      }
                    }
                  },
                  "range": [
                    5603,
                    5651
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 150
                    },
                    "start": {
                      "column": 8,
                      "line": 150
                    }
                  }
                },
                "init": null,
                "range": [
                  5603,
                  5651
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 150
                  },
                  "start": {
                    "column": 8,
                    "line": 150
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              5599,
              5652
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 150
              },
              "start": {
                "column": 4,
                "line": 150
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
                  "name": "privateVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 151
                      },
                      "start": {
                        "column": 41,
                        "line": 151
                      }
                    },
                    "range": [
                      5694,
                      5707
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          5696,
                          5707
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 151
                          },
                          "start": {
                            "column": 43,
                            "line": 151
                          }
                        }
                      },
                      "range": [
                        5696,
                        5707
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 151
                        },
                        "start": {
                          "column": 43,
                          "line": 151
                        }
                      }
                    }
                  },
                  "range": [
                    5661,
                    5707
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 151
                    },
                    "start": {
                      "column": 8,
                      "line": 151
                    }
                  }
                },
                "init": null,
                "range": [
                  5661,
                  5707
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 151
                  },
                  "start": {
                    "column": 8,
                    "line": 151
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              5657,
              5708
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 151
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              5714,
              5788
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
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 153
                        },
                        "start": {
                          "column": 63,
                          "line": 153
                        }
                      },
                      "range": [
                        5773,
                        5787
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            5775,
                            5787
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 153
                            },
                            "start": {
                              "column": 65,
                              "line": 153
                            }
                          }
                        },
                        "range": [
                          5775,
                          5787
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 153
                          },
                          "start": {
                            "column": 65,
                            "line": 153
                          }
                        }
                      }
                    },
                    "range": [
                      5733,
                      5787
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 153
                      },
                      "start": {
                        "column": 23,
                        "line": 153
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    5733,
                    5787
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 153
                    },
                    "start": {
                      "column": 23,
                      "line": 153
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                5721,
                5788
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 153
                },
                "start": {
                  "column": 11,
                  "line": 153
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 78,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              5802,
              5874
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
                    "name": "publicAmbientVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 154
                        },
                        "start": {
                          "column": 62,
                          "line": 154
                        }
                      },
                      "range": [
                        5860,
                        5873
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            5862,
                            5873
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 154
                            },
                            "start": {
                              "column": 64,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          5862,
                          5873
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 154
                          },
                          "start": {
                            "column": 64,
                            "line": 154
                          }
                        }
                      }
                    },
                    "range": [
                      5821,
                      5873
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 154
                      },
                      "start": {
                        "column": 23,
                        "line": 154
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    5821,
                    5873
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 154
                    },
                    "start": {
                      "column": 23,
                      "line": 154
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                5809,
                5874
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 154
                },
                "start": {
                  "column": 11,
                  "line": 154
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 76,
                "line": 154
              },
              "start": {
                "column": 4,
                "line": 154
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
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 155
                      },
                      "start": {
                        "column": 57,
                        "line": 155
                      }
                    },
                    "range": [
                      5932,
                      5946
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "range": [
                          5934,
                          5946
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 155
                          },
                          "start": {
                            "column": 59,
                            "line": 155
                          }
                        }
                      },
                      "range": [
                        5934,
                        5946
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 155
                        },
                        "start": {
                          "column": 59,
                          "line": 155
                        }
                      }
                    }
                  },
                  "range": [
                    5891,
                    5946
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 155
                    },
                    "start": {
                      "column": 16,
                      "line": 155
                    }
                  }
                },
                "init": null,
                "range": [
                  5891,
                  5946
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 155
                  },
                  "start": {
                    "column": 16,
                    "line": 155
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              5879,
              5947
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 155
              },
              "start": {
                "column": 4,
                "line": 155
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
                  "name": "privateAmbientVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 156
                      },
                      "start": {
                        "column": 56,
                        "line": 156
                      }
                    },
                    "range": [
                      6004,
                      6017
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "range": [
                          6006,
                          6017
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 156
                          },
                          "start": {
                            "column": 58,
                            "line": 156
                          }
                        }
                      },
                      "range": [
                        6006,
                        6017
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 156
                        },
                        "start": {
                          "column": 58,
                          "line": 156
                        }
                      }
                    }
                  },
                  "range": [
                    5964,
                    6017
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 156
                    },
                    "start": {
                      "column": 16,
                      "line": 156
                    }
                  }
                },
                "init": null,
                "range": [
                  5964,
                  6017
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 156
                  },
                  "start": {
                    "column": 16,
                    "line": 156
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              5952,
              6018
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 156
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6024,
              6150
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  6087,
                  6150
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProperty",
                      "optional": false,
                      "range": [
                        6097,
                        6107
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 159
                        },
                        "start": {
                          "column": 8,
                          "line": 159
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
                          "column": 45,
                          "line": 159
                        },
                        "start": {
                          "column": 18,
                          "line": 159
                        }
                      },
                      "range": [
                        6107,
                        6134
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              6109,
                              6122
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 159
                              },
                              "start": {
                                "column": 20,
                                "line": 159
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              6123,
                              6134
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 159
                              },
                              "start": {
                                "column": 34,
                                "line": 159
                              }
                            }
                          },
                          "range": [
                            6109,
                            6134
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 159
                            },
                            "start": {
                              "column": 20,
                              "line": 159
                            }
                          }
                        },
                        "range": [
                          6109,
                          6134
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 159
                          },
                          "start": {
                            "column": 20,
                            "line": 159
                          }
                        }
                      }
                    },
                    "range": [
                      6097,
                      6135
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 159
                      },
                      "start": {
                        "column": 8,
                        "line": 159
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 160
                  },
                  "start": {
                    "column": 67,
                    "line": 158
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "range": [
                  6041,
                  6086
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 158
                  },
                  "start": {
                    "column": 21,
                    "line": 158
                  }
                }
              },
              "range": [
                6031,
                6150
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 160
                },
                "start": {
                  "column": 11,
                  "line": 158
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 160
              },
              "start": {
                "column": 4,
                "line": 158
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6155,
              6354
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  6210,
                  6354
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "range": [
                        6227,
                        6249
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 162
                        },
                        "start": {
                          "column": 15,
                          "line": 162
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 162
                        },
                        "start": {
                          "column": 37,
                          "line": 162
                        }
                      },
                      "range": [
                        6249,
                        6276
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              6251,
                              6264
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 162
                              },
                              "start": {
                                "column": 39,
                                "line": 162
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              6265,
                              6276
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 162
                              },
                              "start": {
                                "column": 53,
                                "line": 162
                              }
                            }
                          },
                          "range": [
                            6251,
                            6276
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 162
                            },
                            "start": {
                              "column": 39,
                              "line": 162
                            }
                          }
                        },
                        "range": [
                          6251,
                          6276
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 162
                          },
                          "start": {
                            "column": 39,
                            "line": 162
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6220,
                      6277
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 162
                      },
                      "start": {
                        "column": 8,
                        "line": 162
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "range": [
                        6295,
                        6311
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 163
                        },
                        "start": {
                          "column": 8,
                          "line": 163
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 163
                        },
                        "start": {
                          "column": 24,
                          "line": 163
                        }
                      },
                      "range": [
                        6311,
                        6338
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              6313,
                              6326
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 163
                              },
                              "start": {
                                "column": 26,
                                "line": 163
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              6327,
                              6338
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 163
                              },
                              "start": {
                                "column": 40,
                                "line": 163
                              }
                            }
                          },
                          "range": [
                            6313,
                            6338
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 163
                            },
                            "start": {
                              "column": 26,
                              "line": 163
                            }
                          }
                        },
                        "range": [
                          6313,
                          6338
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 163
                          },
                          "start": {
                            "column": 26,
                            "line": 163
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      6295,
                      6339
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 163
                      },
                      "start": {
                        "column": 8,
                        "line": 163
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 164
                  },
                  "start": {
                    "column": 59,
                    "line": 161
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModulePropertyTypes",
                "optional": false,
                "range": [
                  6168,
                  6209
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 161
                  },
                  "start": {
                    "column": 17,
                    "line": 161
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                6162,
                6354
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 164
                },
                "start": {
                  "column": 11,
                  "line": 161
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 164
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6359,
              6437
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
                    "name": "publicVarWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 165
                        },
                        "start": {
                          "column": 54,
                          "line": 165
                        }
                      },
                      "range": [
                        6409,
                        6436
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              6411,
                              6424
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 165
                              },
                              "start": {
                                "column": 56,
                                "line": 165
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              6425,
                              6436
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 165
                              },
                              "start": {
                                "column": 70,
                                "line": 165
                              }
                            }
                          },
                          "range": [
                            6411,
                            6436
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 165
                            },
                            "start": {
                              "column": 56,
                              "line": 165
                            }
                          }
                        },
                        "range": [
                          6411,
                          6436
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 165
                          },
                          "start": {
                            "column": 56,
                            "line": 165
                          }
                        }
                      }
                    },
                    "range": [
                      6370,
                      6436
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 165
                      },
                      "start": {
                        "column": 15,
                        "line": 165
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    6370,
                    6436
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 165
                    },
                    "start": {
                      "column": 15,
                      "line": 165
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                6366,
                6437
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 165
                },
                "start": {
                  "column": 11,
                  "line": 165
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 82,
                "line": 165
              },
              "start": {
                "column": 4,
                "line": 165
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              6451,
              6544
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
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 166
                        },
                        "start": {
                          "column": 69,
                          "line": 166
                        }
                      },
                      "range": [
                        6516,
                        6543
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              6518,
                              6531
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 166
                              },
                              "start": {
                                "column": 71,
                                "line": 166
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "range": [
                              6532,
                              6543
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 166
                              },
                              "start": {
                                "column": 85,
                                "line": 166
                              }
                            }
                          },
                          "range": [
                            6518,
                            6543
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 166
                            },
                            "start": {
                              "column": 71,
                              "line": 166
                            }
                          }
                        },
                        "range": [
                          6518,
                          6543
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 166
                          },
                          "start": {
                            "column": 71,
                            "line": 166
                          }
                        }
                      }
                    },
                    "range": [
                      6470,
                      6543
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 166
                      },
                      "start": {
                        "column": 23,
                        "line": 166
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    6470,
                    6543
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 166
                    },
                    "start": {
                      "column": 23,
                      "line": 166
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                6458,
                6544
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 166
                },
                "start": {
                  "column": 11,
                  "line": 166
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 97,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 166
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                6616,
                6670
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProperty",
                    "optional": false,
                    "range": [
                      6626,
                      6636
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 169
                      },
                      "start": {
                        "column": 8,
                        "line": 169
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
                        "column": 45,
                        "line": 169
                      },
                      "start": {
                        "column": 18,
                        "line": 169
                      }
                    },
                    "range": [
                      6636,
                      6663
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            6638,
                            6651
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 169
                            },
                            "start": {
                              "column": 20,
                              "line": 169
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6652,
                            6663
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 169
                            },
                            "start": {
                              "column": 34,
                              "line": 169
                            }
                          }
                        },
                        "range": [
                          6638,
                          6663
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 169
                          },
                          "start": {
                            "column": 20,
                            "line": 169
                          }
                        }
                      },
                      "range": [
                        6638,
                        6663
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 169
                        },
                        "start": {
                          "column": 20,
                          "line": 169
                        }
                      }
                    }
                  },
                  "range": [
                    6626,
                    6664
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 169
                    },
                    "start": {
                      "column": 8,
                      "line": 169
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 170
                },
                "start": {
                  "column": 61,
                  "line": 168
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "optional": false,
              "range": [
                6569,
                6615
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 168
                },
                "start": {
                  "column": 14,
                  "line": 168
                }
              }
            },
            "range": [
              6559,
              6670
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 170
              },
              "start": {
                "column": 4,
                "line": 168
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                6724,
                6850
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "range": [
                      6741,
                      6763
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 172
                      },
                      "start": {
                        "column": 15,
                        "line": 172
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 172
                      },
                      "start": {
                        "column": 37,
                        "line": 172
                      }
                    },
                    "range": [
                      6763,
                      6790
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            6765,
                            6778
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 172
                            },
                            "start": {
                              "column": 39,
                              "line": 172
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6779,
                            6790
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 172
                            },
                            "start": {
                              "column": 53,
                              "line": 172
                            }
                          }
                        },
                        "range": [
                          6765,
                          6790
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 172
                          },
                          "start": {
                            "column": 39,
                            "line": 172
                          }
                        }
                      },
                      "range": [
                        6765,
                        6790
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 172
                        },
                        "start": {
                          "column": 39,
                          "line": 172
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    6734,
                    6791
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 172
                    },
                    "start": {
                      "column": 8,
                      "line": 172
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "range": [
                      6800,
                      6816
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 173
                      },
                      "start": {
                        "column": 8,
                        "line": 173
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 173
                      },
                      "start": {
                        "column": 24,
                        "line": 173
                      }
                    },
                    "range": [
                      6816,
                      6843
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            6818,
                            6831
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 173
                            },
                            "start": {
                              "column": 26,
                              "line": 173
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6832,
                            6843
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 173
                            },
                            "start": {
                              "column": 40,
                              "line": 173
                            }
                          }
                        },
                        "range": [
                          6818,
                          6843
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 173
                          },
                          "start": {
                            "column": 26,
                            "line": 173
                          }
                        }
                      },
                      "range": [
                        6818,
                        6843
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 173
                        },
                        "start": {
                          "column": 26,
                          "line": 173
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    6800,
                    6844
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 173
                    },
                    "start": {
                      "column": 8,
                      "line": 173
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 174
                },
                "start": {
                  "column": 53,
                  "line": 171
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModulePropertyTypes",
              "optional": false,
              "range": [
                6681,
                6723
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 171
                },
                "start": {
                  "column": 10,
                  "line": 171
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              6675,
              6850
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 171
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
                  "name": "privateVarWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 175
                      },
                      "start": {
                        "column": 48,
                        "line": 175
                      }
                    },
                    "range": [
                      6899,
                      6926
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            6901,
                            6914
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 175
                            },
                            "start": {
                              "column": 50,
                              "line": 175
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            6915,
                            6926
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 175
                            },
                            "start": {
                              "column": 64,
                              "line": 175
                            }
                          }
                        },
                        "range": [
                          6901,
                          6926
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 175
                          },
                          "start": {
                            "column": 50,
                            "line": 175
                          }
                        }
                      },
                      "range": [
                        6901,
                        6926
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 175
                        },
                        "start": {
                          "column": 50,
                          "line": 175
                        }
                      }
                    }
                  },
                  "range": [
                    6859,
                    6926
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 175
                    },
                    "start": {
                      "column": 8,
                      "line": 175
                    }
                  }
                },
                "init": null,
                "range": [
                  6859,
                  6926
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 175
                  },
                  "start": {
                    "column": 8,
                    "line": 175
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              6855,
              6927
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 175
              },
              "start": {
                "column": 4,
                "line": 175
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
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 176
                      },
                      "start": {
                        "column": 63,
                        "line": 176
                      }
                    },
                    "range": [
                      6991,
                      7018
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            6993,
                            7006
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 176
                            },
                            "start": {
                              "column": 65,
                              "line": 176
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            7007,
                            7018
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 176
                            },
                            "start": {
                              "column": 79,
                              "line": 176
                            }
                          }
                        },
                        "range": [
                          6993,
                          7018
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 176
                          },
                          "start": {
                            "column": 65,
                            "line": 176
                          }
                        }
                      },
                      "range": [
                        6993,
                        7018
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 176
                        },
                        "start": {
                          "column": 65,
                          "line": 176
                        }
                      }
                    }
                  },
                  "range": [
                    6944,
                    7018
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 176
                    },
                    "start": {
                      "column": 16,
                      "line": 176
                    }
                  }
                },
                "init": null,
                "range": [
                  6944,
                  7018
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 176
                  },
                  "start": {
                    "column": 16,
                    "line": 176
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              6932,
              7019
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 176
              },
              "start": {
                "column": 4,
                "line": 176
              }
            }
          }
        ],
        "range": [
          579,
          7021
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 177
          },
          "start": {
            "column": 28,
            "line": 15
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          558,
          578
        ],
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "loc": {
          "end": {
            "column": 27,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "kind": "module",
      "range": [
        551,
        7021
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 177
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 177
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
