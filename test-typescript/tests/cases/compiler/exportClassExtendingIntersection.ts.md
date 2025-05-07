__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 55,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 29,
          "end": 54,
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "start": 34,
              "end": 48,
              "argument": {
                "type": "Identifier",
                "start": 37,
                "end": 41,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 43,
                  "end": 48,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 43,
                    "end": 46
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 54,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 53,
              "end": 54,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 26,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 25,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "start": 57,
      "end": 143,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 64,
        "end": 143,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 85,
          "end": 143,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 91,
              "end": 112,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 103,
                "decorators": [],
                "name": "baseProperty",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 103,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 117,
              "end": 141,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 128,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 128,
                "end": 141,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 139,
                  "end": 141,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 129,
                    "end": 137,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 136,
                        "end": 137,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 70,
          "end": 81,
          "decorators": [],
          "name": "MyBaseClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 81,
          "end": 84,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 82,
              "end": 83,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
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
  "end": 286,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 54,
        "raw": "'./BaseClass'",
        "value": "./BaseClass",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 22,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 112,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 64,
        "end": 112,
        "body": {
          "type": "TSInterfaceBody",
          "start": 82,
          "end": 112,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 88,
              "end": 110,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 101,
                "decorators": [],
                "name": "mixinProperty",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 109,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 103,
                  "end": 109
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 81,
          "decorators": [],
          "name": "MyMixin",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 114,
      "end": 286,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 121,
        "end": 286,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 214,
          "end": 286,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 220,
              "end": 284,
              "argument": {
                "type": "ClassExpression",
                "start": 227,
                "end": 284,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 246,
                  "end": 284,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 256,
                      "end": 278,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 269,
                        "decorators": [],
                        "name": "mixinProperty",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 269,
                        "end": 277,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 271,
                          "end": 277
                        }
                      },
                      "value": null
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 245,
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 130,
          "end": 137,
          "decorators": [],
          "name": "MyMixin",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 179,
            "end": 186,
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 186,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 187,
          "end": 213,
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "start": 189,
            "end": 213,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 189,
                "end": 190,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 193,
                "end": 213,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 204,
                  "end": 213,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 212,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 212,
                        "decorators": [],
                        "name": "MyMixin",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 204,
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 137,
          "end": 178,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 138,
              "end": 177,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 177,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 159,
                  "end": 177,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 160,
                      "end": 176,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 171,
                        "end": 176,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 172,
                            "end": 175
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 171,
                        "decorators": [],
                        "name": "MyBaseClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 159,
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
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
  "end": 188,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 41,
        "raw": "'./BaseClass'",
        "value": "./BaseClass",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 82,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 81,
        "raw": "'./MixinClass'",
        "value": "./MixinClass",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 52,
          "end": 59,
          "imported": {
            "type": "Identifier",
            "start": 52,
            "end": 59,
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 59,
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 188,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 188,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 150,
          "end": 188,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 156,
              "end": 186,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 156,
                "end": 177,
                "decorators": [],
                "name": "extendedClassProperty",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 177,
                "end": 185,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 179,
                  "end": 185
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
          "start": 97,
          "end": 112,
          "decorators": [],
          "name": "MyExtendedClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 121,
          "end": 141,
          "arguments": [
            {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "decorators": [],
              "name": "MyBaseClass",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 141,
          "end": 149,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 142,
              "end": 148
            }
          ]
        },
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
  "end": 196,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 46,
        "raw": "'./FinalClass'",
        "value": "./FinalClass",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "decorators": [],
            "name": "MyExtendedClass",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "decorators": [],
            "name": "MyExtendedClass",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 48,
      "end": 87,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 72,
        "end": 86,
        "raw": "'./MixinClass'",
        "value": "./MixinClass",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 57,
          "end": 64,
          "imported": {
            "type": "Identifier",
            "start": 57,
            "end": 64,
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 64,
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 110,
            "decorators": [],
            "name": "myExtendedClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 113,
            "end": 142,
            "arguments": [
              {
                "type": "Literal",
                "start": 133,
                "end": 141,
                "raw": "'string'",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 132,
              "decorators": [],
              "name": "MyExtendedClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 168,
            "decorators": [],
            "name": "AnotherMixedClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 171,
            "end": 195,
            "arguments": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 194,
                "decorators": [],
                "name": "MyExtendedClass",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 171,
              "end": 178,
              "decorators": [],
              "name": "MyMixin",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
