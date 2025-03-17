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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 55,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
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
          "type": "TSConstructorType",
          "start": 29,
          "end": 54,
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 34,
              "end": 48,
              "argument": {
                "type": "Identifier",
                "start": 37,
                "end": 41,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
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
      "start": 57,
      "end": 143,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 64,
        "end": 143,
        "id": {
          "type": "Identifier",
          "start": 70,
          "end": 81,
          "name": "MyBaseClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 85,
          "end": 143,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 91,
              "end": 112,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 103,
                "name": "baseProperty",
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
                "start": 103,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 117,
              "end": 141,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 128,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 128,
                "end": 141,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 129,
                    "end": 137,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 136,
                        "end": 137,
                        "typeName": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 139,
                  "end": 141,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 81,
          "end": 84,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 82,
              "end": 83,
              "name": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
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
  "end": 286,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 22,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "name": "MyBaseClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "name": "MyBaseClass",
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
        "end": 54,
        "value": "./BaseClass",
        "raw": "'./BaseClass'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 112,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 64,
        "end": 112,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 81,
          "name": "MyMixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 82,
          "end": 112,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 88,
              "end": 110,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 101,
                "name": "mixinProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 109,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 103,
                  "end": 109
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
      "start": 114,
      "end": 286,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 121,
        "end": 286,
        "id": {
          "type": "Identifier",
          "start": 130,
          "end": 137,
          "name": "MyMixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 179,
            "end": 186,
            "name": "base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 186,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
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
                "id": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 245,
                  "name": "base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 246,
                  "end": 284,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 256,
                      "end": 278,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 269,
                        "name": "mixinProperty",
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
                        "start": 269,
                        "end": 277,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 271,
                          "end": 277
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
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 137,
          "end": 178,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 138,
              "end": 177,
              "name": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 159,
                  "name": "Constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 159,
                  "end": 177,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 160,
                      "end": 176,
                      "typeName": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 171,
                        "name": "MyBaseClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 193,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 204,
                  "name": "Constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 204,
                  "end": 213,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 212,
                        "name": "MyMixin",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
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
  "end": 188,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "MyBaseClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "MyBaseClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 41,
        "value": "./BaseClass",
        "raw": "'./BaseClass'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 82,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 52,
          "end": 59,
          "imported": {
            "type": "Identifier",
            "start": 52,
            "end": 59,
            "name": "MyMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 59,
            "name": "MyMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 81,
        "value": "./MixinClass",
        "raw": "'./MixinClass'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 188,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 188,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 112,
          "name": "MyExtendedClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 121,
          "end": 141,
          "callee": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "name": "MyMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "name": "MyBaseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 150,
          "end": 188,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 156,
              "end": 186,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 156,
                "end": 177,
                "name": "extendedClassProperty",
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
                "start": 177,
                "end": 185,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 179,
                  "end": 185
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
        }
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
  "end": 197,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "name": "MyExtendedClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "name": "MyExtendedClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 46,
        "value": "./FinalClass",
        "raw": "'./FinalClass'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 48,
      "end": 87,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 57,
          "end": 64,
          "imported": {
            "type": "Identifier",
            "start": 57,
            "end": 64,
            "name": "MyMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 64,
            "name": "MyMixin",
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
        "end": 86,
        "value": "./MixinClass",
        "raw": "'./MixinClass'"
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 110,
            "name": "myExtendedClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 113,
            "end": 142,
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 132,
              "name": "MyExtendedClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 133,
                "end": 141,
                "value": "string",
                "raw": "'string'"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 168,
            "name": "AnotherMixedClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 171,
            "end": 195,
            "callee": {
              "type": "Identifier",
              "start": 171,
              "end": 178,
              "name": "MyMixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 194,
                "name": "MyExtendedClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
