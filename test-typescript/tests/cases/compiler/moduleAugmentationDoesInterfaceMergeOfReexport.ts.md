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
                "name": "x",
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
  "end": 23,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"./file\"",
        "value": "./file"
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
  "end": 181,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 32,
        "raw": "\"./reexport\"",
        "value": "./reexport"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 118,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 69,
            "end": 116,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 76,
              "end": 116,
              "body": {
                "type": "TSInterfaceBody",
                "start": 90,
                "end": 116,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 100,
                    "end": 110,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 104,
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 106,
                        "end": 109,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 109,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 89,
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
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 50,
        "end": 62,
        "raw": "\"./reexport\"",
        "value": "./reexport"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 143,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 143,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 137,
                  "end": 143,
                  "left": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 139,
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 143,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 150,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 146,
        "end": 149,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 151,
        "end": 157,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 153,
          "end": 157,
          "decorators": [],
          "name": "self",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 159,
        "end": 167,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 159,
          "end": 165,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 161,
            "end": 165,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 169,
        "end": 180,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 169,
          "end": 175,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 169,
            "end": 170,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 171,
            "end": 175,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 176,
          "end": 180,
          "decorators": [],
          "name": "self",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
