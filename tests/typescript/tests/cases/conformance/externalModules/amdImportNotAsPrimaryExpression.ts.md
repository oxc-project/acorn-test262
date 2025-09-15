__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 15
        },
        "typeParameters": null,
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
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 21
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 24,
                "end": 26
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 19,
              "end": 27
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 38
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 41,
                "end": 45
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 29,
              "end": 46
            }
          ],
          "start": 16,
          "end": 48
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 69
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 77
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 79,
                  "end": 85
                },
                "start": 77,
                "end": 85
              },
              "accessibility": null,
              "static": false,
              "start": 73,
              "end": 86
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 91
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 93,
                  "end": 99
                },
                "start": 91,
                "end": 99
              },
              "accessibility": null,
              "static": false,
              "start": 88,
              "end": 100
            }
          ],
          "start": 70,
          "end": 102
        },
        "declare": false,
        "start": 57,
        "end": 102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 50,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 123
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 146
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 154
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 156,
                          "end": 162
                        },
                        "start": 154,
                        "end": 162
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 151,
                      "end": 163
                    }
                  ],
                  "start": 147,
                  "end": 166
                },
                "declare": false,
                "start": 134,
                "end": 166
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 127,
              "end": 166
            }
          ],
          "start": 124,
          "end": 168
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 111,
        "end": 168
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E1",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 184
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 189
              },
              "initializer": null,
              "computed": false,
              "start": 188,
              "end": 189
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "initializer": null,
              "computed": false,
              "start": 190,
              "end": 191
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "initializer": null,
              "computed": false,
              "start": 192,
              "end": 193
            }
          ],
          "start": 185,
          "end": 195
        },
        "const": false,
        "declare": false,
        "start": 177,
        "end": 195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 170,
      "end": 195
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 196
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_0",
          "raw": "\"./foo_0\"",
          "start": 21,
          "end": 30
        },
        "start": 13,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 105
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 111
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 114
        },
        "start": 108,
        "end": 114
      },
      "importKind": "value",
      "start": 97,
      "end": 115
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 124
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 127
                  },
                  "start": 123,
                  "end": 127
                },
                "typeArguments": null,
                "start": 123,
                "end": 127
              },
              "start": 121,
              "end": 127
            },
            "start": 120,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 120,
          "end": 127
        }
      ],
      "declare": false,
      "start": 116,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 139
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 142
                  },
                  "start": 136,
                  "end": 142
                },
                "typeArguments": null,
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "start": 133,
            "end": 142
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 149
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    },
                    "start": 149,
                    "end": 157
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 147,
                  "end": 157
                }
              ],
              "start": 146,
              "end": 158
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 159,
              "end": 161
            },
            "start": 145,
            "end": 161
          },
          "definite": false,
          "start": 133,
          "end": 161
        }
      ],
      "declare": false,
      "start": 129,
      "end": 162
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 180
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 183
                    },
                    "start": 177,
                    "end": 183
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 186
                  },
                  "start": 177,
                  "end": 186
                },
                "typeArguments": null,
                "start": 170,
                "end": 186
              },
              "start": 168,
              "end": 186
            },
            "start": 167,
            "end": 186
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 189,
            "end": 194
          },
          "definite": false,
          "start": 167,
          "end": 194
        }
      ],
      "declare": false,
      "start": 163,
      "end": 195
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 206
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 209
                    },
                    "start": 203,
                    "end": 209
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 212
                  },
                  "start": 203,
                  "end": 212
                },
                "typeArguments": null,
                "start": 203,
                "end": 212
              },
              "start": 201,
              "end": 212
            },
            "start": 200,
            "end": 212
          },
          "init": null,
          "definite": false,
          "start": 200,
          "end": 212
        }
      ],
      "declare": false,
      "start": 196,
      "end": 213
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 221,
                "end": 227
              },
              "start": 219,
              "end": 227
            },
            "start": 218,
            "end": 227
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 237
                },
                "start": 231,
                "end": 237
              },
              "typeArguments": null,
              "start": 231,
              "end": 237
            },
            "expression": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 238,
              "end": 239
            },
            "start": 230,
            "end": 239
          },
          "definite": false,
          "start": 218,
          "end": 239
        }
      ],
      "declare": false,
      "start": 214,
      "end": 240
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
