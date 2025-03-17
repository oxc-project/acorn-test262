__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 238,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "name": "Ctor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 40,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 28,
              "end": 38,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 91,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 48,
        "end": 91,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 65,
          "name": "ExtendedCtor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 65,
          "end": 68,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 66,
              "end": 67,
              "name": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 71,
          "end": 90,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 72,
              "end": 82,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 73,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 75,
                  "end": 81
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 83,
              "end": 89,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 86,
                "name": "ext",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 86,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 88,
                  "end": 89,
                  "typeName": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 202,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 99,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 124,
          "name": "CtorConstructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 125,
          "end": 202,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 131,
              "end": 200,
              "key": {
                "type": "Identifier",
                "start": 131,
                "end": 138,
                "name": "extends",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 138,
                "end": 141,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 139,
                    "end": 140,
                    "name": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 146,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 146,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 146,
                      "typeName": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 146,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 147,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 149,
                  "end": 199,
                  "typeName": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 161,
                    "name": "ExtendedCtor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 161,
                    "end": 199,
                    "params": [
                      {
                        "type": "TSConditionalType",
                        "start": 162,
                        "end": 198,
                        "checkType": {
                          "type": "TSTypeReference",
                          "start": 162,
                          "end": 163,
                          "typeName": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 163,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "extendsType": {
                          "type": "TSUnknownKeyword",
                          "start": 172,
                          "end": 179
                        },
                        "trueType": {
                          "type": "TSTypeReference",
                          "start": 182,
                          "end": 186,
                          "typeName": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 186,
                            "name": "Ctor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "falseType": {
                          "type": "TSUndefinedKeyword",
                          "start": 189,
                          "end": 198
                        }
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 238,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 238,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 216,
            "end": 237,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 237,
              "name": "Ctor",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 220,
                "end": 237,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 222,
                  "end": 237,
                  "typeName": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 237,
                    "name": "CtorConstructor",
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
  "end": 51,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Ctor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Ctor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 29,
        "value": "./ctor",
        "raw": "\"./ctor\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 31,
      "end": 51,
      "declaration": {
        "type": "Identifier",
        "start": 46,
        "end": 50,
        "name": "Ctor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
  "end": 102,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "mod",
        "raw": "\"mod\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "name": "Ctor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 40,
            "end": 50,
            "object": {
              "type": "Identifier",
              "start": 40,
              "end": 42,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 43,
              "end": 50,
              "name": "default",
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
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 101,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 101,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "name": "MyComp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 74,
              "end": 100,
              "callee": {
                "type": "MemberExpression",
                "start": 74,
                "end": 86,
                "object": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 78,
                  "name": "Ctor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 86,
                  "name": "extends",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 87,
                  "end": 99,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 88,
                      "end": 98,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 93,
                        "end": 98,
                        "value": "bar",
                        "raw": "\"bar\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
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
