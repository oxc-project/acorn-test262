__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 75,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 73,
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 57,
                  "end": 67,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 61,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 63,
                      "end": 66
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 46,
              "decorators": [],
              "name": "Whatever",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 125,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 98,
          "end": 117,
          "decorators": [],
          "name": "opts",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 117,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 117,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 105,
                "end": 117,
                "left": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 117,
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 118,
        "end": 124,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 188,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 147,
          "end": 159,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 159,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 159,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 161,
          "end": 180,
          "decorators": [],
          "name": "opts",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 180,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 168,
                "end": 180,
                "left": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 180,
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 187,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 183,
          "end": 187
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 190,
      "end": 203,
      "expression": {
        "type": "Identifier",
        "start": 199,
        "end": 202,
        "decorators": [],
        "name": "Foo",
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
  "end": 63,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 28,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 27,
          "raw": "\"./file\"",
          "value": "./file"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 35,
        "arguments": [
          {
            "type": "Literal",
            "start": 33,
            "end": 34,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
