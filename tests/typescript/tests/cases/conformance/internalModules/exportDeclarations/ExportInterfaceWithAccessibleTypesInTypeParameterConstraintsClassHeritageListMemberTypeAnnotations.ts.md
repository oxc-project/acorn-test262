__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 405,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 405,
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
        "end": 405,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 84,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 38,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 39,
                "end": 84,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 59,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 52,
                        "end": 58
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 68,
                    "end": 78,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 71,
                        "end": 77
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 132,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 97,
              "end": 132,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 101,
                  "end": 131,
                  "id": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 114,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 109,
                        "end": 114,
                        "typeName": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 114,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 117,
                    "end": 131,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 119,
                        "end": 123,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 122,
                          "end": 123,
                          "value": 0,
                          "raw": "0"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 125,
                        "end": 129,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 128,
                          "end": 129,
                          "value": 0,
                          "raw": "0"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
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
            "start": 138,
            "end": 203,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 145,
              "end": 203,
              "id": {
                "type": "Identifier",
                "start": 155,
                "end": 162,
                "decorators": [],
                "name": "Point3d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 171,
                  "end": 176,
                  "expression": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 176,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 177,
                "end": 203,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 187,
                    "end": 197,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 196,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 190,
                        "end": 196
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 209,
            "end": 261,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 216,
              "end": 261,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 220,
                  "end": 260,
                  "id": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 237,
                    "decorators": [],
                    "name": "Origin3d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 228,
                      "end": 237,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 230,
                        "end": 237,
                        "typeName": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 237,
                          "decorators": [],
                          "name": "Point3d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 240,
                    "end": 260,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 242,
                        "end": 246,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 245,
                          "end": 246,
                          "value": 0,
                          "raw": "0"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 248,
                        "end": 252,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 251,
                          "end": 252,
                          "value": 0,
                          "raw": "0"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 254,
                        "end": 258,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 257,
                          "end": 258,
                          "value": 0,
                          "raw": "0"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
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
            "start": 267,
            "end": 403,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 274,
              "end": 403,
              "id": {
                "type": "Identifier",
                "start": 284,
                "end": 288,
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 288,
                "end": 310,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 289,
                    "end": 309,
                    "name": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 295,
                      "decorators": [],
                      "name": "TPoint",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 304,
                      "end": 309,
                      "typeName": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 309,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 310,
                "end": 403,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 320,
                    "end": 353,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 325,
                        "end": 338,
                        "decorators": [],
                        "name": "start",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 330,
                          "end": 338,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 332,
                            "end": 338,
                            "typeName": {
                              "type": "Identifier",
                              "start": 332,
                              "end": 338,
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 340,
                        "end": 351,
                        "decorators": [],
                        "name": "end",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 343,
                          "end": 351,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 345,
                            "end": 351,
                            "typeName": {
                              "type": "Identifier",
                              "start": 345,
                              "end": 351,
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 362,
                    "end": 376,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 367,
                      "decorators": [],
                      "name": "start",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 367,
                      "end": 375,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 369,
                        "end": 375,
                        "typeName": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 375,
                          "decorators": [],
                          "name": "TPoint",
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
                    "start": 385,
                    "end": 397,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 388,
                      "decorators": [],
                      "name": "end",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 388,
                      "end": 396,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 390,
                        "end": 396,
                        "typeName": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 396,
                          "decorators": [],
                          "name": "TPoint",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
