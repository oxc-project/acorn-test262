__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 77,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 63,
        "end": 76,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 74,
          "end": 76,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 73,
          "decorators": [],
          "name": "Yoha",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "raw": "'./yoha'",
        "value": "./yoha",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 61,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 61,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 43,
          "end": 57,
          "argument": {
            "type": "Identifier",
            "start": 46,
            "end": 50,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 57,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 52,
              "end": 57,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 136,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
              "decorators": [],
              "name": "yoha",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 106,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 91,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 82,
                      "end": 86,
                      "expression": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 86,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "yoha",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 102,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 98,
                      "end": 102,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 102,
                        "decorators": [],
                        "name": "Yoha",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
  "end": 144,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "raw": "'./yoha'",
        "value": "./yoha",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 61,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 61,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 43,
          "end": 57,
          "argument": {
            "type": "Identifier",
            "start": 46,
            "end": 50,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 57,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 52,
              "end": 57,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 144,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 111,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
              "decorators": [],
              "name": "yoha",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 111,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 111,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 91,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 82,
                      "end": 86,
                      "expression": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 86,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "yoha",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 93,
                  "end": 107,
                  "argument": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 99,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 101,
                      "end": 107,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 101,
                        "end": 105,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 105,
                          "decorators": [],
                          "name": "Yoha",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
