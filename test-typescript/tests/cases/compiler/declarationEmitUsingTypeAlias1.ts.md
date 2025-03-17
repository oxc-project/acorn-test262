__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 25,
          "name": "Other",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 28,
          "end": 45,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 30,
              "end": 43,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 35,
                "name": "other",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 93,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 93,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 75,
          "name": "SomeType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 78,
          "end": 92,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 80,
              "end": 90,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 80,
                "end": 83,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 85,
                  "end": 90,
                  "typeName": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 90,
                    "name": "Other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
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
  "end": 100,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 48,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 48,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "name": "OtherType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "start": 24,
          "end": 47,
          "argument": {
            "type": "TSLiteralType",
            "start": 31,
            "end": 40,
            "literal": {
              "type": "Literal",
              "start": 31,
              "end": 40,
              "value": "./inner",
              "raw": "'./inner'"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "name": "Other",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
      "start": 49,
      "end": 99,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 56,
        "end": 99,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 69,
          "name": "SomeType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "start": 72,
          "end": 98,
          "argument": {
            "type": "TSLiteralType",
            "start": 79,
            "end": 88,
            "literal": {
              "type": "Literal",
              "start": 79,
              "end": 88,
              "value": "./inner",
              "raw": "'./inner'"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 90,
            "end": 98,
            "name": "SomeType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
  "end": 164,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "SomeType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "SomeType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 35,
        "value": "some-dep",
        "raw": "\"some-dep\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 98,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 45,
        "end": 98,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 57,
              "end": 97,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 73,
                  "name": "thing",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 65,
                      "end": 73,
                      "typeName": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 73,
                        "name": "SomeType",
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
                "start": 78,
                "end": 97,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 95,
                    "argument": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 94,
                      "name": "thing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 164,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 164,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 113,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 119,
              "end": 163,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 135,
                  "name": "thing",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 127,
                      "end": 135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 135,
                        "name": "SomeType",
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
                "start": 140,
                "end": 163,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 144,
                    "end": 161,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 151,
                      "end": 160,
                      "object": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 156,
                        "name": "thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "name": "arg",
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
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
