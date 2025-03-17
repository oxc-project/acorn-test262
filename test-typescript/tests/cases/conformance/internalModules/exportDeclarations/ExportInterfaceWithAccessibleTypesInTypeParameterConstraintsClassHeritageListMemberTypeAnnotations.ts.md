__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 406,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 405,
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
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 132,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 97,
              "end": 132,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 101,
                  "end": 131,
                  "id": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 114,
                    "name": "Origin",
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
                          "name": "Point",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 122,
                          "end": 123,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 125,
                        "end": 129,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 128,
                          "end": 129,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
                "name": "Point3d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 171,
                  "end": 176,
                  "expression": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 176,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
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
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 209,
            "end": 261,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 216,
              "end": 261,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 220,
                  "end": 260,
                  "id": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 237,
                    "name": "Origin3d",
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
                          "name": "Point3d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 245,
                          "end": 246,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 248,
                        "end": 252,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 251,
                          "end": 252,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 254,
                        "end": 258,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 257,
                          "end": 258,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
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
                      "name": "TPoint",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 304,
                      "end": 309,
                      "typeName": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 309,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "start",
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
                              "name": "TPoint",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 340,
                        "end": 351,
                        "name": "end",
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
                              "name": "TPoint",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                      "name": "start",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "TPoint",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "name": "end",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "TPoint",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            "attributes": [],
            "exportKind": "type"
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
