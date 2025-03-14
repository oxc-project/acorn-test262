__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    73
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./utils\"",
        "value": "./utils",
        "range": [
          14,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./SvgIcon\"",
        "value": "./SvgIcon",
        "range": [
          60,
          71
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 2
          },
          "start": {
            "column": 35,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "range": [
              45,
              52
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              34,
              41
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            34,
            52
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        25,
        72
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
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
    268
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"@ts-bug/styles\"",
        "value": "@ts-bug/styles",
        "range": [
          37,
          53
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 1
          },
          "start": {
            "column": 37,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledComponentProps",
            "optional": false,
            "range": [
              9,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledComponentProps",
            "optional": false,
            "range": [
              9,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 54,
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
        55,
        150
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            122,
            150
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "range": [
                  128,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
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
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                },
                "range": [
                  137,
                  147
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      139,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    139,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                128,
                148
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 67,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "StyledComponentProps",
              "optional": false,
              "range": [
                93,
                113
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 38,
                  "line": 2
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                113,
                121
              ],
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"root\"",
                    "value": "root",
                    "range": [
                      114,
                      120
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
                  "range": [
                    114,
                    120
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
                }
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 2
                },
                "start": {
                  "column": 58,
                  "line": 2
                }
              }
            },
            "range": [
              93,
              121
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 2
              },
              "start": {
                "column": 38,
                "line": 2
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SvgIconProps",
          "optional": false,
          "range": [
            72,
            84
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
        "range": [
          62,
          150
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
      "exportKind": "type",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        151,
        205
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            182,
            205
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myProp",
                "optional": false,
                "range": [
                  188,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 10,
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
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                },
                "range": [
                  194,
                  202
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    196,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                188,
                203
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 31,
              "line": 5
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeInterface",
          "optional": false,
          "range": [
            168,
            181
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        },
        "range": [
          158,
          205
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              },
              "range": [
                227,
                242
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeInterface",
                  "optional": false,
                  "range": [
                    229,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                },
                "range": [
                  229,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
              242
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            220,
            242
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        206,
        243
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "SvgIcon",
        "optional": false,
        "range": [
          259,
          266
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "range": [
        244,
        267
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
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
    115
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./SvgIcon\"",
        "value": "./SvgIcon",
        "range": [
          20,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            14
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "range": [
              7,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
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
        33,
        114
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "range": [
            49,
            62
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
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
                67,
                75
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  69,
                  75
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
              63,
              75
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 30,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "displayName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 2
                },
                "start": {
                  "column": 55,
                  "line": 2
                }
              },
              "range": [
                88,
                96
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  90,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 2
                  },
                  "start": {
                    "column": 57,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              77,
              96
            ],
            "loc": {
              "end": {
                "column": 63,
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
              "column": 80,
              "line": 2
            },
            "start": {
              "column": 64,
              "line": 2
            }
          },
          "range": [
            97,
            113
          ],
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SvgIcon",
              "optional": false,
              "range": [
                106,
                113
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 2
                },
                "start": {
                  "column": 73,
                  "line": 2
                }
              }
            },
            "range": [
              99,
              113
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 2
              },
              "start": {
                "column": 66,
                "line": 2
              }
            }
          }
        },
        "range": [
          40,
          114
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 2
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
          "column": 81,
          "line": 2
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
      "line": 3
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
    107
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        106
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            63,
            106
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classes",
                "optional": false,
                "range": [
                  69,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
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
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                },
                "range": [
                  77,
                  103
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      85,
                      103
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ClassKey",
                          "optional": false,
                          "range": [
                            86,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 2
                            },
                            "start": {
                              "column": 21,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          86,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 2
                          },
                          "start": {
                            "column": 21,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          96,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 2
                          },
                          "start": {
                            "column": 31,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "range": [
                      79,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    79,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                69,
                104
              ],
              "loc": {
                "end": {
                  "column": 39,
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
              "column": 63,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponentProps",
          "optional": false,
          "range": [
            17,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 62,
              "line": 1
            },
            "start": {
              "column": 37,
              "line": 1
            }
          },
          "range": [
            37,
            62
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  55,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 1
                  },
                  "start": {
                    "column": 55,
                    "line": 1
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassKey",
                "optional": false,
                "range": [
                  38,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 1
                  },
                  "start": {
                    "column": 38,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                38,
                61
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 1
                },
                "start": {
                  "column": 38,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          106
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
      "exportKind": "type",
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
    104
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"@ts-bug/core/utils\"",
        "value": "@ts-bug/core/utils",
        "range": [
          30,
          50
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 1
          },
          "start": {
            "column": 30,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createSvgIcon",
            "optional": false,
            "range": [
              9,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createSvgIcon",
            "optional": false,
            "range": [
              9,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        51
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"Hello\"",
            "value": "Hello",
            "range": [
              81,
              88
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"ArrowLeft\"",
            "value": "ArrowLeft",
            "range": [
              90,
              101
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 2
              },
              "start": {
                "column": 38,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "range": [
            67,
            80
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 2
            },
            "start": {
              "column": 15,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          67,
          102
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "range": [
        52,
        103
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 2
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
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
