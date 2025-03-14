__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2283
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          18,
          38
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unknown",
              "optional": false,
              "range": [
                20,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "range": [
              20,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "range": [
                29,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "range": [
              29,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "range": [
                34,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            },
            "range": [
              34,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "range": [
          11,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
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
      "type": "EmptyStatement",
      "range": [
        38,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 1
        },
        "start": {
          "column": 38,
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
        "name": "Yes",
        "optional": false,
        "range": [
          46,
          49
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Choice",
            "optional": false,
            "range": [
              52,
              58
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yes",
            "optional": false,
            "range": [
              59,
              62
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          },
          "range": [
            52,
            62
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 11,
              "line": 3
            }
          }
        },
        "range": [
          52,
          62
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "range": [
        41,
        63
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
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
        "name": "YesNo",
        "optional": false,
        "range": [
          69,
          74
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  77,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  84,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              "range": [
                77,
                87
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "range": [
              77,
              87
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  90,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "range": [
                  97,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              },
              "range": [
                90,
                99
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              }
            },
            "range": [
              90,
              99
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          }
        ],
        "range": [
          77,
          99
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        }
      },
      "range": [
        64,
        100
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoYes",
        "optional": false,
        "range": [
          106,
          111
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  114,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "range": [
                  121,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "range": [
                114,
                123
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              114,
              123
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  126,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  133,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 32,
                    "line": 5
                  }
                }
              },
              "range": [
                126,
                136
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            "range": [
              126,
              136
            ],
            "loc": {
              "end": {
                "column": 35,
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
          114,
          136
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        }
      },
      "range": [
        101,
        137
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false,
        "range": [
          143,
          155
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  158,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unknown",
                "optional": false,
                "range": [
                  165,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              "range": [
                158,
                172
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "range": [
              158,
              172
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  175,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 37,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  182,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 6
                  },
                  "start": {
                    "column": 44,
                    "line": 6
                  }
                }
              },
              "range": [
                175,
                185
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 6
                },
                "start": {
                  "column": 37,
                  "line": 6
                }
              }
            },
            "range": [
              175,
              185
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 6
              },
              "start": {
                "column": 37,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  188,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 6
                  },
                  "start": {
                    "column": 50,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "range": [
                  195,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 6
                  },
                  "start": {
                    "column": 57,
                    "line": 6
                  }
                }
              },
              "range": [
                188,
                197
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 6
                },
                "start": {
                  "column": 50,
                  "line": 6
                }
              }
            },
            "range": [
              188,
              197
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 6
              },
              "start": {
                "column": 50,
                "line": 6
              }
            }
          }
        ],
        "range": [
          158,
          197
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 6
          }
        }
      },
      "range": [
        138,
        198
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  264,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  268,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                264,
                269
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              264,
              270
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  275,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  279,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "range": [
                275,
                280
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              275,
              281
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  286,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  290,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "range": [
                286,
                291
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
            "range": [
              286,
              292
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  297,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  301,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                297,
                302
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
            "range": [
              297,
              303
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          258,
          305
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 58,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          209,
          211
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            },
            "range": [
              213,
              218
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  215,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              },
              "range": [
                215,
                218
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            }
          },
          "range": [
            212,
            218
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
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            },
            "range": [
              221,
              228
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  223,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              },
              "range": [
                223,
                228
              ],
              "loc": {
                "end": {
                  "column": 28,
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
            220,
            228
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 8
              },
              "start": {
                "column": 31,
                "line": 8
              }
            },
            "range": [
              231,
              245
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  233,
                  245
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
                233,
                245
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
            }
          },
          "range": [
            230,
            245
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 8
            },
            "start": {
              "column": 30,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 8
              },
              "start": {
                "column": 48,
                "line": 8
              }
            },
            "range": [
              248,
              256
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  250,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 8
                  },
                  "start": {
                    "column": 50,
                    "line": 8
                  }
                }
              },
              "range": [
                250,
                256
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 8
                },
                "start": {
                  "column": 50,
                  "line": 8
                }
              }
            }
          },
          "range": [
            247,
            256
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 8
            },
            "start": {
              "column": 47,
              "line": 8
            }
          }
        }
      ],
      "range": [
        200,
        305
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  371,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  375,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "range": [
                371,
                376
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              371,
              377
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  382,
                  383
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  386,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              "range": [
                382,
                387
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              382,
              388
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  393,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  397,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "range": [
                393,
                398
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              393,
              399
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  404,
                  405
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  408,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "range": [
                404,
                409
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              404,
              410
            ],
            "loc": {
              "end": {
                "column": 10,
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
          365,
          412
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 58,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          316,
          318
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 13,
                "line": 15
              }
            },
            "range": [
              320,
              325
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  322,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              },
              "range": [
                322,
                325
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            }
          },
          "range": [
            319,
            325
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 21,
                "line": 15
              }
            },
            "range": [
              328,
              335
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  330,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 23,
                    "line": 15
                  }
                }
              },
              "range": [
                330,
                335
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 23,
                  "line": 15
                }
              }
            }
          },
          "range": [
            327,
            335
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 15
            },
            "start": {
              "column": 20,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 15
              },
              "start": {
                "column": 31,
                "line": 15
              }
            },
            "range": [
              338,
              352
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  340,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 15
                  },
                  "start": {
                    "column": 33,
                    "line": 15
                  }
                }
              },
              "range": [
                340,
                352
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            }
          },
          "range": [
            337,
            352
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 15
            },
            "start": {
              "column": 30,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 15
              },
              "start": {
                "column": 48,
                "line": 15
              }
            },
            "range": [
              355,
              363
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  357,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 15
                  },
                  "start": {
                    "column": 50,
                    "line": 15
                  }
                }
              },
              "range": [
                357,
                363
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 15
                },
                "start": {
                  "column": 50,
                  "line": 15
                }
              }
            }
          },
          "range": [
            354,
            363
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 15
            },
            "start": {
              "column": 47,
              "line": 15
            }
          }
        }
      ],
      "range": [
        307,
        412
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 15
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  478,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  482,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              "range": [
                478,
                483
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              478,
              484
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  489,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  493,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "range": [
                489,
                494
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              489,
              495
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  500,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  504,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "range": [
                500,
                505
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              500,
              506
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  511,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  515,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "range": [
                511,
                516
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              511,
              517
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          472,
          519
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 58,
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
        "name": "f3",
        "optional": false,
        "range": [
          423,
          425
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 22
              }
            },
            "range": [
              427,
              432
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  429,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              "range": [
                429,
                432
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              }
            }
          },
          "range": [
            426,
            432
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 22
            },
            "start": {
              "column": 12,
              "line": 22
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 22
              },
              "start": {
                "column": 21,
                "line": 22
              }
            },
            "range": [
              435,
              442
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  437,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 22
                  },
                  "start": {
                    "column": 23,
                    "line": 22
                  }
                }
              },
              "range": [
                437,
                442
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 22
                },
                "start": {
                  "column": 23,
                  "line": 22
                }
              }
            }
          },
          "range": [
            434,
            442
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 22
            },
            "start": {
              "column": 20,
              "line": 22
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 22
              },
              "start": {
                "column": 31,
                "line": 22
              }
            },
            "range": [
              445,
              459
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  447,
                  459
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 22
                  },
                  "start": {
                    "column": 33,
                    "line": 22
                  }
                }
              },
              "range": [
                447,
                459
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 22
                },
                "start": {
                  "column": 33,
                  "line": 22
                }
              }
            }
          },
          "range": [
            444,
            459
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 22
            },
            "start": {
              "column": 30,
              "line": 22
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 22
              },
              "start": {
                "column": 48,
                "line": 22
              }
            },
            "range": [
              462,
              470
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  464,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 22
                  },
                  "start": {
                    "column": 50,
                    "line": 22
                  }
                }
              },
              "range": [
                464,
                470
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 22
                },
                "start": {
                  "column": 50,
                  "line": 22
                }
              }
            }
          },
          "range": [
            461,
            470
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 22
            },
            "start": {
              "column": 47,
              "line": 22
            }
          }
        }
      ],
      "range": [
        414,
        519
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 22
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  585,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  589,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              },
              "range": [
                585,
                590
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              585,
              591
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  596,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  600,
                  601
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              },
              "range": [
                596,
                601
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              596,
              602
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  607,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  611,
                  612
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              "range": [
                607,
                612
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              607,
              613
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  618,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  622,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              "range": [
                618,
                623
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              618,
              624
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          579,
          626
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 58,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          530,
          532
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 29
              }
            },
            "range": [
              534,
              539
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  536,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 29
                  },
                  "start": {
                    "column": 15,
                    "line": 29
                  }
                }
              },
              "range": [
                536,
                539
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            }
          },
          "range": [
            533,
            539
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 29
            },
            "start": {
              "column": 12,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 29
              },
              "start": {
                "column": 21,
                "line": 29
              }
            },
            "range": [
              542,
              549
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  544,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 29
                  },
                  "start": {
                    "column": 23,
                    "line": 29
                  }
                }
              },
              "range": [
                544,
                549
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 29
                },
                "start": {
                  "column": 23,
                  "line": 29
                }
              }
            }
          },
          "range": [
            541,
            549
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 29
            },
            "start": {
              "column": 20,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 29
              },
              "start": {
                "column": 31,
                "line": 29
              }
            },
            "range": [
              552,
              566
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  554,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 29
                  },
                  "start": {
                    "column": 33,
                    "line": 29
                  }
                }
              },
              "range": [
                554,
                566
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 29
                },
                "start": {
                  "column": 33,
                  "line": 29
                }
              }
            }
          },
          "range": [
            551,
            566
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 29
            },
            "start": {
              "column": 30,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 29
              },
              "start": {
                "column": 48,
                "line": 29
              }
            },
            "range": [
              569,
              577
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  571,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 29
                  },
                  "start": {
                    "column": 50,
                    "line": 29
                  }
                }
              },
              "range": [
                571,
                577
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 29
                },
                "start": {
                  "column": 50,
                  "line": 29
                }
              }
            }
          },
          "range": [
            568,
            577
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 29
            },
            "start": {
              "column": 47,
              "line": 29
            }
          }
        }
      ],
      "range": [
        521,
        626
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 29
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  692,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    696,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    703,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 37
                    },
                    "start": {
                      "column": 15,
                      "line": 37
                    }
                  }
                },
                "range": [
                  696,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              },
              "range": [
                692,
                710
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              692,
              711
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  716,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    720,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    727,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 38
                    },
                    "start": {
                      "column": 15,
                      "line": 38
                    }
                  }
                },
                "range": [
                  720,
                  730
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              "range": [
                716,
                730
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              716,
              731
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  736,
                  737
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    740,
                    746
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    747,
                    749
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 39
                    },
                    "start": {
                      "column": 15,
                      "line": 39
                    }
                  }
                },
                "range": [
                  740,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              },
              "range": [
                736,
                749
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              736,
              750
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  755,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    759,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    766,
                    773
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 40
                    },
                    "start": {
                      "column": 15,
                      "line": 40
                    }
                  }
                },
                "range": [
                  759,
                  773
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              },
              "range": [
                755,
                773
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              755,
              774
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  779,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    783,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    790,
                    793
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 41
                    },
                    "start": {
                      "column": 15,
                      "line": 41
                    }
                  }
                },
                "range": [
                  783,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              },
              "range": [
                779,
                793
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              779,
              794
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  799,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    803,
                    809
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    810,
                    812
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 42
                    },
                    "start": {
                      "column": 15,
                      "line": 42
                    }
                  }
                },
                "range": [
                  803,
                  812
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              },
              "range": [
                799,
                812
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "range": [
              799,
              813
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  818,
                  819
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    822,
                    828
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    829,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 43
                    },
                    "start": {
                      "column": 15,
                      "line": 43
                    }
                  }
                },
                "range": [
                  822,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 43
                  },
                  "start": {
                    "column": 8,
                    "line": 43
                  }
                }
              },
              "range": [
                818,
                836
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              818,
              837
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  842,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    846,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    853,
                    856
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 44
                    },
                    "start": {
                      "column": 15,
                      "line": 44
                    }
                  }
                },
                "range": [
                  846,
                  856
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              },
              "range": [
                842,
                856
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              842,
              857
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  862,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    866,
                    872
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    873,
                    875
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 45
                    },
                    "start": {
                      "column": 15,
                      "line": 45
                    }
                  }
                },
                "range": [
                  866,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              },
              "range": [
                862,
                875
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              862,
              876
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  881,
                  882
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    885,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    892,
                    899
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 46
                    },
                    "start": {
                      "column": 15,
                      "line": 46
                    }
                  }
                },
                "range": [
                  885,
                  899
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              },
              "range": [
                881,
                899
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              881,
              900
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  905,
                  906
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    909,
                    915
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    916,
                    919
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 47
                    },
                    "start": {
                      "column": 15,
                      "line": 47
                    }
                  }
                },
                "range": [
                  909,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "range": [
                905,
                919
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              905,
              920
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  925,
                  926
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    929,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    936,
                    938
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 48
                    },
                    "start": {
                      "column": 15,
                      "line": 48
                    }
                  }
                },
                "range": [
                  929,
                  938
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              },
              "range": [
                925,
                938
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              925,
              939
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "range": [
          686,
          941
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 58,
            "line": 36
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          637,
          639
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 36
          },
          "start": {
            "column": 9,
            "line": 36
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 36
              }
            },
            "range": [
              641,
              646
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  643,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 36
                  },
                  "start": {
                    "column": 15,
                    "line": 36
                  }
                }
              },
              "range": [
                643,
                646
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 36
                },
                "start": {
                  "column": 15,
                  "line": 36
                }
              }
            }
          },
          "range": [
            640,
            646
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 36
              },
              "start": {
                "column": 21,
                "line": 36
              }
            },
            "range": [
              649,
              656
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  651,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 36
                  },
                  "start": {
                    "column": 23,
                    "line": 36
                  }
                }
              },
              "range": [
                651,
                656
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 36
                },
                "start": {
                  "column": 23,
                  "line": 36
                }
              }
            }
          },
          "range": [
            648,
            656
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 36
            },
            "start": {
              "column": 20,
              "line": 36
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 36
              },
              "start": {
                "column": 31,
                "line": 36
              }
            },
            "range": [
              659,
              673
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  661,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 36
                  },
                  "start": {
                    "column": 33,
                    "line": 36
                  }
                }
              },
              "range": [
                661,
                673
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 36
                },
                "start": {
                  "column": 33,
                  "line": 36
                }
              }
            }
          },
          "range": [
            658,
            673
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 36
            },
            "start": {
              "column": 30,
              "line": 36
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 36
              },
              "start": {
                "column": 48,
                "line": 36
              }
            },
            "range": [
              676,
              684
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  678,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 36
                  },
                  "start": {
                    "column": 50,
                    "line": 36
                  }
                }
              },
              "range": [
                678,
                684
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 36
                },
                "start": {
                  "column": 50,
                  "line": 36
                }
              }
            }
          },
          "range": [
            675,
            684
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 36
            },
            "start": {
              "column": 47,
              "line": 36
            }
          }
        }
      ],
      "range": [
        628,
        941
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 36
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1007,
                  1008
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1013,
                    1019
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 52
                    },
                    "start": {
                      "column": 10,
                      "line": 52
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    1020,
                    1027
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 52
                    },
                    "start": {
                      "column": 17,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1013,
                  1027
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 52
                  },
                  "start": {
                    "column": 10,
                    "line": 52
                  }
                }
              },
              "range": [
                1007,
                1027
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              1007,
              1028
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1033,
                  1034
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1039,
                    1045
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 53
                    },
                    "start": {
                      "column": 10,
                      "line": 53
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    1046,
                    1049
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 53
                    },
                    "start": {
                      "column": 17,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1039,
                  1049
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 53
                  },
                  "start": {
                    "column": 10,
                    "line": 53
                  }
                }
              },
              "range": [
                1033,
                1049
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1033,
              1050
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1055,
                  1056
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 54
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1061,
                    1067
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 54
                    },
                    "start": {
                      "column": 10,
                      "line": 54
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    1068,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 54
                    },
                    "start": {
                      "column": 17,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1061,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              },
              "range": [
                1055,
                1070
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              1055,
              1071
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1076,
                  1077
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1082,
                    1088
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 55
                    },
                    "start": {
                      "column": 10,
                      "line": 55
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    1089,
                    1096
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 55
                    },
                    "start": {
                      "column": 17,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1082,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 55
                  },
                  "start": {
                    "column": 10,
                    "line": 55
                  }
                }
              },
              "range": [
                1076,
                1096
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1076,
              1097
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1102,
                  1103
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1108,
                    1114
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 56
                    },
                    "start": {
                      "column": 10,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    1115,
                    1118
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 56
                    },
                    "start": {
                      "column": 17,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1108,
                  1118
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 56
                  },
                  "start": {
                    "column": 10,
                    "line": 56
                  }
                }
              },
              "range": [
                1102,
                1118
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1102,
              1119
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1124,
                  1125
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1130,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 57
                    },
                    "start": {
                      "column": 10,
                      "line": 57
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    1137,
                    1139
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 57
                    },
                    "start": {
                      "column": 17,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1130,
                  1139
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 57
                  },
                  "start": {
                    "column": 10,
                    "line": 57
                  }
                }
              },
              "range": [
                1124,
                1139
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              1124,
              1140
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1145,
                  1146
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1151,
                    1157
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 58
                    },
                    "start": {
                      "column": 10,
                      "line": 58
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    1158,
                    1165
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 58
                    },
                    "start": {
                      "column": 17,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1151,
                  1165
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 58
                  },
                  "start": {
                    "column": 10,
                    "line": 58
                  }
                }
              },
              "range": [
                1145,
                1165
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              1145,
              1166
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1171,
                  1172
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1177,
                    1183
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 59
                    },
                    "start": {
                      "column": 10,
                      "line": 59
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    1184,
                    1187
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 59
                    },
                    "start": {
                      "column": 17,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1177,
                  1187
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 59
                  },
                  "start": {
                    "column": 10,
                    "line": 59
                  }
                }
              },
              "range": [
                1171,
                1187
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1171,
              1188
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1193,
                  1194
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1199,
                    1205
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 60
                    },
                    "start": {
                      "column": 10,
                      "line": 60
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    1206,
                    1208
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 60
                    },
                    "start": {
                      "column": 17,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1199,
                  1208
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 60
                  },
                  "start": {
                    "column": 10,
                    "line": 60
                  }
                }
              },
              "range": [
                1193,
                1208
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1193,
              1209
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1214,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1220,
                    1226
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 61
                    },
                    "start": {
                      "column": 10,
                      "line": 61
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "range": [
                    1227,
                    1234
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 61
                    },
                    "start": {
                      "column": 17,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1220,
                  1234
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 61
                  },
                  "start": {
                    "column": 10,
                    "line": 61
                  }
                }
              },
              "range": [
                1214,
                1234
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1214,
              1235
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1240,
                  1241
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1246,
                    1252
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 62
                    },
                    "start": {
                      "column": 10,
                      "line": 62
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    1253,
                    1256
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 62
                    },
                    "start": {
                      "column": 17,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1246,
                  1256
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 62
                  },
                  "start": {
                    "column": 10,
                    "line": 62
                  }
                }
              },
              "range": [
                1240,
                1256
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "range": [
              1240,
              1257
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1262,
                  1263
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1268,
                    1274
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 63
                    },
                    "start": {
                      "column": 10,
                      "line": 63
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    1275,
                    1277
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 63
                    },
                    "start": {
                      "column": 17,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1268,
                  1277
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 63
                  },
                  "start": {
                    "column": 10,
                    "line": 63
                  }
                }
              },
              "range": [
                1262,
                1277
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1262,
              1278
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1001,
          1280
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 58,
            "line": 51
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          952,
          954
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 51
              },
              "start": {
                "column": 13,
                "line": 51
              }
            },
            "range": [
              956,
              961
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  958,
                  961
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 51
                  },
                  "start": {
                    "column": 15,
                    "line": 51
                  }
                }
              },
              "range": [
                958,
                961
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 51
                },
                "start": {
                  "column": 15,
                  "line": 51
                }
              }
            }
          },
          "range": [
            955,
            961
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 51
            },
            "start": {
              "column": 12,
              "line": 51
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 51
              },
              "start": {
                "column": 21,
                "line": 51
              }
            },
            "range": [
              964,
              971
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  966,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 51
                  },
                  "start": {
                    "column": 23,
                    "line": 51
                  }
                }
              },
              "range": [
                966,
                971
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 51
                },
                "start": {
                  "column": 23,
                  "line": 51
                }
              }
            }
          },
          "range": [
            963,
            971
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 51
            },
            "start": {
              "column": 20,
              "line": 51
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 51
              },
              "start": {
                "column": 31,
                "line": 51
              }
            },
            "range": [
              974,
              988
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  976,
                  988
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 51
                  },
                  "start": {
                    "column": 33,
                    "line": 51
                  }
                }
              },
              "range": [
                976,
                988
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 51
                },
                "start": {
                  "column": 33,
                  "line": 51
                }
              }
            }
          },
          "range": [
            973,
            988
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 51
            },
            "start": {
              "column": 30,
              "line": 51
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 51
              },
              "start": {
                "column": 48,
                "line": 51
              }
            },
            "range": [
              991,
              999
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  993,
                  999
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 51
                  },
                  "start": {
                    "column": 50,
                    "line": 51
                  }
                }
              },
              "range": [
                993,
                999
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 51
                },
                "start": {
                  "column": 50,
                  "line": 51
                }
              }
            }
          },
          "range": [
            990,
            999
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 51
            },
            "start": {
              "column": 47,
              "line": 51
            }
          }
        }
      ],
      "range": [
        943,
        1280
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 51
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1346,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1352,
                  1353
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 67
                  },
                  "start": {
                    "column": 10,
                    "line": 67
                  }
                }
              },
              "range": [
                1346,
                1353
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "range": [
              1346,
              1354
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1359,
                  1360
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1365,
                  1366
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 68
                  },
                  "start": {
                    "column": 10,
                    "line": 68
                  }
                }
              },
              "range": [
                1359,
                1366
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1359,
              1367
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1372,
                  1373
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 69
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1378,
                  1379
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 69
                  },
                  "start": {
                    "column": 10,
                    "line": 69
                  }
                }
              },
              "range": [
                1372,
                1379
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1372,
              1380
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1385,
                  1386
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1391,
                  1392
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 70
                  },
                  "start": {
                    "column": 10,
                    "line": 70
                  }
                }
              },
              "range": [
                1385,
                1392
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            "range": [
              1385,
              1393
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1398,
                  1399
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 4,
                    "line": 71
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1404,
                  1405
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 71
                  },
                  "start": {
                    "column": 10,
                    "line": 71
                  }
                }
              },
              "range": [
                1398,
                1405
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            },
            "range": [
              1398,
              1406
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1411,
                  1412
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 72
                  },
                  "start": {
                    "column": 4,
                    "line": 72
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1417,
                  1418
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 72
                  },
                  "start": {
                    "column": 10,
                    "line": 72
                  }
                }
              },
              "range": [
                1411,
                1418
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              1411,
              1419
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1424,
                  1425
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1430,
                  1431
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 73
                  },
                  "start": {
                    "column": 10,
                    "line": 73
                  }
                }
              },
              "range": [
                1424,
                1431
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            "range": [
              1424,
              1432
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1437,
                  1438
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1443,
                  1444
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 74
                  },
                  "start": {
                    "column": 10,
                    "line": 74
                  }
                }
              },
              "range": [
                1437,
                1444
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              1437,
              1445
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1450,
                  1451
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1456,
                  1457
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 75
                  },
                  "start": {
                    "column": 10,
                    "line": 75
                  }
                }
              },
              "range": [
                1450,
                1457
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              1450,
              1458
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1463,
                  1464
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 76
                  },
                  "start": {
                    "column": 4,
                    "line": 76
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1469,
                  1470
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 76
                  },
                  "start": {
                    "column": 10,
                    "line": 76
                  }
                }
              },
              "range": [
                1463,
                1470
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "range": [
              1463,
              1471
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1476,
                  1477
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 77
                  },
                  "start": {
                    "column": 4,
                    "line": 77
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1482,
                  1483
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 77
                  },
                  "start": {
                    "column": 10,
                    "line": 77
                  }
                }
              },
              "range": [
                1476,
                1483
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "range": [
              1476,
              1484
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1489,
                  1490
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 78
                  },
                  "start": {
                    "column": 4,
                    "line": 78
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1495,
                  1496
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 78
                  },
                  "start": {
                    "column": 10,
                    "line": 78
                  }
                }
              },
              "range": [
                1489,
                1496
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
                }
              }
            },
            "range": [
              1489,
              1497
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1502,
                  1503
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 79
                  },
                  "start": {
                    "column": 4,
                    "line": 79
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1508,
                  1509
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 79
                  },
                  "start": {
                    "column": 10,
                    "line": 79
                  }
                }
              },
              "range": [
                1502,
                1509
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "range": [
              1502,
              1510
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1515,
                  1516
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 80
                  },
                  "start": {
                    "column": 4,
                    "line": 80
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1521,
                  1522
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 80
                  },
                  "start": {
                    "column": 10,
                    "line": 80
                  }
                }
              },
              "range": [
                1515,
                1522
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            "range": [
              1515,
              1523
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1528,
                  1529
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1534,
                  1535
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 81
                  },
                  "start": {
                    "column": 10,
                    "line": 81
                  }
                }
              },
              "range": [
                1528,
                1535
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 81
                },
                "start": {
                  "column": 4,
                  "line": 81
                }
              }
            },
            "range": [
              1528,
              1536
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1541,
                  1542
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1547,
                  1548
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 82
                  },
                  "start": {
                    "column": 10,
                    "line": 82
                  }
                }
              },
              "range": [
                1541,
                1548
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            "range": [
              1541,
              1549
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          }
        ],
        "range": [
          1340,
          1551
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 58,
            "line": 66
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          1291,
          1293
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 66
          },
          "start": {
            "column": 9,
            "line": 66
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 66
              },
              "start": {
                "column": 13,
                "line": 66
              }
            },
            "range": [
              1295,
              1300
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  1297,
                  1300
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 66
                  },
                  "start": {
                    "column": 15,
                    "line": 66
                  }
                }
              },
              "range": [
                1297,
                1300
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 66
                },
                "start": {
                  "column": 15,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1294,
            1300
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 66
            },
            "start": {
              "column": 12,
              "line": 66
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 66
              },
              "start": {
                "column": 21,
                "line": 66
              }
            },
            "range": [
              1303,
              1310
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1305,
                  1310
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 66
                  },
                  "start": {
                    "column": 23,
                    "line": 66
                  }
                }
              },
              "range": [
                1305,
                1310
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 66
                },
                "start": {
                  "column": 23,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1302,
            1310
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 66
            },
            "start": {
              "column": 20,
              "line": 66
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 66
              },
              "start": {
                "column": 31,
                "line": 66
              }
            },
            "range": [
              1313,
              1327
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1315,
                  1327
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 66
                  },
                  "start": {
                    "column": 33,
                    "line": 66
                  }
                }
              },
              "range": [
                1315,
                1327
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 66
                },
                "start": {
                  "column": 33,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1312,
            1327
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 66
            },
            "start": {
              "column": 30,
              "line": 66
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 66
              },
              "start": {
                "column": 48,
                "line": 66
              }
            },
            "range": [
              1330,
              1338
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  1332,
                  1338
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 66
                  },
                  "start": {
                    "column": 50,
                    "line": 66
                  }
                }
              },
              "range": [
                1332,
                1338
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 66
                },
                "start": {
                  "column": 50,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1329,
            1338
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 66
            },
            "start": {
              "column": 47,
              "line": 66
            }
          }
        }
      ],
      "range": [
        1282,
        1551
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 66
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1634,
                        1635
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 87
                        },
                        "start": {
                          "column": 36,
                          "line": 87
                        }
                      }
                    },
                    "range": [
                      1627,
                      1636
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 87
                      },
                      "start": {
                        "column": 29,
                        "line": 87
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1611,
                      1617
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 87
                      },
                      "start": {
                        "column": 13,
                        "line": 87
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "range": [
                      1618,
                      1625
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 87
                      },
                      "start": {
                        "column": 20,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    1611,
                    1625
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 87
                    },
                    "start": {
                      "column": 13,
                      "line": 87
                    }
                  }
                },
                "range": [
                  1606,
                  1636
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 87
                  },
                  "start": {
                    "column": 8,
                    "line": 87
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1669,
                        1670
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 88
                        },
                        "start": {
                          "column": 32,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1662,
                      1671
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 88
                      },
                      "start": {
                        "column": 25,
                        "line": 88
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1650,
                      1656
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 88
                      },
                      "start": {
                        "column": 13,
                        "line": 88
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      1657,
                      1660
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 88
                      },
                      "start": {
                        "column": 20,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1650,
                    1660
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 88
                    },
                    "start": {
                      "column": 13,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1645,
                  1671
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1703,
                        1704
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 89
                        },
                        "start": {
                          "column": 31,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      1696,
                      1705
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 89
                      },
                      "start": {
                        "column": 24,
                        "line": 89
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1685,
                      1691
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 89
                      },
                      "start": {
                        "column": 13,
                        "line": 89
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      1692,
                      1694
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 89
                      },
                      "start": {
                        "column": 20,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1685,
                    1694
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 89
                    },
                    "start": {
                      "column": 13,
                      "line": 89
                    }
                  }
                },
                "range": [
                  1680,
                  1705
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
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1593,
                1594
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 86
                },
                "start": {
                  "column": 12,
                  "line": 86
                }
              }
            },
            "range": [
              1585,
              1711
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1723,
                1724
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 91
                },
                "start": {
                  "column": 11,
                  "line": 91
                }
              }
            },
            "range": [
              1716,
              1725
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          }
        ],
        "range": [
          1579,
          1727
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 26,
            "line": 85
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          1562,
          1565
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 85
          },
          "start": {
            "column": 9,
            "line": 85
          }
        }
      },
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
                "column": 19,
                "line": 85
              },
              "start": {
                "column": 14,
                "line": 85
              }
            },
            "range": [
              1567,
              1572
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  1569,
                  1572
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 85
                  },
                  "start": {
                    "column": 16,
                    "line": 85
                  }
                }
              },
              "range": [
                1569,
                1572
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 85
                },
                "start": {
                  "column": 16,
                  "line": 85
                }
              }
            }
          },
          "range": [
            1566,
            1572
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 85
            },
            "start": {
              "column": 13,
              "line": 85
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 25,
            "line": 85
          },
          "start": {
            "column": 20,
            "line": 85
          }
        },
        "range": [
          1573,
          1578
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yes",
            "optional": false,
            "range": [
              1575,
              1578
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 85
              },
              "start": {
                "column": 22,
                "line": 85
              }
            }
          },
          "range": [
            1575,
            1578
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 85
            },
            "start": {
              "column": 22,
              "line": 85
            }
          }
        }
      },
      "range": [
        1553,
        1727
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 85
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1814,
                        1815
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 96
                        },
                        "start": {
                          "column": 36,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      1807,
                      1816
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 96
                      },
                      "start": {
                        "column": 29,
                        "line": 96
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1791,
                      1797
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 96
                      },
                      "start": {
                        "column": 13,
                        "line": 96
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "range": [
                      1798,
                      1805
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 96
                      },
                      "start": {
                        "column": 20,
                        "line": 96
                      }
                    }
                  },
                  "range": [
                    1791,
                    1805
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 96
                    },
                    "start": {
                      "column": 13,
                      "line": 96
                    }
                  }
                },
                "range": [
                  1786,
                  1816
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 96
                  },
                  "start": {
                    "column": 8,
                    "line": 96
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1849,
                        1850
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 97
                        },
                        "start": {
                          "column": 32,
                          "line": 97
                        }
                      }
                    },
                    "range": [
                      1842,
                      1851
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 97
                      },
                      "start": {
                        "column": 25,
                        "line": 97
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1830,
                      1836
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 97
                      },
                      "start": {
                        "column": 13,
                        "line": 97
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      1837,
                      1840
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 97
                      },
                      "start": {
                        "column": 20,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    1830,
                    1840
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 97
                    },
                    "start": {
                      "column": 13,
                      "line": 97
                    }
                  }
                },
                "range": [
                  1825,
                  1851
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 97
                  },
                  "start": {
                    "column": 8,
                    "line": 97
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1883,
                        1884
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 98
                        },
                        "start": {
                          "column": 31,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      1876,
                      1885
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 98
                      },
                      "start": {
                        "column": 24,
                        "line": 98
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1865,
                      1871
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 98
                      },
                      "start": {
                        "column": 13,
                        "line": 98
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      1872,
                      1874
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 98
                      },
                      "start": {
                        "column": 20,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    1865,
                    1874
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 98
                    },
                    "start": {
                      "column": 13,
                      "line": 98
                    }
                  }
                },
                "range": [
                  1860,
                  1885
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 98
                  },
                  "start": {
                    "column": 8,
                    "line": 98
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1773,
                1774
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 95
                },
                "start": {
                  "column": 12,
                  "line": 95
                }
              }
            },
            "range": [
              1765,
              1891
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1903,
                1904
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 100
                },
                "start": {
                  "column": 11,
                  "line": 100
                }
              }
            },
            "range": [
              1896,
              1905
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          }
        ],
        "range": [
          1759,
          1907
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 101
          },
          "start": {
            "column": 30,
            "line": 94
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          1738,
          1741
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 94
          },
          "start": {
            "column": 9,
            "line": 94
          }
        }
      },
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
                "column": 21,
                "line": 94
              },
              "start": {
                "column": 14,
                "line": 94
              }
            },
            "range": [
              1743,
              1750
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1745,
                  1750
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 94
                  },
                  "start": {
                    "column": 16,
                    "line": 94
                  }
                }
              },
              "range": [
                1745,
                1750
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 94
                },
                "start": {
                  "column": 16,
                  "line": 94
                }
              }
            }
          },
          "range": [
            1742,
            1750
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 94
            },
            "start": {
              "column": 13,
              "line": 94
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 94
          },
          "start": {
            "column": 22,
            "line": 94
          }
        },
        "range": [
          1751,
          1758
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "YesNo",
            "optional": false,
            "range": [
              1753,
              1758
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 94
              },
              "start": {
                "column": 24,
                "line": 94
              }
            }
          },
          "range": [
            1753,
            1758
          ],
          "loc": {
            "end": {
              "column": 29,
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
        1729,
        1907
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 94
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2008,
                        2009
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 105
                        },
                        "start": {
                          "column": 36,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2001,
                      2010
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 105
                      },
                      "start": {
                        "column": 29,
                        "line": 105
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1985,
                      1991
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 105
                      },
                      "start": {
                        "column": 13,
                        "line": 105
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "range": [
                      1992,
                      1999
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 105
                      },
                      "start": {
                        "column": 20,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    1985,
                    1999
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 105
                    },
                    "start": {
                      "column": 13,
                      "line": 105
                    }
                  }
                },
                "range": [
                  1980,
                  2010
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 105
                  },
                  "start": {
                    "column": 8,
                    "line": 105
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2043,
                        2044
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 106
                        },
                        "start": {
                          "column": 32,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      2036,
                      2045
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 106
                      },
                      "start": {
                        "column": 25,
                        "line": 106
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      2024,
                      2030
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 106
                      },
                      "start": {
                        "column": 13,
                        "line": 106
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      2031,
                      2034
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 106
                      },
                      "start": {
                        "column": 20,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    2024,
                    2034
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 106
                    },
                    "start": {
                      "column": 13,
                      "line": 106
                    }
                  }
                },
                "range": [
                  2019,
                  2045
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 106
                  },
                  "start": {
                    "column": 8,
                    "line": 106
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2077,
                        2078
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 107
                        },
                        "start": {
                          "column": 31,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      2070,
                      2079
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 107
                      },
                      "start": {
                        "column": 24,
                        "line": 107
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      2059,
                      2065
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 107
                      },
                      "start": {
                        "column": 13,
                        "line": 107
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      2066,
                      2068
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 107
                      },
                      "start": {
                        "column": 20,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    2059,
                    2068
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 107
                    },
                    "start": {
                      "column": 13,
                      "line": 107
                    }
                  }
                },
                "range": [
                  2054,
                  2079
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 107
                  },
                  "start": {
                    "column": 8,
                    "line": 107
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1967,
                1968
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 104
                },
                "start": {
                  "column": 12,
                  "line": 104
                }
              }
            },
            "range": [
              1959,
              2085
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2097,
                2098
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 109
                },
                "start": {
                  "column": 11,
                  "line": 109
                }
              }
            },
            "range": [
              2090,
              2099
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          }
        ],
        "range": [
          1953,
          2101
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 110
          },
          "start": {
            "column": 44,
            "line": 103
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "range": [
          1918,
          1921
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 103
          },
          "start": {
            "column": 9,
            "line": 103
          }
        }
      },
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
                "column": 28,
                "line": 103
              },
              "start": {
                "column": 14,
                "line": 103
              }
            },
            "range": [
              1923,
              1937
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1925,
                  1937
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 103
                  },
                  "start": {
                    "column": 16,
                    "line": 103
                  }
                }
              },
              "range": [
                1925,
                1937
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 103
                },
                "start": {
                  "column": 16,
                  "line": 103
                }
              }
            }
          },
          "range": [
            1922,
            1937
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 103
            },
            "start": {
              "column": 13,
              "line": 103
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 103
          },
          "start": {
            "column": 29,
            "line": 103
          }
        },
        "range": [
          1938,
          1952
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnknownYesNo",
            "optional": false,
            "range": [
              1940,
              1952
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 103
              },
              "start": {
                "column": 31,
                "line": 103
              }
            }
          },
          "range": [
            1940,
            1952
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 103
            },
            "start": {
              "column": 31,
              "line": 103
            }
          }
        }
      },
      "range": [
        1909,
        2101
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 103
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2190,
                        2191
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 114
                        },
                        "start": {
                          "column": 36,
                          "line": 114
                        }
                      }
                    },
                    "range": [
                      2183,
                      2192
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 114
                      },
                      "start": {
                        "column": 29,
                        "line": 114
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      2167,
                      2173
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 114
                      },
                      "start": {
                        "column": 13,
                        "line": 114
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "range": [
                      2174,
                      2181
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 114
                      },
                      "start": {
                        "column": 20,
                        "line": 114
                      }
                    }
                  },
                  "range": [
                    2167,
                    2181
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 114
                    },
                    "start": {
                      "column": 13,
                      "line": 114
                    }
                  }
                },
                "range": [
                  2162,
                  2192
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
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2225,
                        2226
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 115
                        },
                        "start": {
                          "column": 32,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      2218,
                      2227
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 115
                      },
                      "start": {
                        "column": 25,
                        "line": 115
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      2206,
                      2212
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 115
                      },
                      "start": {
                        "column": 13,
                        "line": 115
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      2213,
                      2216
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 115
                      },
                      "start": {
                        "column": 20,
                        "line": 115
                      }
                    }
                  },
                  "range": [
                    2206,
                    2216
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 115
                    },
                    "start": {
                      "column": 13,
                      "line": 115
                    }
                  }
                },
                "range": [
                  2201,
                  2227
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 115
                  },
                  "start": {
                    "column": 8,
                    "line": 115
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2259,
                        2260
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 116
                        },
                        "start": {
                          "column": 31,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      2252,
                      2261
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 116
                      },
                      "start": {
                        "column": 24,
                        "line": 116
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      2241,
                      2247
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 116
                      },
                      "start": {
                        "column": 13,
                        "line": 116
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      2248,
                      2250
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 116
                      },
                      "start": {
                        "column": 20,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    2241,
                    2250
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 116
                    },
                    "start": {
                      "column": 13,
                      "line": 116
                    }
                  }
                },
                "range": [
                  2236,
                  2261
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 116
                  },
                  "start": {
                    "column": 8,
                    "line": 116
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2149,
                2150
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 113
                },
                "start": {
                  "column": 12,
                  "line": 113
                }
              }
            },
            "range": [
              2141,
              2267
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2279,
                2280
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 118
                },
                "start": {
                  "column": 11,
                  "line": 118
                }
              }
            },
            "range": [
              2272,
              2281
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          }
        ],
        "range": [
          2135,
          2283
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 32,
            "line": 112
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "range": [
          2112,
          2115
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 112
          },
          "start": {
            "column": 9,
            "line": 112
          }
        }
      },
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
                "column": 22,
                "line": 112
              },
              "start": {
                "column": 14,
                "line": 112
              }
            },
            "range": [
              2117,
              2125
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  2119,
                  2125
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 112
                  },
                  "start": {
                    "column": 16,
                    "line": 112
                  }
                }
              },
              "range": [
                2119,
                2125
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 112
                },
                "start": {
                  "column": 16,
                  "line": 112
                }
              }
            }
          },
          "range": [
            2116,
            2125
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 112
            },
            "start": {
              "column": 13,
              "line": 112
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 112
          },
          "start": {
            "column": 23,
            "line": 112
          }
        },
        "range": [
          2126,
          2134
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Choice",
            "optional": false,
            "range": [
              2128,
              2134
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 112
              },
              "start": {
                "column": 25,
                "line": 112
              }
            }
          },
          "range": [
            2128,
            2134
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 112
            },
            "start": {
              "column": 25,
              "line": 112
            }
          }
        }
      },
      "range": [
        2103,
        2283
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 112
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 119
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
