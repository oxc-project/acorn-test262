__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 48,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 48,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 48,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 27,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 21,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 24,
                "end": 26,
                "value": 42,
                "raw": "42"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 46,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 38,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 41,
                "end": 45,
                "value": true,
                "raw": "true"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 102,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 57,
        "end": 102,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "name": "I1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 70,
          "end": 102,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 73,
              "end": 86,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 77,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 79,
                  "end": 85
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 88,
              "end": 100,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "name": "age",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 93,
                  "end": 99
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
      "start": 104,
      "end": 165,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 111,
        "end": 165,
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 120,
          "name": "M1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 121,
          "end": 165,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 124,
              "end": 163,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 131,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 143,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 144,
                  "end": 163,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 148,
                      "end": 160,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 151,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 151,
                        "end": 159,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 153,
                          "end": 159
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
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 167,
      "end": 192,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 174,
        "end": 192,
        "id": {
          "type": "Identifier",
          "start": 179,
          "end": 181,
          "name": "E1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 185,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 187,
            "end": 188,
            "id": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 189,
            "end": 190,
            "id": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 182,
          "end": 192,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 185,
              "end": 186,
              "id": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 187,
              "end": 188,
              "id": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 189,
              "end": 190,
              "id": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
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
  "end": 240,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "value": "./foo_0",
          "raw": "\"./foo_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 97,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 108,
        "end": 114,
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 112,
          "end": 114,
          "name": "M1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 127,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 127,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 123,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 127,
                    "name": "I2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 142,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 142,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 136,
                  "end": 142,
                  "left": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 139,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 142,
                    "name": "C1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 145,
            "end": 161,
            "expression": {
              "type": "ObjectExpression",
              "start": 159,
              "end": 161,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 146,
              "end": 158,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 147,
                  "end": 157,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 149,
                    "name": "m1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 186,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 170,
                "end": 186,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 177,
                  "end": 186,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 177,
                    "end": 183,
                    "left": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 180,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 183,
                      "name": "C1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 186,
                    "name": "s1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 189,
            "end": 194,
            "value": false,
            "raw": "false"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 212,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 212,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 203,
                  "end": 212,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 203,
                    "end": 209,
                    "left": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 206,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 209,
                      "name": "M1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 212,
                    "name": "I2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 227,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 221,
                "end": 227
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 230,
            "end": 239,
            "expression": {
              "type": "Literal",
              "start": 238,
              "end": 239,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 231,
              "end": 237,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 231,
                "end": 237,
                "left": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "name": "E1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
