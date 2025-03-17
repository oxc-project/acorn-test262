__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 14,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 85,
      "body": {
        "type": "TSModuleBlock",
        "start": 62,
        "end": 85,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 68,
            "end": 83,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 60,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 60,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 7,
                    "end": 32,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 9,
                        "end": 19,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 9,
                          "end": 10,
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
                          "start": 10,
                          "end": 18,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 12,
                            "end": 18
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 20,
                        "end": 30,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 20,
                          "end": 21,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
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
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 35,
                    "end": 60,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 37,
                        "end": 47,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 38,
                          "end": 46,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 40,
                            "end": 46
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 48,
                        "end": 58,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 49,
                          "end": 57,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 51,
                            "end": 57
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSExportAssignment",
      "start": 62,
      "end": 72,
      "expression": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 114,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 42,
        "raw": "'./foo'",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 24,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 44,
        "end": 49,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 111,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 102,
        "end": 110,
        "raw": "'./foo2'",
        "value": "./foo2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 61,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 63,
          "end": 64,
          "imported": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 66,
          "end": 67,
          "imported": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 69,
          "end": 70,
          "imported": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 72,
          "end": 94,
          "imported": {
            "type": "Identifier",
            "start": 72,
            "end": 80,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 84,
            "end": 94,
            "decorators": [],
            "name": "foo2String",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
