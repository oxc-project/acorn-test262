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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 93,
          "end": 96,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 131,
            "end": 154,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 138,
              "end": 154,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 144,
                  "end": 153,
                  "id": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 153,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 147,
                        "end": 153
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 201,
                "end": 204,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 256,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 62,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 35,
                    "end": 60,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 46,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 60,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 47,
                          "end": 56,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 48,
                            "end": 56,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 50,
                              "end": 56
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 58,
                        "end": 60,
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 101,
                          "end": 114,
                          "id": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              }
                            }
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
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "namespace",
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
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
  "end": 241,
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
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 113,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 131,
            "decorators": [],
            "name": "x2",
            "optional": false,
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
                  "decorators": [],
                  "name": "X2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 134,
            "end": 136,
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 176,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 179,
            "end": 189,
            "callee": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 185,
                "end": 188,
                "object": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "fooLength",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "fooLength",
          "optional": false,
          "typeAnnotation": null
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
