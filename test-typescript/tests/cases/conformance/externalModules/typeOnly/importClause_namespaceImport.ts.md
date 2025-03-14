__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 29,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 29,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 27,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": true,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 19,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 21,
                  "end": 27
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 59,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 45,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 57,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": true,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 51,
                  "end": 57
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
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 81,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 67,
        "end": 81,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 79,
          "end": 80,
          "typeName": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 73,
          "end": 76,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 74,
              "end": 75,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
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
      "start": 82,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 89,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 95,
            "end": 105,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 100,
              "decorators": [],
              "name": "Value",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 103,
              "end": 105,
              "properties": []
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 12,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 41,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "types",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 54,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 53,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 47,
          "decorators": [],
          "name": "types",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 48,
          "end": 53,
          "decorators": [],
          "name": "Value",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 73,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 73,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 62,
                  "end": 73,
                  "left": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 67,
                    "decorators": [],
                    "name": "types",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 73,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 91,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 91,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 84,
                  "end": 91,
                  "left": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 89,
                    "decorators": [],
                    "name": "types",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 94,
            "end": 96,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 114,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 114,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 107,
                  "end": 114,
                  "left": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 112,
                    "decorators": [],
                    "name": "types",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 117,
            "end": 119,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 145,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 145,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 137,
                  "end": 145,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 138,
                      "end": 144
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 130,
                  "end": 137,
                  "left": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 135,
                    "decorators": [],
                    "name": "types",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 148,
            "end": 150,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 162,
            "end": 171,
            "properties": [
              {
                "type": "Property",
                "start": 164,
                "end": 169,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 169,
                  "decorators": [],
                  "name": "types",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 169,
                  "decorators": [],
                  "name": "types",
                  "optional": false
                }
              }
            ]
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
