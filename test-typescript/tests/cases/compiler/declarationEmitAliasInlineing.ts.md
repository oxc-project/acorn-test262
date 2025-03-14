a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "O",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 47,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 27,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 45,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 37,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 78,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 58,
        "end": 78,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 76,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 68,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 175,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 87,
        "end": 175,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 93,
            "end": 174,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 98,
              "end": 174,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 172,
                "end": 174,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 111,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 102,
                      "end": 111,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 104,
                        "end": 110,
                        "literal": {
                          "type": "Literal",
                          "start": 104,
                          "end": 110,
                          "raw": "'prop'",
                          "value": "prop"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 102,
                        "end": 103,
                        "typeName": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "decorators": [],
                          "name": "O",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 131,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 131,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 120,
                        "end": 131,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 121,
                            "end": 122,
                            "typeName": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 122,
                              "decorators": [],
                              "name": "O",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 124,
                            "end": 130,
                            "literal": {
                              "type": "Literal",
                              "start": 124,
                              "end": 130,
                              "raw": "'prop'",
                              "value": "prop"
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 120,
                        "decorators": [],
                        "name": "Omit",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 145,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 138,
                      "end": 145,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 144,
                        "end": 145,
                        "typeName": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 145,
                          "decorators": [],
                          "name": "O",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 167,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 167,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 151,
                      "end": 167,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 155,
                        "end": 167,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 156,
                            "end": 157,
                            "typeName": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "decorators": [],
                              "name": "O",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeOperator",
                            "start": 159,
                            "end": 166,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 165,
                              "end": 166,
                              "typeName": {
                                "type": "Identifier",
                                "start": 165,
                                "end": 166,
                                "decorators": [],
                                "name": "I",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 155,
                        "decorators": [],
                        "name": "Omit",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
aExp.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 54,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "O",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 16,
          "end": 54,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 22,
              "end": 34,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 22,
                "end": 26,
                "decorators": [],
                "name": "prop",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 52,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "decorators": [],
                "name": "prop2",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 46,
                  "end": 52
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 92,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 63,
        "end": 92,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "I",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 72,
          "end": 92,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 78,
              "end": 90,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 82,
                "decorators": [],
                "name": "prop",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 82,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 84,
                  "end": 90
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 94,
      "end": 192,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 101,
        "end": 192,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 107,
            "end": 191,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "fnExp",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 115,
              "end": 191,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 191,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 116,
                  "end": 128,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 119,
                      "end": 128,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 121,
                        "end": 127,
                        "literal": {
                          "type": "Literal",
                          "start": 121,
                          "end": 127,
                          "raw": "'prop'",
                          "value": "prop"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 119,
                        "end": 120,
                        "typeName": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "O",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 148,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 133,
                      "end": 148,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 137,
                        "end": 148,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 138,
                            "end": 139,
                            "typeName": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 139,
                              "decorators": [],
                              "name": "O",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 141,
                            "end": 147,
                            "literal": {
                              "type": "Literal",
                              "start": 141,
                              "end": 147,
                              "raw": "'prop'",
                              "value": "prop"
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 137,
                        "decorators": [],
                        "name": "Omit",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 162,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 162,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 155,
                      "end": 162,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 161,
                        "end": 162,
                        "typeName": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "O",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 164,
                  "end": 184,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 184,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 172,
                        "end": 184,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 173,
                            "end": 174,
                            "typeName": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 174,
                              "decorators": [],
                              "name": "O",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeOperator",
                            "start": 176,
                            "end": 183,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 182,
                              "end": 183,
                              "typeName": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 183,
                                "decorators": [],
                                "name": "I",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 172,
                        "decorators": [],
                        "name": "Omit",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 22,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "fn",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "fn",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 23,
      "end": 51,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 51,
        "raw": "'./aExp'",
        "value": "./aExp"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 31,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 31,
            "end": 36,
            "decorators": [],
            "name": "fnExp",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 36,
            "decorators": [],
            "name": "fnExp",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 72,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 71,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 69,
              "end": 71,
              "decorators": [],
              "name": "fn",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 99,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 80,
        "end": 99,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 86,
            "end": 98,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "fExp",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 93,
              "end": 98,
              "decorators": [],
              "name": "fnExp",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
