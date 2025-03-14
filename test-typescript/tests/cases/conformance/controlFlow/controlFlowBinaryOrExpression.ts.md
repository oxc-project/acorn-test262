__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    715
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                32
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
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
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      16,
                      22
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 1
                      },
                      "start": {
                        "column": 16,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      25,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  7,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        33
      ],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                42,
                51
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  44,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              38,
              51
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            38,
            51
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        34,
        52
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              55,
              56
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 4
              },
              "start": {
                "column": 1,
                "line": 4
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              59,
              61
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 5,
                "line": 4
              }
            }
          },
          "range": [
            55,
            61
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 1,
              "line": 4
            }
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              67,
              68
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              71,
              72
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "range": [
            67,
            72
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "range": [
          54,
          73
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        54,
        74
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          75,
          76
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        75,
        77
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
          "name": "x",
          "optional": false,
          "range": [
            98,
            99
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"\"",
          "value": "",
          "range": [
            102,
            104
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
        "range": [
          98,
          104
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        98,
        105
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "range": [
            106,
            110
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              115,
              116
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
          "right": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              119,
              120
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          },
          "range": [
            115,
            120
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 9,
              "line": 8
            }
          }
        },
        "range": [
          106,
          121
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        106,
        122
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          123,
          124
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        123,
        125
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        146,
        195
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            172,
            195
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  178,
                  184
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
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                },
                "range": [
                  184,
                  192
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    186,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                178,
                193
              ],
              "loc": {
                "end": {
                  "column": 19,
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
              "column": 26,
              "line": 11
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NodeList",
          "optional": false,
          "range": [
            163,
            171
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "range": [
          153,
          195
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
      "type": "ExportNamedDeclaration",
      "range": [
        197,
        252
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            229,
            252
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  235,
                  241
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
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                },
                "range": [
                  241,
                  249
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    243,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                }
              },
              "range": [
                235,
                250
              ],
              "loc": {
                "end": {
                  "column": 19,
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
              "column": 32,
              "line": 15
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLCollection",
          "optional": false,
          "range": [
            214,
            228
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 15
            },
            "start": {
              "column": 17,
              "line": 15
            }
          }
        },
        "range": [
          204,
          252
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNodeList",
        "optional": false,
        "range": [
          271,
          281
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 19
              },
              "start": {
                "column": 37,
                "line": 19
              }
            },
            "range": [
              291,
              296
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                293,
                296
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 19
                },
                "start": {
                  "column": 39,
                  "line": 19
                }
              }
            }
          },
          "range": [
            282,
            296
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 19
            },
            "start": {
              "column": 28,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 19
          },
          "start": {
            "column": 43,
            "line": 19
          }
        },
        "range": [
          297,
          320
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "range": [
              299,
              308
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 19
              },
              "start": {
                "column": 45,
                "line": 19
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 19
              },
              "start": {
                "column": 58,
                "line": 19
              }
            },
            "range": [
              312,
              320
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NodeList",
                "optional": false,
                "range": [
                  312,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 19
                  },
                  "start": {
                    "column": 58,
                    "line": 19
                  }
                }
              },
              "range": [
                312,
                320
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 19
                },
                "start": {
                  "column": 58,
                  "line": 19
                }
              }
            }
          },
          "range": [
            299,
            320
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 19
            },
            "start": {
              "column": 45,
              "line": 19
            }
          }
        }
      },
      "range": [
        254,
        321
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
        "name": "isHTMLCollection",
        "optional": false,
        "range": [
          339,
          355
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 20
              },
              "start": {
                "column": 43,
                "line": 20
              }
            },
            "range": [
              365,
              370
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                367,
                370
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 20
                },
                "start": {
                  "column": 45,
                  "line": 20
                }
              }
            }
          },
          "range": [
            356,
            370
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 20
            },
            "start": {
              "column": 34,
              "line": 20
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 20
          },
          "start": {
            "column": 49,
            "line": 20
          }
        },
        "range": [
          371,
          400
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "range": [
              373,
              382
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 20
              },
              "start": {
                "column": 51,
                "line": 20
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 20
              },
              "start": {
                "column": 64,
                "line": 20
              }
            },
            "range": [
              386,
              400
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLCollection",
                "optional": false,
                "range": [
                  386,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 20
                  },
                  "start": {
                    "column": 64,
                    "line": 20
                  }
                }
              },
              "range": [
                386,
                400
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 20
                },
                "start": {
                  "column": 64,
                  "line": 20
                }
              }
            }
          },
          "range": [
            373,
            400
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 20
            },
            "start": {
              "column": 51,
              "line": 20
            }
          }
        }
      },
      "range": [
        322,
        401
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventTargetLike",
        "optional": false,
        "range": [
          408,
          423
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    427,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
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
                      "column": 33,
                      "line": 22
                    },
                    "start": {
                      "column": 25,
                      "line": 22
                    }
                  },
                  "range": [
                    428,
                    436
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      430,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 22
                      },
                      "start": {
                        "column": 27,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  427,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              426,
              437
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTMLCollection",
              "optional": false,
              "range": [
                440,
                454
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 22
                },
                "start": {
                  "column": 37,
                  "line": 22
                }
              }
            },
            "range": [
              440,
              454
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 22
              },
              "start": {
                "column": 37,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NodeList",
              "optional": false,
              "range": [
                457,
                465
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 22
                },
                "start": {
                  "column": 54,
                  "line": 22
                }
              }
            },
            "range": [
              457,
              465
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 22
              },
              "start": {
                "column": 54,
                "line": 22
              }
            }
          }
        ],
        "range": [
          426,
          465
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 22
          },
          "start": {
            "column": 23,
            "line": 22
          }
        }
      },
      "range": [
        403,
        466
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 24
                },
                "start": {
                  "column": 13,
                  "line": 24
                }
              },
              "range": [
                481,
                498
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EventTargetLike",
                  "optional": false,
                  "range": [
                    483,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                "range": [
                  483,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 15,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              472,
              498
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                506,
                515
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 24
                },
                "start": {
                  "column": 38,
                  "line": 24
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                502,
                505
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 24
                },
                "start": {
                  "column": 34,
                  "line": 24
                }
              }
            },
            "range": [
              501,
              515
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 24
              },
              "start": {
                "column": 33,
                "line": 24
              }
            }
          },
          "range": [
            472,
            515
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        468,
        516
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "range": [
                  550,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  560,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 26
                  }
                }
              },
              "range": [
                550,
                566
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
            "range": [
              550,
              567
            ],
            "loc": {
              "end": {
                "column": 21,
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
          544,
          569
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 27,
            "line": 25
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "range": [
              532,
              541
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 25
              },
              "start": {
                "column": 15,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNodeList",
          "optional": false,
          "range": [
            521,
            531
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          521,
          542
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 25
          },
          "start": {
            "column": 4,
            "line": 25
          }
        }
      },
      "range": [
        517,
        569
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "range": [
                  610,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  620,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 30
                  }
                }
              },
              "range": [
                610,
                626
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              610,
              627
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          604,
          629
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 33,
            "line": 29
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "range": [
              592,
              601
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 29
              },
              "start": {
                "column": 21,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isHTMLCollection",
          "optional": false,
          "range": [
            575,
            591
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          575,
          602
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 29
          },
          "start": {
            "column": 4,
            "line": 29
          }
        }
      },
      "range": [
        571,
        629
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "range": [
                  695,
                  704
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  705,
                  711
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 34
                  },
                  "start": {
                    "column": 14,
                    "line": 34
                  }
                }
              },
              "range": [
                695,
                711
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              695,
              712
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          689,
          714
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 58,
            "line": 33
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "range": [
                646,
                655
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 33
                },
                "start": {
                  "column": 15,
                  "line": 33
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNodeList",
            "optional": false,
            "range": [
              635,
              645
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "optional": false,
          "range": [
            635,
            656
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "range": [
                677,
                686
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 33
                },
                "start": {
                  "column": 46,
                  "line": 33
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isHTMLCollection",
            "optional": false,
            "range": [
              660,
              676
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 33
              },
              "start": {
                "column": 29,
                "line": 33
              }
            }
          },
          "optional": false,
          "range": [
            660,
            687
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 33
            },
            "start": {
              "column": 29,
              "line": 33
            }
          }
        },
        "range": [
          635,
          687
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 33
          },
          "start": {
            "column": 4,
            "line": 33
          }
        }
      },
      "range": [
        631,
        714
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
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
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
