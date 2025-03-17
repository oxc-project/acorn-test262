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
  "end": 322,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 48,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 30,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 30,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 30,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 29,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 29,
                      "value": "./fo",
                      "raw": "\"./fo\""
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
              "start": 33,
              "end": 47,
              "properties": [
                {
                  "type": "Property",
                  "start": 35,
                  "end": 39,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 38,
                    "end": 39,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 41,
                  "end": 45,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
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
      "start": 49,
      "end": 103,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 56,
        "end": 103,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 84,
              "name": "y",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 84,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 63,
                  "end": 84,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 70,
                    "end": 77,
                    "literal": {
                      "type": "Literal",
                      "start": 70,
                      "end": 77,
                      "value": "./fo2",
                      "raw": "\"./fo2\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "TSQualifiedName",
                    "start": 79,
                    "end": 84,
                    "left": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 82,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
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
              "start": 87,
              "end": 102,
              "properties": [
                {
                  "type": "Property",
                  "start": 89,
                  "end": 94,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 92,
                    "end": 94,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 96,
                  "end": 100,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 99,
                    "end": 100,
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
      "start": 104,
      "end": 159,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 111,
        "end": 159,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 158,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 140,
              "name": "z",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 116,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 118,
                  "end": 140,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 125,
                    "end": 133,
                    "literal": {
                      "type": "Literal",
                      "start": 125,
                      "end": 133,
                      "value": "./foo2",
                      "raw": "\"./foo2\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "TSQualifiedName",
                    "start": 135,
                    "end": 140,
                    "left": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 138,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "Q",
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
              "start": 143,
              "end": 158,
              "properties": [
                {
                  "type": "Property",
                  "start": 145,
                  "end": 150,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 148,
                    "end": 150,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 152,
                  "end": 156,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 155,
                    "end": 156,
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
      "start": 161,
      "end": 259,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 168,
        "end": 259,
        "id": {
          "type": "Identifier",
          "start": 174,
          "end": 178,
          "name": "Bar2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 179,
          "end": 259,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 185,
              "end": 225,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 185,
                "end": 189,
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
                "start": 189,
                "end": 224,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 191,
                  "end": 224,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 192,
                      "end": 202,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 193,
                        "end": 201,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 195,
                          "end": 201
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 203,
                      "end": 213,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 204,
                        "end": 212,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 206,
                          "end": 212
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 214,
                      "end": 223,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 215,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 215,
                        "end": 223,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 217,
                          "end": 223
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
              "start": 230,
              "end": 257,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 230,
                "end": 241,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 241,
                "end": 257,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 242,
                    "end": 253,
                    "name": "input",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 248,
                      "end": 253,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 250,
                        "end": 253
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 255,
                  "end": 257,
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
      "start": 261,
      "end": 321,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 268,
        "end": 321,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 272,
            "end": 320,
            "id": {
              "type": "Identifier",
              "start": 272,
              "end": 300,
              "name": "shim",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 276,
                "end": 300,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 278,
                  "end": 300,
                  "exprName": {
                    "type": "TSImportType",
                    "start": 285,
                    "end": 300,
                    "argument": {
                      "type": "TSLiteralType",
                      "start": 292,
                      "end": 299,
                      "literal": {
                        "type": "Literal",
                        "start": 292,
                        "end": 299,
                        "value": "./fo2",
                        "raw": "\"./fo2\""
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
              "start": 303,
              "end": 320,
              "properties": [
                {
                  "type": "Property",
                  "start": 309,
                  "end": 318,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 312,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 318,
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
