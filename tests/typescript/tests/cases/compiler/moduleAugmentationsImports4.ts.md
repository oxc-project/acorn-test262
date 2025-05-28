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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 16,
              "end": 26,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 48,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "local": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
            "phase": null,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "local": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
            "phase": null,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
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
                          "decorators": [],
                          "name": "getB",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "local": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
            "phase": null,
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
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
                },
                "local": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
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
            "phase": null,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
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
                          "decorators": [],
                          "name": "getCls",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "Cls",
                              "optional": false,
                              "typeAnnotation": null
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
  "end": 185,
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
      "phase": null,
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 119,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 118,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 149,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 148,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 134,
                      "decorators": [],
                      "name": "getB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 146,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 185,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 184,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 166,
                      "decorators": [],
                      "name": "getCls",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 182,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
