__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 16,
              "end": 26,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 51,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 48,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 48,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"C\"",
        "value": "C",
        "regex": null,
        "bigint": null
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
  "end": 151,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 150,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 150,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 25,
            "end": 45,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 41,
              "end": 44,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 33,
                "end": 34,
                "imported": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "ImportDeclaration",
            "start": 50,
            "end": 70,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 66,
              "end": 69,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 58,
                "end": 59,
                "imported": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "TSModuleDeclaration",
            "start": 75,
            "end": 148,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 86,
              "end": 148,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 96,
                  "end": 142,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 108,
                    "end": 142,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 122,
                        "end": 132,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "getB",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 131,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 130,
                            "end": 131,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 130,
                              "end": 131,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "static": false,
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Literal",
              "start": 82,
              "end": 85,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"D\"",
        "value": "D",
        "regex": null,
        "bigint": null
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
  "start": 31,
  "end": 189,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 188,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 188,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 56,
            "end": 76,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 72,
              "end": 75,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 64,
                "end": 65,
                "imported": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "ImportDeclaration",
            "start": 81,
            "end": 103,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 99,
              "end": 102,
              "raw": "\"C\"",
              "value": "C",
              "regex": null,
              "bigint": null
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 89,
                "end": 92,
                "imported": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "TSModuleDeclaration",
            "start": 109,
            "end": 186,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 120,
              "end": 186,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 130,
                  "end": 180,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 142,
                    "end": 180,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 156,
                        "end": 170,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 162,
                          "decorators": [],
                          "name": "getCls",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 169,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 169,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 169,
                              "decorators": [],
                              "name": "Cls",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "static": false,
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Literal",
              "start": 116,
              "end": 119,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 46,
        "end": 49,
        "raw": "\"E\"",
        "value": "E",
        "regex": null,
        "bigint": null
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
  "start": 62,
  "end": 185,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 62,
      "end": 84,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 83,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 70,
          "end": 71,
          "imported": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 85,
      "end": 96,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 92,
        "end": 95,
        "raw": "\"D\"",
        "value": "D",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 97,
      "end": 108,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 104,
        "end": 107,
        "raw": "\"E\"",
        "value": "E",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 118,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 148,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 128,
              "end": 146,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 128,
                "end": 138,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 128,
                  "end": 136,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 128,
                    "end": 134,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 134,
                      "decorators": [],
                      "name": "getB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 146,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 158,
            "end": 184,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 158,
              "end": 182,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 158,
                "end": 170,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 158,
                  "end": 168,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 158,
                    "end": 166,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 166,
                      "decorators": [],
                      "name": "getCls",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 182,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
