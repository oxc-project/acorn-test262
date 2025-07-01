__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SpecialString",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 25
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 28,
          "end": 34
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrivateSpecialString",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 61
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 64,
        "end": 70
      },
      "declare": false,
      "start": 36,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 91
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SpecialString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 123
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 126,
                  "end": 132
                },
                "declare": false,
                "start": 105,
                "end": 133
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 98,
              "end": 133
            }
          ],
          "start": 92,
          "end": 135
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 80,
        "end": 135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 135
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SpecialString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 171
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 171
                    },
                    "start": 156,
                    "end": 171
                  },
                  "start": 154,
                  "end": 171
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PrivateSpecialString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 197
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 197
                    },
                    "start": 175,
                    "end": 197
                  },
                  "start": 173,
                  "end": 197
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 203,
                          "end": 204
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SpecialString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 218
                        },
                        "start": 203,
                        "end": 218
                      },
                      "typeArguments": null,
                      "start": 203,
                      "end": 218
                    },
                    "start": 201,
                    "end": 218
                  },
                  "start": 199,
                  "end": 218
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 223,
                    "end": 227
                  },
                  "start": 223,
                  "end": 228
                },
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 237
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SpecialString",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 252
                          },
                          "typeArguments": null,
                          "start": 239,
                          "end": 252
                        },
                        "start": 237,
                        "end": 252
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 234,
                      "end": 253
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 254,
                        "end": 257
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PrivateSpecialString",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 259,
                            "end": 279
                          },
                          "typeArguments": null,
                          "start": 259,
                          "end": 279
                        },
                        "start": 257,
                        "end": 279
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 254,
                      "end": 280
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 281,
                        "end": 284
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
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 286,
                              "end": 287
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SpecialString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 288,
                              "end": 301
                            },
                            "start": 286,
                            "end": 301
                          },
                          "typeArguments": null,
                          "start": 286,
                          "end": 301
                        },
                        "start": 284,
                        "end": 301
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 281,
                      "end": 301
                    }
                  ],
                  "start": 232,
                  "end": 303
                },
                "start": 223,
                "end": 303
              },
              "id": null,
              "generator": false,
              "start": 153,
              "end": 303
            },
            "definite": false,
            "start": 149,
            "end": 303
          }
        ],
        "declare": false,
        "start": 143,
        "end": 304
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 136,
      "end": 304
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 305
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "optional": false,
              "computed": false,
              "start": 43,
              "end": 46
            },
            "definite": false,
            "start": 39,
            "end": 46
          }
        ],
        "declare": false,
        "start": 33,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SpecialString",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 25
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SpecialString",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 25
          },
          "importKind": "value",
          "start": 12,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 33,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "definite": false,
            "start": 53,
            "end": 58
          }
        ],
        "declare": false,
        "start": 47,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
