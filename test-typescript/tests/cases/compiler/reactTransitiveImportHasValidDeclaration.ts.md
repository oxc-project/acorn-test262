__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 23,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 117,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 73,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 37,
              "end": 73,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 64,
                "name": "DetailedHTMLProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 64,
                "end": 70,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 65,
                    "end": 66,
                    "name": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 68,
                    "end": 69,
                    "name": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "body": {
                "type": "TSInterfaceBody",
                "start": 71,
                "end": 73,
                "body": []
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
            "start": 78,
            "end": 115,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 85,
              "end": 115,
              "id": {
                "type": "Identifier",
                "start": 95,
                "end": 109,
                "name": "HTMLAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 109,
                "end": 112,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 110,
                    "end": 111,
                    "name": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "body": {
                "type": "TSInterfaceBody",
                "start": 113,
                "end": 115,
                "body": []
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
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 118,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 127,
        "end": 132,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 134,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 159,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "start": 32,
  "end": 318,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 32,
      "end": 132,
      "id": {
        "type": "Literal",
        "start": 47,
        "end": 54,
        "value": "react",
        "raw": "'react'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 55,
        "end": 132,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 72,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 96,
              "name": "HTMLAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 96,
              "end": 99,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 97,
                  "end": 98,
                  "name": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 100,
              "end": 130,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 110,
                  "end": 124,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 113,
                    "name": "css",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 116,
                      "end": 123
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 267,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 140,
        "end": 267,
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 174,
          "name": "StyledOtherComponentList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 175,
          "end": 267,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 181,
              "end": 265,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 181,
                "end": 186,
                "value": "div",
                "raw": "\"div\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 186,
                "end": 265,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 188,
                  "end": 265,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 188,
                    "end": 211,
                    "left": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 193,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 211,
                      "name": "DetailedHTMLProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 211,
                    "end": 265,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 212,
                        "end": 248,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 212,
                          "end": 232,
                          "left": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 217,
                            "name": "React",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 232,
                            "name": "HTMLAttributes",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 232,
                          "end": 248,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 233,
                              "end": 247,
                              "typeName": {
                                "type": "Identifier",
                                "start": 233,
                                "end": 247,
                                "name": "HTMLDivElement",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 250,
                        "end": 264,
                        "typeName": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 264,
                          "name": "HTMLDivElement",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
      "start": 268,
      "end": 317,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 275,
        "end": 317,
        "id": {
          "type": "Identifier",
          "start": 285,
          "end": 305,
          "name": "StyledOtherComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 305,
          "end": 314,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 306,
              "end": 307,
              "name": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 309,
              "end": 310,
              "name": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 312,
              "end": 313,
              "name": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 315,
          "end": 317,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 31,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 30,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 29,
        "value": "./types/react",
        "raw": "\"./types/react\""
      },
      "attributes": [],
      "exportKind": "value"
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
  "end": 210,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 85,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 28,
            "name": "StyledOtherComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 28,
            "name": "StyledOtherComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 54,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 54,
            "name": "StyledOtherComponentList",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 54,
            "name": "StyledOtherComponentList",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 84,
        "value": "create-emotion-styled",
        "raw": "\"create-emotion-styled\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 86,
      "end": 209,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 101,
        "end": 209,
        "id": {
          "type": "Identifier",
          "start": 110,
          "end": 116,
          "name": "styled",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 117,
            "end": 128,
            "name": "tag",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 122,
                "end": 128
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 129,
          "end": 208,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 131,
            "end": 208,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 141,
                "name": "o",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 133,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 135,
                    "end": 141
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 166,
                  "name": "StyledOtherComponent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 166,
                  "end": 208,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 167,
                      "end": 169,
                      "members": []
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "start": 171,
                      "end": 202,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 195,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 195,
                          "name": "StyledOtherComponentList",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 196,
                        "end": 201,
                        "literal": {
                          "type": "Literal",
                          "start": 196,
                          "end": 201,
                          "value": "div",
                          "raw": "\"div\""
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 204,
                      "end": 207
                    }
                  ]
                }
              }
            }
          }
        }
      },
      "exportKind": "value"
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
  "end": 102,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "name": "styled",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 34,
        "value": "react-emotion",
        "raw": "\"react-emotion\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "name": "Form",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 49,
            "end": 80,
            "callee": {
              "type": "CallExpression",
              "start": 49,
              "end": 62,
              "callee": {
                "type": "Identifier",
                "start": 49,
                "end": 55,
                "name": "styled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 56,
                  "end": 61,
                  "value": "div",
                  "raw": "'div'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 63,
                "end": 79,
                "properties": [
                  {
                    "type": "Property",
                    "start": 65,
                    "end": 77,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 70,
                      "name": "color",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 72,
                      "end": 77,
                      "value": "red",
                      "raw": "\"red\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 82,
      "end": 101,
      "declaration": {
        "type": "Identifier",
        "start": 97,
        "end": 101,
        "name": "Form",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
