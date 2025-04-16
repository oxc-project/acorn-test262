__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 228,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 82,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 82,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "L",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 82,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 76,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 51,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 51,
                      "end": 76,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 52,
                          "end": 71,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 59,
                            "end": 71,
                            "name": "name",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 63,
                              "end": 71,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 65,
                                "end": 71
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
                        "start": 73,
                        "end": 76,
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
            "start": 87,
            "end": 226,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 94,
              "end": 226,
              "id": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "name": "L",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 103,
                "end": 226,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 113,
                    "end": 131,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 120,
                      "end": 131,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 124,
                          "end": 130,
                          "id": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 125,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 128,
                            "end": 130,
                            "value": 12,
                            "raw": "12"
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
                    "start": 140,
                    "end": 220,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 147,
                      "end": 220,
                      "id": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 163,
                        "end": 220,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 177,
                            "end": 187,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 178,
                              "end": 186,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 180,
                                "end": 186
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 200,
                            "end": 210,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 201,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 201,
                              "end": 209,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 203,
                                "end": 209
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
      "start": 229,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 238,
        "end": 268,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 244,
            "end": 266,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 251,
              "end": 266,
              "id": {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 262,
                "end": 265,
                "left": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 265,
                  "name": "L",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "start": 269,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 292,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 276,
                "end": 292,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 278,
                    "end": 290,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 282,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 284,
                        "end": 290
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
      "start": 294,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 302,
            "end": 318,
            "callee": {
              "type": "MemberExpression",
              "start": 306,
              "end": 309,
              "object": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "D",
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
                "start": 310,
                "end": 317,
                "value": "Hello",
                "raw": "'Hello'"
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
      "start": 320,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 352,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 327,
                "end": 352,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 329,
                    "end": 339,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 330,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 330,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 332,
                        "end": 338
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 340,
                    "end": 350,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 341,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 341,
                      "end": 349,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 343,
                        "end": 349
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
      "start": 353,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 369,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 369,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 369,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 360,
                "end": 369,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 360,
                  "end": 369,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 360,
                    "end": 363,
                    "left": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 361,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 363,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 369,
                    "name": "Point",
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
