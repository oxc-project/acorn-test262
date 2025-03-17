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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 89,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 50,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 37,
              "end": 50,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 43,
                  "end": 49,
                  "id": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 47,
                    "end": 49,
                    "value": 34,
                    "raw": "34"
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
            "start": 55,
            "end": 87,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 62,
              "end": 87,
              "id": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 74,
                "end": 87,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 76,
                    "end": 85,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 85,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 79,
                        "end": 85
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 105,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 106,
        "end": 193,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 134,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 119,
              "end": 134,
              "id": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 130,
                "end": 133,
                "left": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 166,
            "end": 191,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 177,
              "end": 190,
              "expression": {
                "type": "Literal",
                "start": 185,
                "end": 189,
                "value": "fs",
                "raw": "\"fs\""
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 210,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 210,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 204,
                "end": 210
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 224,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "name": "x",
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
          "init": {
            "type": "ObjectExpression",
            "start": 227,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 229,
                "end": 234,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 232,
                  "end": 234,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 247,
      "expression": {
        "type": "UnaryExpression",
        "start": 238,
        "end": 246,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 243,
          "end": 246,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
