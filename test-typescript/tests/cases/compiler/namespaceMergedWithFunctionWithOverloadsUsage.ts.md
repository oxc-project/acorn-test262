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
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 75,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 46,
              "name": "Whatever",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 57,
                  "end": 67,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 61,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 63,
                      "end": 66
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "name": "Foo",
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
          "start": 98,
          "end": 117,
          "name": "opts",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 117,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 117,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 105,
                "end": 117,
                "left": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 117,
                  "name": "Whatever",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 118,
        "end": 124,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "name": "Foo",
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
          "start": 147,
          "end": 159,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 159,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 159,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 161,
          "end": 180,
          "name": "opts",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 180,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 168,
                "end": 180,
                "left": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 180,
                  "name": "Whatever",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 187,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 183,
          "end": 187
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 190,
      "end": 203,
      "expression": {
        "type": "Identifier",
        "start": 199,
        "end": 202,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 28,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 27,
          "value": "./file",
          "raw": "\"./file\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 36,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 35,
        "callee": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 33,
            "end": 34,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
