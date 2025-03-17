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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 22,
                  "end": 39,
                  "id": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 126,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 47,
              "end": 126,
              "id": {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 59,
                "end": 126,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 69,
                    "end": 120,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 80,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 80,
                      "end": 120,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 89,
                              "end": 97,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 91,
                                "end": 97
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 107,
                              "end": 115,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 109,
                                "end": 115
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 117,
                        "end": 120,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "Id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
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
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 275,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 275,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 269,
                "end": 275
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 317,
            "name": "b",
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 328,
                "end": 333,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 364,
            "name": "c",
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
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 381,
            "name": "c",
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
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 376,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 381,
                    "name": "Id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
