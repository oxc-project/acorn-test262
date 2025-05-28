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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 222,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 39,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 18,
              "end": 39,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 22,
                  "end": 39,
                  "id": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 26,
                    "end": 39,
                    "value": "hello world",
                    "raw": "'hello world'"
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 126,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 47,
              "end": 126,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 59,
                "end": 126,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 69,
                    "end": 120,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 80,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 80,
                      "end": 120,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 117,
                        "end": 120,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 131,
            "end": 220,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 138,
              "end": 220,
              "id": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 147,
                "end": 220,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 157,
                    "end": 214,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 164,
                      "end": 214,
                      "id": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 176,
                        "decorators": [],
                        "name": "Id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 191,
                              "end": 195,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 195,
                              "end": 203,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 197,
                                "end": 203
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 223,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 231,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 232,
        "end": 260,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 238,
            "end": 258,
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
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 284,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 283,
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
            "object": {
              "type": "MemberExpression",
              "start": 278,
              "end": 281,
              "object": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 340,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 339,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 295,
                      "end": 303,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 297,
                        "end": 303
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 305,
                    "end": 315,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 314,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 320,
            "end": 339,
            "callee": {
              "type": "MemberExpression",
              "start": 324,
              "end": 333,
              "object": {
                "type": "MemberExpression",
                "start": 324,
                "end": 327,
                "object": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 328,
                "end": 333,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 334,
                "end": 335,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 337,
                "end": 338,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 365,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 364,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 354,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 356,
                        "end": 362
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 382,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 381,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 376,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 381,
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
