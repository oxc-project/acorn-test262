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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 39,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 39,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 37,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
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
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 39,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 39,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 37,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 30,
                  "end": 36
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
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
  "end": 222,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 105,
        "async": false,
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
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
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
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 26,
          "decorators": [],
          "name": "getFooFrom",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 51,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 50,
              "const": false,
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
                      "raw": "\"./a\"",
                      "value": "./a"
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
                      "raw": "\"./b\"",
                      "value": "./b"
                    }
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 222,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 114,
        "end": 222,
        "async": false,
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
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
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
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 138,
          "decorators": [],
          "name": "getFooValueFrom",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 168,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
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
          "start": 169,
          "end": 189,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 171,
            "end": 189,
            "indexType": {
              "type": "TSLiteralType",
              "start": 185,
              "end": 188,
              "literal": {
                "type": "Literal",
                "start": 185,
                "end": 188,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            "objectType": {
              "type": "TSImportType",
              "start": 171,
              "end": 184,
              "argument": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 138,
          "end": 163,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 139,
              "end": 162,
              "const": false,
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
                      "raw": "\"./a\"",
                      "value": "./a"
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
                      "raw": "\"./b\"",
                      "value": "./b"
                    }
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
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
