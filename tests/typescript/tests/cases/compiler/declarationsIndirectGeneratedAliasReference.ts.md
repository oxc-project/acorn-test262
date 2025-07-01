__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Ctor",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 21
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                },
                "start": 29,
                "end": 37
              },
              "accessibility": null,
              "static": false,
              "start": 28,
              "end": 38
            }
          ],
          "start": 22,
          "end": 40
        },
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedCtor",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 65
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 66,
              "end": 67
            }
          ],
          "start": 65,
          "end": 68
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 75,
                  "end": 81
                },
                "start": 73,
                "end": 81
              },
              "accessibility": null,
              "static": false,
              "start": 72,
              "end": 82
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ext",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 86
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 89
                  },
                  "typeArguments": null,
                  "start": 88,
                  "end": 89
                },
                "start": 86,
                "end": 89
              },
              "accessibility": null,
              "static": false,
              "start": 83,
              "end": 89
            }
          ],
          "start": 71,
          "end": 90
        },
        "declare": false,
        "start": 48,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 41,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CtorConstructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 124
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extends",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 138
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 140
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 139,
                    "end": 140
                  }
                ],
                "start": 138,
                "end": 141
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 146
                      },
                      "typeArguments": null,
                      "start": 145,
                      "end": 146
                    },
                    "start": 143,
                    "end": 146
                  },
                  "start": 142,
                  "end": 146
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExtendedCtor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 161
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 163
                          },
                          "typeArguments": null,
                          "start": 162,
                          "end": 163
                        },
                        "extendsType": {
                          "type": "TSUnknownKeyword",
                          "start": 172,
                          "end": 179
                        },
                        "trueType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Ctor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 182,
                          "end": 186
                        },
                        "falseType": {
                          "type": "TSUndefinedKeyword",
                          "start": 189,
                          "end": 198
                        },
                        "start": 162,
                        "end": 198
                      }
                    ],
                    "start": 161,
                    "end": 199
                  },
                  "start": 149,
                  "end": 199
                },
                "start": 147,
                "end": 199
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 131,
              "end": 200
            }
          ],
          "start": 125,
          "end": 202
        },
        "declare": false,
        "start": 99,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 92,
      "end": 202
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
              "name": "Ctor",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CtorConstructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 237
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 237
                },
                "start": 220,
                "end": 237
              },
              "start": 216,
              "end": 237
            },
            "init": null,
            "definite": false,
            "start": 216,
            "end": 237
          }
        ],
        "declare": false,
        "start": 210,
        "end": 238
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 203,
      "end": 238
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 238
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
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ctor",
        "raw": "\"./ctor\"",
        "start": 21,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 50
      },
      "exportKind": "value",
      "start": 31,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 20,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 37
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 42
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 50
            },
            "optional": false,
            "computed": false,
            "start": 40,
            "end": 50
          },
          "definite": false,
          "start": 33,
          "end": 50
        }
      ],
      "declare": false,
      "start": 27,
      "end": 51
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
              "name": "MyComp",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ctor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 78
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 86
                },
                "optional": false,
                "computed": false,
                "start": 74,
                "end": 86
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 91
                      },
                      "value": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "\"bar\"",
                        "start": 93,
                        "end": 98
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 88,
                      "end": 98
                    }
                  ],
                  "start": 87,
                  "end": 99
                }
              ],
              "optional": false,
              "start": 74,
              "end": 100
            },
            "definite": false,
            "start": 65,
            "end": 100
          }
        ],
        "declare": false,
        "start": 59,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
