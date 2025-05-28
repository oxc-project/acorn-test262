__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 253,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 61,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 60,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 98,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 72,
        "end": 98,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 97,
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "decorators": [],
            "name": "Omit",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSLiteralType",
                "start": 93,
                "end": 96,
                "literal": {
                  "type": "Literal",
                  "start": 93,
                  "end": 96,
                  "value": "c",
                  "raw": "\"c\""
                }
              }
            ]
          }
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
      "start": 99,
      "end": 138,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 106,
        "end": 138,
        "id": {
          "type": "Identifier",
          "start": 111,
          "end": 114,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 117,
          "end": 137,
          "typeName": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "Omit",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                      "value": "b",
                      "raw": "\"b\""
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
                      "value": "c",
                      "raw": "\"c\""
                    }
                  }
                ]
              }
            ]
          }
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
      "start": 140,
      "end": 195,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 147,
        "end": 195,
        "id": {
          "type": "Identifier",
          "start": 156,
          "end": 163,
          "decorators": [],
          "name": "getBarC",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                "object": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 190,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 197,
      "end": 252,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 204,
        "end": 252,
        "id": {
          "type": "Identifier",
          "start": 213,
          "end": 220,
          "decorators": [],
          "name": "getBazB",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                "object": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 247,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          ]
        },
        "expression": false
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
