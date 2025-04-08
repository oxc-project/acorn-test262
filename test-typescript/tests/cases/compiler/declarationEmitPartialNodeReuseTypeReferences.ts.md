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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 25,
          "name": "SpecialString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 28,
          "end": 34
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 36,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 61,
        "name": "PrivateSpecialString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 64,
        "end": 70
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 135,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 80,
        "end": 135,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "name": "N",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 92,
          "end": 135,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 98,
              "end": 133,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 105,
                "end": 133,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 123,
                  "name": "SpecialString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 126,
                  "end": 132
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
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 304,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 143,
        "end": 304,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 149,
            "end": 303,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 153,
              "end": 303,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 171,
                  "name": "p1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 171,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 171,
                        "name": "SpecialString",
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
                {
                  "type": "Identifier",
                  "start": 173,
                  "end": 197,
                  "name": "p2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 197,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 197,
                        "name": "PrivateSpecialString",
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
                {
                  "type": "Identifier",
                  "start": 199,
                  "end": 218,
                  "name": "p3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 203,
                      "end": 218,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 203,
                        "end": 218,
                        "left": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 204,
                          "name": "N",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 218,
                          "name": "SpecialString",
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
                    "value": null,
                    "raw": "null"
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 237,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 237,
                        "end": 252,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 239,
                          "end": 252,
                          "typeName": {
                            "type": "Identifier",
                            "start": 239,
                            "end": 252,
                            "name": "SpecialString",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 254,
                      "end": 280,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 257,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 257,
                        "end": 279,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 259,
                          "end": 279,
                          "typeName": {
                            "type": "Identifier",
                            "start": 259,
                            "end": 279,
                            "name": "PrivateSpecialString",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 281,
                      "end": 301,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 284,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 284,
                        "end": 301,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 286,
                          "end": 301,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 286,
                            "end": 301,
                            "left": {
                              "type": "Identifier",
                              "start": 286,
                              "end": 287,
                              "name": "N",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 288,
                              "end": 301,
                              "name": "SpecialString",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "typeParameters": null,
              "returnType": null
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 46,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 46,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 43,
              "end": 46,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "name": "SpecialString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "name": "SpecialString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 38,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 58,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "o",
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
