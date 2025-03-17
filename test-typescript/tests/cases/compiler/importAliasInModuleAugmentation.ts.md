__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 89,
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 89,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 37,
              "end": 50,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 43,
                  "end": 49,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 47,
                    "end": 49,
                    "raw": "34",
                    "value": 34
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
            "start": 55,
            "end": 87,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 62,
              "end": 87,
              "body": {
                "type": "TSInterfaceBody",
                "start": 74,
                "end": 87,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 76,
                    "end": 85,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 85,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 79,
                        "end": 85
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "y",
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 193,
      "body": {
        "type": "TSModuleBlock",
        "start": 106,
        "end": 193,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 134,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 119,
              "end": 134,
              "id": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 130,
                "end": 133,
                "left": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 166,
            "end": 191,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 177,
              "end": 190,
              "expression": {
                "type": "Literal",
                "start": 185,
                "end": 189,
                "raw": "\"fs\"",
                "value": "fs"
              }
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 105,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 210,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 210,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 204,
                "end": 210
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 224,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 227,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 229,
                "end": 234,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 232,
                  "end": 234,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 247,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 238,
        "end": 246,
        "argument": {
          "type": "MemberExpression",
          "start": 243,
          "end": 246,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
