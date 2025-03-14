__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 382,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 222,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 222,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 39,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 18,
              "end": 39,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 22,
                  "end": 39,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 26,
                    "end": 39,
                    "raw": "'hello world'",
                    "value": "hello world"
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 126,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 47,
              "end": 126,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 59,
                "end": 126,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 69,
                    "end": 120,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 80,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 80,
                      "end": 120,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 117,
                        "end": 120,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 81,
                          "end": 97,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 97,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 89,
                              "end": 97,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 91,
                                "end": 97
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 99,
                          "end": 115,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 115,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 107,
                              "end": 115,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 109,
                                "end": 115
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 131,
            "end": 220,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 138,
              "end": 220,
              "body": {
                "type": "TSModuleBlock",
                "start": 147,
                "end": 220,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 157,
                    "end": 214,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 164,
                      "end": 214,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 177,
                        "end": 214,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 191,
                            "end": 204,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 191,
                              "end": 195,
                              "decorators": [],
                              "name": "name",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 195,
                              "end": 203,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 197,
                                "end": 203
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 176,
                        "decorators": [],
                        "name": "Id",
                        "optional": false
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 223,
      "end": 260,
      "body": {
        "type": "TSModuleBlock",
        "start": 232,
        "end": 260,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 238,
            "end": 258,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 245,
              "end": 258,
              "id": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 231,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 275,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 275,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 269,
                "end": 275
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 278,
            "end": 283,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 278,
              "end": 281,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 317,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 292,
                "end": 317,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 294,
                    "end": 304,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 295,
                      "end": 303,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 297,
                        "end": 303
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 305,
                    "end": 315,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 314,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 320,
            "end": 339,
            "arguments": [
              {
                "type": "Literal",
                "start": 334,
                "end": 335,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 337,
                "end": 338,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 324,
              "end": 333,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 324,
                "end": 327,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 328,
                "end": 333,
                "decorators": [],
                "name": "Point",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 364,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 348,
                "end": 364,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 350,
                    "end": 362,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 354,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 356,
                        "end": 362
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 381,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 381,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 373,
                "end": 381,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 373,
                  "end": 381,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 373,
                    "end": 378,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 373,
                      "end": 376,
                      "left": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 376,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 381,
                    "decorators": [],
                    "name": "Id",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
