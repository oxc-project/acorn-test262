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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 16,
              "end": 26,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "name": "x",
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
                "start": 17,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
                }
              },
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "C",
        "raw": "\"C\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 48,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "name": "y",
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
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
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
  "end": 151,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 150,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "D",
        "raw": "\"D\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 150,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 25,
            "end": 45,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 33,
                "end": 34,
                "imported": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 41,
              "end": 44,
              "value": "a",
              "raw": "\"a\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ImportDeclaration",
            "start": 50,
            "end": 70,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 58,
                "end": 59,
                "imported": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 66,
              "end": 69,
              "value": "b",
              "raw": "\"b\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 75,
            "end": 148,
            "id": {
              "type": "Literal",
              "start": 82,
              "end": 85,
              "value": "a",
              "raw": "\"a\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 86,
              "end": 148,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 96,
                  "end": 142,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 108,
                    "end": 142,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 122,
                        "end": 132,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "name": "getB",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 131,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 130,
                            "end": 131,
                            "typeName": {
                              "type": "Identifier",
                              "start": 130,
                              "end": 131,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
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
  "start": 31,
  "end": 189,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 188,
      "id": {
        "type": "Literal",
        "start": 46,
        "end": 49,
        "value": "E",
        "raw": "\"E\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 188,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 56,
            "end": 76,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 64,
                "end": 65,
                "imported": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 72,
              "end": 75,
              "value": "a",
              "raw": "\"a\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ImportDeclaration",
            "start": 81,
            "end": 103,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 89,
                "end": 92,
                "imported": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "name": "Cls",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "name": "Cls",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 99,
              "end": 102,
              "value": "C",
              "raw": "\"C\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 109,
            "end": 186,
            "id": {
              "type": "Literal",
              "start": 116,
              "end": 119,
              "value": "a",
              "raw": "\"a\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 120,
              "end": 186,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 130,
                  "end": 180,
                  "id": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 142,
                    "end": 180,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 156,
                        "end": 170,
                        "key": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 162,
                          "name": "getCls",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 169,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 169,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 169,
                              "name": "Cls",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
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
  "start": 62,
  "end": 186,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 62,
      "end": 84,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 70,
          "end": 71,
          "imported": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 83,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 85,
      "end": 96,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 92,
        "end": 95,
        "value": "D",
        "raw": "\"D\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 97,
      "end": 108,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 104,
        "end": 107,
        "value": "E",
        "raw": "\"E\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "A",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 148,
            "callee": {
              "type": "MemberExpression",
              "start": 128,
              "end": 146,
              "object": {
                "type": "MemberExpression",
                "start": 128,
                "end": 138,
                "object": {
                  "type": "CallExpression",
                  "start": 128,
                  "end": 136,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 128,
                    "end": 134,
                    "object": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 134,
                      "name": "getB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 146,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 158,
            "end": 184,
            "callee": {
              "type": "MemberExpression",
              "start": 158,
              "end": 182,
              "object": {
                "type": "MemberExpression",
                "start": 158,
                "end": 170,
                "object": {
                  "type": "CallExpression",
                  "start": 158,
                  "end": 168,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 158,
                    "end": 166,
                    "object": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 166,
                      "name": "getCls",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 182,
                "name": "toLowerCase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
