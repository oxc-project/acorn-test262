__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 504,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 24,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 24,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 21,
        "decorators": [],
        "name": "IArguments",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 504,
      "body": {
        "type": "TSModuleBlock",
        "start": 44,
        "end": 504,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 50,
            "end": 98,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 57,
              "end": 98,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 66,
                "end": 72,
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 88,
                  "decorators": [],
                  "name": "pattern",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 82,
                      "end": 88
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 91,
                  "end": 97,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 97,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 103,
            "end": 166,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 110,
              "end": 166,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 119,
                "end": 125,
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 126,
                  "end": 141,
                  "decorators": [],
                  "name": "pattern",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 156,
                  "decorators": [],
                  "name": "flags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 157,
                "end": 165,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 165,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 165,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 171,
            "end": 502,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 178,
              "end": 502,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 191,
                "end": 502,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 201,
                    "end": 230,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 212,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 212,
                      "end": 230,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 213,
                          "end": 228,
                          "decorators": [],
                          "name": "pattern",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 220,
                            "end": 228,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 222,
                              "end": 228
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 239,
                    "end": 283,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 250,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 250,
                      "end": 283,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 251,
                          "end": 266,
                          "decorators": [],
                          "name": "pattern",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 258,
                            "end": 266,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 260,
                              "end": 266
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 268,
                          "end": 281,
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 273,
                            "end": 281,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 275,
                              "end": 281
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 292,
                    "end": 323,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 296,
                      "decorators": [],
                      "name": "exec",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 296,
                      "end": 323,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 297,
                          "end": 311,
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 303,
                            "end": 311,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 305,
                              "end": 311
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 312,
                        "end": 322,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 314,
                          "end": 322,
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 314,
                            "end": 320
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 332,
                    "end": 362,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 336,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 336,
                      "end": 362,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 337,
                          "end": 351,
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 343,
                            "end": 351,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 345,
                              "end": 351
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 352,
                        "end": 361,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 354,
                          "end": 361
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 371,
                    "end": 386,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 377,
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 377,
                      "end": 385,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 379,
                        "end": 385
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 395,
                    "end": 411,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 401,
                      "decorators": [],
                      "name": "global",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 401,
                      "end": 410,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 403,
                        "end": 410
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 420,
                    "end": 440,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 430,
                      "decorators": [],
                      "name": "ignoreCase",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 430,
                      "end": 439,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 432,
                        "end": 439
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 449,
                    "end": 468,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 458,
                      "decorators": [],
                      "name": "multiline",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 458,
                      "end": 467,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 460,
                        "end": 467
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 477,
                    "end": 496,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 486,
                      "decorators": [],
                      "name": "lastIndex",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 486,
                      "end": 495,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 488,
                        "end": 495
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
