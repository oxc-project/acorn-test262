__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 25,
          "decorators": [],
          "name": "Other",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 28,
          "end": 45,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 30,
              "end": 43,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 35,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 93,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 93,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 75,
          "decorators": [],
          "name": "SomeType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 78,
          "end": 92,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 80,
              "end": 90,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 80,
                "end": 83,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 85,
                  "end": 90,
                  "typeName": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 90,
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 53,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 52,
              "decorators": [],
              "name": "shouldLookupName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 39,
                  "end": 52,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 46,
                    "end": 52
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 111,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 111,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 110,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 110,
              "decorators": [],
              "name": "shouldReuseLocalName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 95,
                "end": 110,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 97,
                  "end": 110,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 104,
                    "end": 110
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 112,
      "end": 161,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 119,
        "end": 161,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 133,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 160,
              "decorators": [],
              "name": "reuseDepName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 145,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 147,
                  "end": 160,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 154,
                    "end": 160
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 162,
      "end": 213,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 169,
        "end": 213,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 183,
            "end": 212,
            "id": {
              "type": "Identifier",
              "start": 183,
              "end": 212,
              "decorators": [],
              "name": "shouldBeElided",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 197,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 199,
                  "end": 212,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 206,
                    "end": 212
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 214,
      "end": 277,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 221,
        "end": 277,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 235,
            "end": 276,
            "id": {
              "type": "Identifier",
              "start": 235,
              "end": 276,
              "decorators": [],
              "name": "isNotAccessibleShouldError",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 261,
                "end": 276,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 263,
                  "end": 276,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 270,
                    "end": 276
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 980,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "value": "./inner",
        "raw": "'./inner'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 126,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 57,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 57,
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 57,
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 59,
          "end": 71,
          "imported": {
            "type": "Identifier",
            "start": 59,
            "end": 71,
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 71,
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 73,
          "end": 93,
          "imported": {
            "type": "Identifier",
            "start": 73,
            "end": 93,
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 73,
            "end": 93,
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 95,
          "end": 109,
          "imported": {
            "type": "Identifier",
            "start": 95,
            "end": 109,
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 95,
            "end": 109,
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 117,
        "end": 126,
        "value": "./other",
        "raw": "'./other'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 127,
      "end": 898,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 134,
        "end": 898,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 148,
            "end": 898,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 898,
              "decorators": [],
              "name": "goodDeclaration",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 163,
                "end": 898,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 165,
                  "end": 898,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 165,
                    "end": 168,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 166,
                        "end": 167,
                        "name": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 167,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 898,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 174,
                      "end": 898,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 177,
                        "end": 898,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 180,
                          "end": 898,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 276,
                              "end": 321,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 276,
                                "end": 293,
                                "decorators": [],
                                "name": "shouldPrintResult",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 293,
                                "end": 320,
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "start": 295,
                                  "end": 320,
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "start": 295,
                                    "end": 296,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 295,
                                      "end": 296,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "extendsType": {
                                    "type": "TSTypeReference",
                                    "start": 305,
                                    "end": 310,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 305,
                                      "end": 310,
                                      "decorators": [],
                                      "name": "Other",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "trueType": {
                                    "type": "TSLiteralType",
                                    "start": 312,
                                    "end": 315,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 312,
                                      "end": 315,
                                      "value": "O",
                                      "raw": "\"O\""
                                    }
                                  },
                                  "falseType": {
                                    "type": "TSLiteralType",
                                    "start": 317,
                                    "end": 320,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 317,
                                      "end": 320,
                                      "value": "N",
                                      "raw": "\"N\""
                                    }
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 467,
                              "end": 531,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 467,
                                "end": 485,
                                "decorators": [],
                                "name": "shouldPrintResult2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 485,
                                "end": 530,
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "start": 487,
                                  "end": 530,
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "start": 487,
                                    "end": 488,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 487,
                                      "end": 488,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "extendsType": {
                                    "type": "TSTypeQuery",
                                    "start": 497,
                                    "end": 518,
                                    "exprName": {
                                      "type": "Identifier",
                                      "start": 504,
                                      "end": 518,
                                      "decorators": [],
                                      "name": "shouldBeElided",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "trueType": {
                                    "type": "TSTypeReference",
                                    "start": 520,
                                    "end": 525,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 520,
                                      "end": 525,
                                      "decorators": [],
                                      "name": "Other",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "falseType": {
                                    "type": "TSLiteralType",
                                    "start": 527,
                                    "end": 530,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 527,
                                      "end": 530,
                                      "value": "N",
                                      "raw": "\"N\""
                                    }
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 612,
                              "end": 672,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 612,
                                "end": 628,
                                "decorators": [],
                                "name": "shouldLookupName",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 628,
                                "end": 671,
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "start": 630,
                                  "end": 671,
                                  "exprName": {
                                    "type": "TSImportType",
                                    "start": 637,
                                    "end": 671,
                                    "argument": {
                                      "type": "TSLiteralType",
                                      "start": 644,
                                      "end": 653,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 644,
                                        "end": 653,
                                        "value": "./other",
                                        "raw": "'./other'"
                                      }
                                    },
                                    "options": null,
                                    "qualifier": {
                                      "type": "Identifier",
                                      "start": 655,
                                      "end": 671,
                                      "decorators": [],
                                      "name": "shouldLookupName",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 742,
                              "end": 791,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 742,
                                "end": 762,
                                "decorators": [],
                                "name": "shouldReuseLocalName",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 762,
                                "end": 791,
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "start": 764,
                                  "end": 791,
                                  "exprName": {
                                    "type": "Identifier",
                                    "start": 771,
                                    "end": 791,
                                    "decorators": [],
                                    "name": "shouldReuseLocalName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 862,
                              "end": 896,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 862,
                                "end": 874,
                                "decorators": [],
                                "name": "reuseDepName",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 874,
                                "end": 895,
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "start": 876,
                                  "end": 895,
                                  "exprName": {
                                    "type": "Identifier",
                                    "start": 883,
                                    "end": 895,
                                    "decorators": [],
                                    "name": "reuseDepName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 899,
      "end": 979,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 908,
          "end": 924,
          "local": {
            "type": "Identifier",
            "start": 908,
            "end": 924,
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 908,
            "end": 924,
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 926,
          "end": 946,
          "local": {
            "type": "Identifier",
            "start": 926,
            "end": 946,
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 926,
            "end": 946,
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 948,
          "end": 960,
          "local": {
            "type": "Identifier",
            "start": 948,
            "end": 960,
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 948,
            "end": 960,
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 962,
          "end": 976,
          "local": {
            "type": "Identifier",
            "start": 962,
            "end": 976,
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 962,
            "end": 976,
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 81,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "decorators": [],
            "name": "goodDeclaration",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "decorators": [],
            "name": "goodDeclaration",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 26,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 26,
            "end": 46,
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 46,
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 48,
          "end": 62,
          "imported": {
            "type": "Identifier",
            "start": 48,
            "end": 62,
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 62,
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 70,
        "end": 80,
        "value": "some-dep",
        "raw": "\"some-dep\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 121,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 89,
        "end": 121,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 95,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSInstantiationExpression",
              "start": 101,
              "end": 120,
              "expression": {
                "type": "Identifier",
                "start": 101,
                "end": 116,
                "decorators": [],
                "name": "goodDeclaration",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 116,
                "end": 120,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 117,
                    "end": 119,
                    "members": []
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
