__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 39,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 37,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
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
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 39,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 37,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 30,
                  "end": 36
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
  "end": 223,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 105,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 26,
          "name": "getFooFrom",
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
            "start": 52,
            "end": 56,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
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
          "start": 73,
          "end": 105,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 79,
              "end": 103,
              "argument": {
                "type": "TSAsExpression",
                "start": 86,
                "end": 102,
                "expression": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 95,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 99,
                  "end": 102
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 51,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 50,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 37,
                "end": 50,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 37,
                    "end": 42,
                    "literal": {
                      "type": "Literal",
                      "start": 37,
                      "end": 42,
                      "value": "./a",
                      "raw": "\"./a\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 45,
                    "end": 50,
                    "literal": {
                      "type": "Literal",
                      "start": 45,
                      "end": 50,
                      "value": "./b",
                      "raw": "\"./b\""
                    }
                  }
                ]
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
          "start": 57,
          "end": 72,
          "typeAnnotation": {
            "type": "TSImportType",
            "start": 59,
            "end": 72,
            "argument": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 222,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 114,
        "end": 222,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 138,
          "name": "getFooValueFrom",
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
            "start": 164,
            "end": 168,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 168,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
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
          "start": 190,
          "end": 222,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 196,
              "end": 220,
              "argument": {
                "type": "TSAsExpression",
                "start": 203,
                "end": 219,
                "expression": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 212,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 216,
                  "end": 219
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 138,
          "end": 163,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 139,
              "end": 162,
              "name": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 149,
                "end": 162,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 149,
                    "end": 154,
                    "literal": {
                      "type": "Literal",
                      "start": 149,
                      "end": 154,
                      "value": "./a",
                      "raw": "\"./a\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 157,
                    "end": 162,
                    "literal": {
                      "type": "Literal",
                      "start": 157,
                      "end": 162,
                      "value": "./b",
                      "raw": "\"./b\""
                    }
                  }
                ]
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
          "start": 169,
          "end": 189,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 171,
            "end": 189,
            "objectType": {
              "type": "TSImportType",
              "start": 171,
              "end": 184,
              "argument": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 185,
              "end": 188,
              "literal": {
                "type": "Literal",
                "start": 185,
                "end": 188,
                "value": "a",
                "raw": "\"a\""
              }
            }
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
