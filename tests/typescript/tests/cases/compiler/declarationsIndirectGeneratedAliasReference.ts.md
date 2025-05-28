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
          "decorators": [],
          "name": "Ctor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "ExtendedCtor",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "ext",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "CtorConstructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "extends",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
                    "decorators": [],
                    "name": "ExtendedCtor",
                    "optional": false,
                    "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "Ctor",
                            "optional": false,
                            "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 238,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 238,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 216,
            "end": 237,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 237,
              "decorators": [],
              "name": "Ctor",
              "optional": false,
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
                    "decorators": [],
                    "name": "CtorConstructor",
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
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "typeAnnotation": null
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
  "end": 101,
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
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 40,
            "end": 50,
            "object": {
              "type": "Identifier",
              "start": 40,
              "end": 42,
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 43,
              "end": 50,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "MyComp",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Ctor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 86,
                  "decorators": [],
                  "name": "extends",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 93,
                        "end": 98,
                        "value": "bar",
                        "raw": "\"bar\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
