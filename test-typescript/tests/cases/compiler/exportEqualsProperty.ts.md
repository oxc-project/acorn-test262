__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 71,
  "end": 262,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 71,
      "end": 156,
      "id": {
        "type": "TSQualifiedName",
        "start": 89,
        "end": 96,
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 92,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 93,
          "end": 96,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 156,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 103,
            "end": 126,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 110,
              "end": 126,
              "id": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
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
            "start": 131,
            "end": 154,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 138,
              "end": 154,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 144,
                  "end": 153,
                  "id": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 153,
                    "name": "X",
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
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 158,
      "end": 207,
      "id": {
        "type": "Literal",
        "start": 173,
        "end": 181,
        "value": "foobar",
        "raw": "\"foobar\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 182,
        "end": 207,
        "body": [
          {
            "type": "TSExportAssignment",
            "start": 188,
            "end": 205,
            "expression": {
              "type": "MemberExpression",
              "start": 197,
              "end": 204,
              "object": {
                "type": "Identifier",
                "start": 197,
                "end": 200,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 201,
                "end": 204,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 209,
      "end": 261,
      "id": {
        "type": "Literal",
        "start": 224,
        "end": 233,
        "value": "foobarx",
        "raw": "\"foobarx\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 234,
        "end": 261,
        "body": [
          {
            "type": "TSExportAssignment",
            "start": 240,
            "end": 259,
            "expression": {
              "type": "MemberExpression",
              "start": 249,
              "end": 258,
              "object": {
                "type": "MemberExpression",
                "start": 249,
                "end": 256,
                "object": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 252,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 256,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 134,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 62,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 62,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 35,
                    "end": 60,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 46,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 60,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 47,
                          "end": 56,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 48,
                            "end": 56,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 50,
                              "end": 56
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 58,
                        "end": 60,
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
            "start": 67,
            "end": 117,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 74,
              "end": 117,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 86,
                "end": 117,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 88,
                    "end": 115,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 95,
                      "end": 115,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 101,
                          "end": 114,
                          "id": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "name": "b",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 113,
                            "end": 114,
                            "value": 0,
                            "raw": "0"
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
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 120,
      "end": 133,
      "expression": {
        "type": "MemberExpression",
        "start": 129,
        "end": 132,
        "object": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
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
  "end": 23,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 22,
      "expression": {
        "type": "MemberExpression",
        "start": 9,
        "end": 21,
        "object": {
          "type": "Literal",
          "start": 9,
          "end": 14,
          "value": "foo",
          "raw": "\"foo\""
        },
        "property": {
          "type": "Identifier",
          "start": 15,
          "end": 21,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
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
  "start": 43,
  "end": 242,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 70,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 52,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "X",
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
        "end": 69,
        "value": "foobar",
        "raw": "\"foobar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 71,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 80,
        "name": "X2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 83,
        "end": 101,
        "expression": {
          "type": "Literal",
          "start": 91,
          "end": 100,
          "value": "foobarx",
          "raw": "\"foobarx\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 113,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "name": "X",
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
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 131,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 131,
                  "name": "X2",
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
            "type": "Identifier",
            "start": 134,
            "end": 136,
            "name": "X2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 139,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 150,
        "end": 164,
        "expression": {
          "type": "Literal",
          "start": 158,
          "end": 163,
          "value": "./a",
          "raw": "\"./a\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 176,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 176,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "name": "B",
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
            "type": "NewExpression",
            "start": 179,
            "end": 189,
            "callee": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 185,
                "end": 188,
                "object": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 192,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 208,
        "name": "fooLength",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 211,
        "end": 225,
        "expression": {
          "type": "Literal",
          "start": 219,
          "end": 224,
          "value": "./b",
          "raw": "\"./b\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 241,
      "expression": {
        "type": "BinaryExpression",
        "start": 227,
        "end": 240,
        "left": {
          "type": "Identifier",
          "start": 227,
          "end": 236,
          "name": "fooLength",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 239,
          "end": 240,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
