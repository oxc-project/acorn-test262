node_modules/some-dep/dist/inner.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 46,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 25,
          "decorators": [],
          "name": "Other",
          "optional": false
        },
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
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 35,
                "decorators": [],
                "name": "other",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                }
              }
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
      "start": 47,
      "end": 93,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 93,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 75,
          "decorators": [],
          "name": "SomeType",
          "optional": false
        },
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
              "key": {
                "type": "Identifier",
                "start": 80,
                "end": 83,
                "decorators": [],
                "name": "arg",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "decorators": [],
                    "name": "Other",
                    "optional": false
                  }
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
node_modules/some-dep/dist/index.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 48,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "OtherType",
          "optional": false
        },
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
              "raw": "'./inner'",
              "value": "./inner"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "Other",
            "optional": false
          },
          "typeArguments": null
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 99,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 56,
        "end": 99,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 69,
          "decorators": [],
          "name": "SomeType",
          "optional": false
        },
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
              "raw": "'./inner'",
              "value": "./inner"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 90,
            "end": 98,
            "decorators": [],
            "name": "SomeType",
            "optional": false
          },
          "typeArguments": null
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
src/index.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 35,
        "raw": "\"some-dep\"",
        "value": "some-dep"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "SomeType",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "SomeType",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 98,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 45,
        "end": 98,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 97,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 57,
              "end": 97,
              "async": false,
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
                      "decorators": [],
                      "name": "thing",
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 73,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
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
                        "decorators": [],
                        "name": "SomeType",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 164,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 164,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 113,
            "end": 163,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 119,
              "end": 163,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 156,
                        "decorators": [],
                        "name": "thing",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "decorators": [],
                        "name": "arg",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 135,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
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
                        "decorators": [],
                        "name": "SomeType",
                        "optional": false
                      }
                    }
                  }
                }
              ]
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
  "sourceType": "module"
}
```
