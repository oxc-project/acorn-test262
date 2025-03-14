__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 61,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 60,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 98,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 72,
        "end": 98,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "Bar",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 97,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 87,
            "end": 97,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 88,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              },
              {
                "type": "TSLiteralType",
                "start": 93,
                "end": 96,
                "literal": {
                  "type": "Literal",
                  "start": 93,
                  "end": 96,
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "decorators": [],
            "name": "Omit",
            "optional": false
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 99,
      "end": 138,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 106,
        "end": 138,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 111,
          "end": 114,
          "decorators": [],
          "name": "Baz",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 117,
          "end": 137,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 121,
            "end": 137,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 122,
                "end": 125,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 125,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 127,
                "end": 136,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 127,
                    "end": 130,
                    "literal": {
                      "type": "Literal",
                      "start": 127,
                      "end": 130,
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 133,
                    "end": 136,
                    "literal": {
                      "type": "Literal",
                      "start": 133,
                      "end": 136,
                      "raw": "\"c\"",
                      "value": "c"
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "Omit",
            "optional": false
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 195,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 147,
        "end": 195,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 174,
          "end": 195,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 180,
              "end": 193,
              "argument": {
                "type": "MemberExpression",
                "start": 187,
                "end": 192,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 190,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "a",
                  "optional": false
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
          "start": 156,
          "end": 163,
          "decorators": [],
          "name": "getBarA",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 164,
            "end": 172,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 172,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 172,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 197,
      "end": 252,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 204,
        "end": 252,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 231,
          "end": 252,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 237,
              "end": 250,
              "argument": {
                "type": "MemberExpression",
                "start": 244,
                "end": 249,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 247,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "a",
                  "optional": false
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
          "start": 213,
          "end": 220,
          "decorators": [],
          "name": "getBazA",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 221,
            "end": 229,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 229,
                  "decorators": [],
                  "name": "Baz",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
