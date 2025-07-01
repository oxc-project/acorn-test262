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
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
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
                "start": 24,
                "end": 25
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 25
            }
          ],
          "start": 23,
          "end": 26
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 41
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 43,
                    "end": 46
                  },
                  "start": 43,
                  "end": 48
                },
                "start": 41,
                "end": 48
              },
              "value": null,
              "start": 34,
              "end": 48
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "typeArguments": null,
              "start": 53,
              "end": 54
            },
            "start": 50,
            "end": 54
          },
          "start": 29,
          "end": 54
        },
        "declare": false,
        "start": 7,
        "end": 55
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyBaseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 81
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
                "start": 82,
                "end": 83
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 82,
              "end": 83
            }
          ],
          "start": 81,
          "end": 84
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "baseProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 103
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                },
                "start": 103,
                "end": 111
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 91,
              "end": 112
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 128
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
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
                          "start": 136,
                          "end": 137
                        },
                        "typeArguments": null,
                        "start": 136,
                        "end": 137
                      },
                      "start": 134,
                      "end": 137
                    },
                    "start": 129,
                    "end": 137
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 139,
                  "end": 141
                },
                "expression": false,
                "start": 128,
                "end": 141
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 117,
              "end": 141
            }
          ],
          "start": 85,
          "end": 143
        },
        "abstract": false,
        "declare": false,
        "start": 64,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 143
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 143
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
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 33
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 33
          },
          "importKind": "value",
          "start": 22,
          "end": 33
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./BaseClass",
        "raw": "'./BaseClass'",
        "start": 41,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 81
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
                "name": "mixinProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 101
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 103,
                  "end": 109
                },
                "start": 101,
                "end": 109
              },
              "accessibility": null,
              "static": false,
              "start": 88,
              "end": 110
            }
          ],
          "start": 82,
          "end": 112
        },
        "declare": false,
        "start": 64,
        "end": 112
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 57,
      "end": 112
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 137
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 138,
                "end": 139
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 159
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyBaseClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 171
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 172,
                            "end": 175
                          }
                        ],
                        "start": 171,
                        "end": 176
                      },
                      "start": 160,
                      "end": 176
                    }
                  ],
                  "start": 159,
                  "end": 177
                },
                "start": 148,
                "end": 177
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 138,
              "end": 177
            }
          ],
          "start": 137,
          "end": 178
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
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
                  "start": 185,
                  "end": 186
                },
                "typeArguments": null,
                "start": 185,
                "end": 186
              },
              "start": 183,
              "end": 186
            },
            "start": 179,
            "end": 186
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "typeArguments": null,
                "start": 189,
                "end": 190
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 204
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyMixin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 212
                    }
                  ],
                  "start": 204,
                  "end": 213
                },
                "start": 193,
                "end": 213
              }
            ],
            "start": 189,
            "end": 213
          },
          "start": 187,
          "end": 213
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 245
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mixinProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 269
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 271,
                          "end": 277
                        },
                        "start": 269,
                        "end": 277
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 256,
                      "end": 278
                    }
                  ],
                  "start": 246,
                  "end": 284
                },
                "abstract": false,
                "declare": false,
                "start": 227,
                "end": 284
              },
              "start": 220,
              "end": 284
            }
          ],
          "start": 214,
          "end": 286
        },
        "expression": false,
        "start": 121,
        "end": 286
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 114,
      "end": 286
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 286
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
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./BaseClass",
        "raw": "'./BaseClass'",
        "start": 28,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 42
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 59
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 59
          },
          "importKind": "value",
          "start": 52,
          "end": 59
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./MixinClass",
        "raw": "'./MixinClass'",
        "start": 67,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 43,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyExtendedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 112
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 128
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "MyBaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 140
            }
          ],
          "optional": false,
          "start": 121,
          "end": 141
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 142,
              "end": 148
            }
          ],
          "start": 141,
          "end": 149
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extendedClassProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 177
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 179,
                  "end": 185
                },
                "start": 177,
                "end": 185
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 156,
              "end": 186
            }
          ],
          "start": 150,
          "end": 188
        },
        "abstract": false,
        "declare": false,
        "start": 91,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 84,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 188
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
            "name": "MyExtendedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyExtendedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "importKind": "value",
          "start": 9,
          "end": 24
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./FinalClass",
        "raw": "'./FinalClass'",
        "start": 32,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 64
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 64
          },
          "importKind": "value",
          "start": 57,
          "end": 64
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./MixinClass",
        "raw": "'./MixinClass'",
        "start": 72,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 87
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
            "name": "myExtendedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 110
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyExtendedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 132
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 133,
                "end": 141
              }
            ],
            "start": 113,
            "end": 142
          },
          "definite": false,
          "start": 95,
          "end": 142
        }
      ],
      "declare": false,
      "start": 89,
      "end": 143
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
            "name": "AnotherMixedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 168
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 178
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "MyExtendedClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 194
              }
            ],
            "optional": false,
            "start": 171,
            "end": 195
          },
          "definite": false,
          "start": 151,
          "end": 195
        }
      ],
      "declare": false,
      "start": 145,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 196
}
```
