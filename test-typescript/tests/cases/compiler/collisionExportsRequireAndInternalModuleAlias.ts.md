__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 46,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 44,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 44,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 44,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 47,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 61,
        "name": "exports",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 64,
        "end": 67,
        "left": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 69,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 83,
        "name": "require",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 86,
        "end": 89,
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 105,
      "expression": {
        "type": "NewExpression",
        "start": 91,
        "end": 104,
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 102,
          "name": "exports",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 120,
      "expression": {
        "type": "NewExpression",
        "start": 106,
        "end": 119,
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 117,
          "name": "require",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 122,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 132,
        "end": 225,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 138,
            "end": 159,
            "id": {
              "type": "Identifier",
              "start": 145,
              "end": 152,
              "name": "exports",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 155,
              "end": 158,
              "left": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 164,
            "end": 185,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 178,
              "name": "require",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 181,
              "end": 184,
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 190,
            "end": 204,
            "expression": {
              "type": "NewExpression",
              "start": 190,
              "end": 203,
              "callee": {
                "type": "Identifier",
                "start": 194,
                "end": 201,
                "name": "exports",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 209,
            "end": 223,
            "expression": {
              "type": "NewExpression",
              "start": 209,
              "end": 222,
              "callee": {
                "type": "Identifier",
                "start": 213,
                "end": 220,
                "name": "require",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 227,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 236,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 237,
        "end": 344,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 243,
            "end": 271,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 250,
              "end": 271,
              "id": {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "name": "exports",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 267,
                "end": 270,
                "left": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "name": "c",
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
            "type": "ExportNamedDeclaration",
            "start": 276,
            "end": 304,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 283,
              "end": 304,
              "id": {
                "type": "Identifier",
                "start": 290,
                "end": 297,
                "name": "require",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 300,
                "end": 303,
                "left": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "name": "c",
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
            "type": "ExpressionStatement",
            "start": 309,
            "end": 323,
            "expression": {
              "type": "NewExpression",
              "start": 309,
              "end": 322,
              "callee": {
                "type": "Identifier",
                "start": 313,
                "end": 320,
                "name": "exports",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 342,
            "expression": {
              "type": "NewExpression",
              "start": 328,
              "end": 341,
              "callee": {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "name": "require",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
