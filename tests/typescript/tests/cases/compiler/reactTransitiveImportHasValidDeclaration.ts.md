__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DetailedHTMLProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 64
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 65,
                    "end": 66
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 69
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 68,
                    "end": 69
                  }
                ],
                "start": 64,
                "end": 70
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 71,
                "end": 73
              },
              "declare": false,
              "start": 37,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 30,
            "end": 73
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 109
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 110,
                    "end": 111
                  }
                ],
                "start": 109,
                "end": 112
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 113,
                "end": 115
              },
              "declare": false,
              "start": 85,
              "end": 115
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 78,
            "end": 115
          }
        ],
        "start": 24,
        "end": 117
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 117
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 132
      },
      "start": 118,
      "end": 133
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 159
      },
      "start": 134,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 47,
        "end": 54
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTMLAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 96
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 98
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 97,
                  "end": 98
                }
              ],
              "start": 96,
              "end": 99
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "css",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 113
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 116,
                      "end": 123
                    },
                    "start": 114,
                    "end": 123
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 110,
                  "end": 124
                }
              ],
              "start": 100,
              "end": 130
            },
            "declare": false,
            "start": 72,
            "end": 130
          }
        ],
        "start": 55,
        "end": 132
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 32,
      "end": 132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledOtherComponentList",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 174
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "div",
                "raw": "\"div\"",
                "start": 181,
                "end": 186
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 193
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DetailedHTMLProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 211
                    },
                    "start": 188,
                    "end": 211
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "React",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 217
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HTMLAttributes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 232
                          },
                          "start": 212,
                          "end": 232
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "HTMLDivElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 233,
                                "end": 247
                              },
                              "typeArguments": null,
                              "start": 233,
                              "end": 247
                            }
                          ],
                          "start": 232,
                          "end": 248
                        },
                        "start": 212,
                        "end": 248
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLDivElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 264
                        },
                        "typeArguments": null,
                        "start": 250,
                        "end": 264
                      }
                    ],
                    "start": 211,
                    "end": 265
                  },
                  "start": 188,
                  "end": 265
                },
                "start": 186,
                "end": 265
              },
              "accessibility": null,
              "static": false,
              "start": 181,
              "end": 265
            }
          ],
          "start": 175,
          "end": 267
        },
        "declare": false,
        "start": 140,
        "end": 267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 133,
      "end": 267
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledOtherComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 305
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 306,
              "end": 307
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 310
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 309,
              "end": 310
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 312,
              "end": 313
            }
          ],
          "start": 305,
          "end": 314
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 315,
          "end": 317
        },
        "declare": false,
        "start": 275,
        "end": 317
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 268,
      "end": 317
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 318
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./types/react",
        "raw": "\"./types/react\"",
        "start": 14,
        "end": 29
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 30
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledOtherComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledOtherComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 28
          },
          "importKind": "value",
          "start": 8,
          "end": 28
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledOtherComponentList",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 54
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledOtherComponentList",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 54
          },
          "importKind": "value",
          "start": 30,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "create-emotion-styled",
        "raw": "\"create-emotion-styled\"",
        "start": 61,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 85
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "styled",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 116
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 122,
                "end": 128
              },
              "start": 120,
              "end": 128
            },
            "start": 117,
            "end": 128
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 135,
                    "end": 141
                  },
                  "start": 133,
                  "end": 141
                },
                "start": 132,
                "end": 141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledOtherComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 166
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 167,
                      "end": 169
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StyledOtherComponentList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 195
                        },
                        "typeArguments": null,
                        "start": 171,
                        "end": 195
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "div",
                          "raw": "\"div\"",
                          "start": 196,
                          "end": 201
                        },
                        "start": 196,
                        "end": 201
                      },
                      "start": 171,
                      "end": 202
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 204,
                      "end": 207
                    }
                  ],
                  "start": 166,
                  "end": 208
                },
                "start": 146,
                "end": 208
              },
              "start": 143,
              "end": 208
            },
            "start": 131,
            "end": 208
          },
          "start": 129,
          "end": 208
        },
        "body": null,
        "expression": false,
        "start": 101,
        "end": 209
      },
      "exportKind": "value",
      "start": 86,
      "end": 209
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 210
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "styled",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react-emotion",
        "raw": "\"react-emotion\"",
        "start": 19,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Form",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 55
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "div",
                  "raw": "'div'",
                  "start": 56,
                  "end": 61
                }
              ],
              "optional": false,
              "start": 49,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 70
                    },
                    "value": {
                      "type": "Literal",
                      "value": "red",
                      "raw": "\"red\"",
                      "start": 72,
                      "end": 77
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 65,
                    "end": 77
                  }
                ],
                "start": 63,
                "end": 79
              }
            ],
            "optional": false,
            "start": 49,
            "end": 80
          },
          "definite": false,
          "start": 42,
          "end": 80
        }
      ],
      "declare": false,
      "start": 36,
      "end": 80
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Form",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 101
      },
      "exportKind": "value",
      "start": 82,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
