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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 48,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 27,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 21,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 24,
                "end": 26,
                "value": 42,
                "raw": "42"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 46,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 38,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 41,
                "end": 45,
                "value": true,
                "raw": "true"
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
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
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
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
              "exportKind": "type",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "E1",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": false,
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 108,
        "end": 114,
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 112,
          "end": 114,
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 128,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 127,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 127,
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 162,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 142,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 142,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 145,
            "end": 161,
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
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null
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
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 159,
              "end": 161,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 195,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 186,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 183,
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 186,
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 213,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 212,
            "decorators": [],
            "name": "z",
            "optional": false,
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 209,
                      "decorators": [],
                      "name": "M1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 212,
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 240,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 227,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 221,
                "end": 227
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 230,
            "end": 239,
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
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Literal",
              "start": 238,
              "end": 239,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
