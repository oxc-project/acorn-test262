__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 37,
        "raw": "\"./prelude\"",
        "value": "./prelude"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Something",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Something",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 99,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 45,
        "end": 99,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 99,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 77,
              "decorators": [],
              "name": "myValue",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 77,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 69,
                    "end": 77,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 70,
                        "end": 76
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 69,
                    "decorators": [],
                    "name": "Something",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "start": 80,
              "end": 99,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 93,
                  "end": 98,
                  "raw": "\"abc\"",
                  "value": "abc"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 80,
                "end": 92,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "decorators": [],
                  "name": "Something",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "decorators": [],
                  "name": "of",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 146,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 107,
        "end": 146,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "decorators": [],
          "name": "MyType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 121,
          "end": 146,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 138,
            "end": 146,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 121,
            "end": 138,
            "left": {
              "type": "Identifier",
              "start": 121,
              "end": 130,
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 131,
              "end": 138,
              "decorators": [],
              "name": "SubType",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 132,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 39,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "Something",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 27,
          "end": 39,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 29,
              "end": 37,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 36,
                  "end": 37,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 21,
          "end": 24,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "A",
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
      "start": 40,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 47,
        "end": 77,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 52,
          "end": 59,
          "decorators": [],
          "name": "SubType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 65,
          "end": 77,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 67,
              "end": 75,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 74,
                  "end": 75,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 59,
          "end": 62,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 60,
              "end": 61,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "A",
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
      "start": 78,
      "end": 131,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 85,
        "end": 131,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 102,
          "end": 104,
          "decorators": [],
          "name": "of",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 108,
            "end": 116,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 117,
          "end": 131,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 119,
            "end": 131,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 128,
              "end": 131,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 130,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 119,
              "end": 128,
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 104,
          "end": 107,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 105,
              "end": 106,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "A",
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
  "end": 116,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 32,
        "raw": "\"./Something\"",
        "value": "./Something"
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
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 33,
      "end": 73,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 45,
        "end": 54,
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 73,
        "raw": "\"./Something\"",
        "value": "./Something"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 81,
        "end": 115,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 95,
          "decorators": [],
          "name": "Something",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 101,
          "end": 115,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 112,
            "end": 115,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 101,
            "end": 112,
            "left": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 103,
              "end": 112,
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 95,
          "end": 98,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 96,
              "end": 97,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "A",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
