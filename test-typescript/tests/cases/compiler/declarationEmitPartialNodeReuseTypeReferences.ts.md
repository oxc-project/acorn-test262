__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 35,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 25,
          "decorators": [],
          "name": "SpecialString",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 28,
          "end": 34
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 36,
      "end": 71,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 61,
        "decorators": [],
        "name": "PrivateSpecialString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 64,
        "end": 70
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 135,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 80,
        "end": 135,
        "body": {
          "type": "TSModuleBlock",
          "start": 92,
          "end": 135,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 98,
              "end": 133,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 105,
                "end": 133,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 123,
                  "decorators": [],
                  "name": "SpecialString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 126,
                  "end": 132
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 304,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 143,
        "end": 304,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 149,
            "end": 303,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 153,
              "end": 303,
              "async": false,
              "body": {
                "type": "TSAsExpression",
                "start": 223,
                "end": 303,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 223,
                  "end": 228,
                  "expression": {
                    "type": "Literal",
                    "start": 223,
                    "end": 227,
                    "raw": "null",
                    "value": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 232,
                  "end": 303,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 234,
                      "end": 253,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 237,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 237,
                        "end": 252,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 239,
                          "end": 252,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 239,
                            "end": 252,
                            "decorators": [],
                            "name": "SpecialString",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 254,
                      "end": 280,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 257,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 257,
                        "end": 279,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 259,
                          "end": 279,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 259,
                            "end": 279,
                            "decorators": [],
                            "name": "PrivateSpecialString",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 281,
                      "end": 301,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 284,
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 284,
                        "end": 301,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 286,
                          "end": 301,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 286,
                            "end": 301,
                            "left": {
                              "type": "Identifier",
                              "start": 286,
                              "end": 287,
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 288,
                              "end": 301,
                              "decorators": [],
                              "name": "SpecialString",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 171,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 171,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 171,
                        "decorators": [],
                        "name": "SpecialString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 173,
                  "end": 197,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 197,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 197,
                        "decorators": [],
                        "name": "PrivateSpecialString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 199,
                  "end": 218,
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 203,
                      "end": 218,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 203,
                        "end": 218,
                        "left": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 204,
                          "decorators": [],
                          "name": "N",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 218,
                          "decorators": [],
                          "name": "SpecialString",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 46,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 46,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 43,
              "end": 46,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 38,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "SpecialString",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "SpecialString",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 58,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
