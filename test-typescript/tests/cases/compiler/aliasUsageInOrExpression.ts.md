__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    52
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        51
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            19,
            51
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "someData",
                "optional": false,
                "range": [
                  32,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
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
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                },
                "range": [
                  40,
                  48
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    42,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                25,
                49
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
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
          "name": "Model",
          "optional": false,
          "range": [
            13,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          51
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
    155
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "range": [
          7,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./aliasUsageInOrExpression_backbone\"",
          "value": "./aliasUsageInOrExpression_backbone",
          "range": [
            26,
            63
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        },
        "range": [
          18,
          64
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        65
      ],
      "loc": {
        "end": {
          "column": 65,
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
        66,
        154
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            121,
            154
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 55,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "range": [
            79,
            97
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
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
            "name": "Backbone",
            "optional": false,
            "range": [
              106,
              114
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 2
              },
              "start": {
                "column": 40,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "range": [
              115,
              120
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 2
              },
              "start": {
                "column": 49,
                "line": 2
              }
            }
          },
          "range": [
            106,
            120
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 2
            },
            "start": {
              "column": 40,
              "line": 2
            }
          }
        },
        "range": [
          73,
          154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
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
    555
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "range": [
          7,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./aliasUsageInOrExpression_backbone\"",
          "value": "./aliasUsageInOrExpression_backbone",
          "range": [
            26,
            63
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        },
        "range": [
          18,
          64
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        65
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "range": [
          73,
          80
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
          "raw": "\"./aliasUsageInOrExpression_moduleA\"",
          "value": "./aliasUsageInOrExpression_moduleA",
          "range": [
            91,
            127
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 2
            }
          }
        },
        "range": [
          83,
          128
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "range": [
        66,
        129
      ],
      "loc": {
        "end": {
          "column": 63,
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
          163,
          213
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false,
              "range": [
                169,
                187
              ],
              "loc": {
                "end": {
                  "column": 22,
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
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              },
              "range": [
                187,
                210
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "range": [
                      196,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "range": [
                      205,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 4
                      },
                      "start": {
                        "column": 40,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    196,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
                    }
                  }
                },
                "range": [
                  189,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              169,
              211
            ],
            "loc": {
              "end": {
                "column": 46,
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
            "column": 33,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "range": [
          140,
          162
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        130,
        213
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                219,
                243
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "range": [
                    221,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 6
                    }
                  }
                },
                "range": [
                  221,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              218,
              243
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            218,
            243
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        214,
        244
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 6
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
            "name": "d1",
            "optional": false,
            "range": [
              249,
              251
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                254,
                255
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "range": [
                259,
                266
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "range": [
              254,
              266
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            249,
            266
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        245,
        267
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              },
              "range": [
                274,
                298
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "range": [
                    276,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "range": [
                  276,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
              272,
              298
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                301,
                302
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 33,
                  "line": 8
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "range": [
                306,
                313
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 8
                },
                "start": {
                  "column": 38,
                  "line": 8
                }
              }
            },
            "range": [
              301,
              313
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 8
              },
              "start": {
                "column": 33,
                "line": 8
              }
            }
          },
          "range": [
            272,
            313
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        268,
        314
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              },
              "range": [
                321,
                345
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "range": [
                    323,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "range": [
                  323,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              319,
              345
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "range": [
                348,
                355
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 9
                },
                "start": {
                  "column": 33,
                  "line": 9
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                359,
                360
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 44,
                  "line": 9
                }
              }
            },
            "range": [
              348,
              360
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 33,
                "line": 9
              }
            }
          },
          "range": [
            319,
            360
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 9
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
        315,
        361
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              },
              "range": [
                367,
                398
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
                        371,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 10
                        },
                        "start": {
                          "column": 9,
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
                          "column": 34,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      },
                      "range": [
                        372,
                        396
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "range": [
                            374,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          374,
                          396
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      371,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 9,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  369,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              366,
              398
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  432,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 10
                  },
                  "start": {
                    "column": 70,
                    "line": 10
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
                        404,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 10
                        },
                        "start": {
                          "column": 42,
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
                          "column": 67,
                          "line": 10
                        },
                        "start": {
                          "column": 43,
                          "line": 10
                        }
                      },
                      "range": [
                        405,
                        429
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "range": [
                            407,
                            429
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 10
                            },
                            "start": {
                              "column": 45,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          407,
                          429
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 10
                          },
                          "start": {
                            "column": 45,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      404,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 10
                      },
                      "start": {
                        "column": 42,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  402,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 10
                  },
                  "start": {
                    "column": 40,
                    "line": 10
                  }
                }
              },
              "range": [
                401,
                436
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 10
                },
                "start": {
                  "column": 39,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      442,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 10
                      },
                      "start": {
                        "column": 80,
                        "line": 10
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "range": [
                      445,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 10
                      },
                      "start": {
                        "column": 83,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    442,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 10
                    },
                    "start": {
                      "column": 80,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                440,
                454
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 10
                },
                "start": {
                  "column": 78,
                  "line": 10
                }
              }
            },
            "range": [
              401,
              454
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 10
              },
              "start": {
                "column": 39,
                "line": 10
              }
            }
          },
          "range": [
            366,
            454
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        362,
        455
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              },
              "range": [
                461,
                492
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
                        465,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
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
                          "column": 34,
                          "line": 11
                        },
                        "start": {
                          "column": 10,
                          "line": 11
                        }
                      },
                      "range": [
                        466,
                        490
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "range": [
                            468,
                            490
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          468,
                          490
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      465,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  463,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 7,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              460,
              492
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                550,
                554
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 11
                },
                "start": {
                  "column": 94,
                  "line": 11
                }
              }
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      535,
                      536
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 11
                      },
                      "start": {
                        "column": 79,
                        "line": 11
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "range": [
                      538,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 11
                      },
                      "start": {
                        "column": 82,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    535,
                    545
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 11
                    },
                    "start": {
                      "column": 79,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                533,
                547
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 11
                },
                "start": {
                  "column": 77,
                  "line": 11
                }
              }
            },
            "test": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  526,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 11
                  },
                  "start": {
                    "column": 70,
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        498,
                        499
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 11
                        },
                        "start": {
                          "column": 42,
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
                          "column": 67,
                          "line": 11
                        },
                        "start": {
                          "column": 43,
                          "line": 11
                        }
                      },
                      "range": [
                        499,
                        523
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "range": [
                            501,
                            523
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 11
                            },
                            "start": {
                              "column": 45,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          501,
                          523
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 11
                          },
                          "start": {
                            "column": 45,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      498,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 11
                      },
                      "start": {
                        "column": 42,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  496,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 11
                  },
                  "start": {
                    "column": 40,
                    "line": 11
                  }
                }
              },
              "range": [
                495,
                530
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 11
                },
                "start": {
                  "column": 39,
                  "line": 11
                }
              }
            },
            "range": [
              495,
              554
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 11
              },
              "start": {
                "column": 39,
                "line": 11
              }
            }
          },
          "range": [
            460,
            554
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        456,
        555
      ],
      "loc": {
        "end": {
          "column": 99,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 99,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
