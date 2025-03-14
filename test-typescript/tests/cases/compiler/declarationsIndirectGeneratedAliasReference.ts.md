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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
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
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "Ctor",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 91,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 48,
        "end": 91,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 65,
          "decorators": [],
          "name": "ExtendedCtor",
          "optional": false
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
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 73,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 75,
                  "end": 81
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 83,
              "end": 89,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 86,
                "decorators": [],
                "name": "ext",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "optional": false
                  }
                }
              }
            }
          ]
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 202,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 99,
        "end": 202,
        "body": {
          "type": "TSInterfaceBody",
          "start": 125,
          "end": 202,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 131,
              "end": 200,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 131,
                "end": 138,
                "decorators": [],
                "name": "extends",
                "optional": false
              },
              "kind": "method",
              "optional": false,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 147,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 149,
                  "end": 199,
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
                            "optional": false
                          }
                        },
                        "extendsType": {
                          "type": "TSUnknownKeyword",
                          "start": 172,
                          "end": 179
                        },
                        "falseType": {
                          "type": "TSUndefinedKeyword",
                          "start": 189,
                          "end": 198
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
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 161,
                    "decorators": [],
                    "name": "ExtendedCtor",
                    "optional": false
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 138,
                "end": 141,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 139,
                    "end": 140,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 124,
          "decorators": [],
          "name": "CtorConstructor",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 238,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 238,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 216,
            "end": 237,
            "definite": false,
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
                    "optional": false
                  }
                }
              }
            },
            "init": null
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
  "end": 51,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 29,
        "raw": "\"./ctor\"",
        "value": "./ctor"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Ctor",
            "optional": false
          }
        }
      ]
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "\"mod\"",
        "value": "mod"
      },
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
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "Ctor",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 40,
            "end": 50,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 40,
              "end": 42,
              "decorators": [],
              "name": "ns",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 43,
              "end": 50,
              "decorators": [],
              "name": "default",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 101,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 101,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 100,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "MyComp",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 74,
              "end": 100,
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 93,
                        "end": 98,
                        "raw": "\"bar\"",
                        "value": "bar"
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 74,
                "end": 86,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 78,
                  "decorators": [],
                  "name": "Ctor",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 86,
                  "decorators": [],
                  "name": "extends",
                  "optional": false
                }
              },
              "optional": false
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
