__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 47,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 50,
      "end": 65,
      "expression": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "Point",
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
  "start": 0,
  "end": 262,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 86,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 84,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "I",
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
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
                      "name": "b",
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
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 181,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 95,
        "end": 181,
        "id": {
          "type": "Identifier",
          "start": 105,
          "end": 108,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 109,
          "end": 181,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 115,
              "end": 179,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 122,
                "end": 179,
                "id": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "J",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 134,
                  "end": 179,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 144,
                      "end": 154,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 145,
                        "end": 153,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 147,
                          "end": 153
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 163,
                      "end": 173,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 164,
                        "end": 172,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 166,
                          "end": 172
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 183,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 193,
        "end": 246,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 199,
            "end": 211,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 203,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 205,
                "end": 210,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 205,
                  "end": 210,
                  "left": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 208,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 244,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 227,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 228,
                  "end": 240,
                  "name": "input",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 235,
                      "end": 240,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 235,
                        "end": 240,
                        "left": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 238,
                          "name": "Baz",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "name": "J",
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 244,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 247,
      "end": 261,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 256,
          "end": 259,
          "local": {
            "type": "Identifier",
            "start": 256,
            "end": 259,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 256,
            "end": 259,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
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
  "end": 269,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 49,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 31,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 31,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 30,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 30,
                      "value": "./foo",
                      "raw": "\"./foo\""
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 34,
              "end": 48,
              "properties": [
                {
                  "type": "Property",
                  "start": 36,
                  "end": 40,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 42,
                  "end": 46,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 45,
                    "end": 46,
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 105,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 105,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 104,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 86,
              "name": "y",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 64,
                  "end": 86,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 71,
                    "end": 79,
                    "literal": {
                      "type": "Literal",
                      "start": 71,
                      "end": 79,
                      "value": "./foo2",
                      "raw": "\"./foo2\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "TSQualifiedName",
                    "start": 81,
                    "end": 86,
                    "left": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 84,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "name": "I",
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
            "init": {
              "type": "ObjectExpression",
              "start": 89,
              "end": 104,
              "properties": [
                {
                  "type": "Property",
                  "start": 91,
                  "end": 96,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 94,
                    "end": 96,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 98,
                  "end": 102,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 101,
                    "end": 102,
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
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 205,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 114,
        "end": 205,
        "id": {
          "type": "Identifier",
          "start": 120,
          "end": 124,
          "name": "Bar2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 125,
          "end": 205,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 131,
              "end": 171,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 131,
                "end": 135,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 170,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 137,
                  "end": 170,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 138,
                      "end": 148,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 139,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 139,
                        "end": 147,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 141,
                          "end": 147
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 149,
                      "end": 159,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 158,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 152,
                          "end": 158
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 160,
                      "end": 169,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 161,
                        "end": 169,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 163,
                          "end": 169
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 176,
              "end": 203,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 176,
                "end": 187,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 187,
                "end": 203,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 188,
                    "end": 199,
                    "name": "input",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 194,
                      "end": 199,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 196,
                        "end": 199
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 201,
                  "end": 203,
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
      "start": 207,
      "end": 268,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 214,
        "end": 268,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 218,
            "end": 267,
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 247,
              "name": "shim",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 222,
                "end": 247,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 224,
                  "end": 247,
                  "exprName": {
                    "type": "TSImportType",
                    "start": 231,
                    "end": 247,
                    "argument": {
                      "type": "TSLiteralType",
                      "start": 238,
                      "end": 246,
                      "literal": {
                        "type": "Literal",
                        "start": 238,
                        "end": 246,
                        "value": "./foo2",
                        "raw": "\"./foo2\""
                      }
                    },
                    "options": null,
                    "qualifier": null,
                    "typeArguments": null
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 250,
              "end": 267,
              "properties": [
                {
                  "type": "Property",
                  "start": 256,
                  "end": 265,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 259,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 265,
                    "name": "Bar2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
