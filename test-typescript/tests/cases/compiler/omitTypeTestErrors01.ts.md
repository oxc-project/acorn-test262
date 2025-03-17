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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Omit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Omit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "getBarC",
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
            "end": 172,
            "name": "bar",
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
                  "name": "Bar",
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
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "getBazB",
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
            "start": 221,
            "end": 229,
            "name": "baz",
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
                  "name": "Baz",
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
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
