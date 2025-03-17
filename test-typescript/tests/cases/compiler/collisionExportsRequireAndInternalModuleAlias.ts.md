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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 46,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 46,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 44,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 44,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 44,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "c",
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
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 47,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 61,
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 64,
        "end": 67,
        "left": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 69,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 83,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 86,
        "end": 89,
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 91,
        "end": 104,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 102,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 120,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 106,
        "end": 119,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 117,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 122,
      "end": 225,
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
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 155,
              "end": 158,
              "left": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 164,
            "end": 185,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 178,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 181,
              "end": 184,
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 190,
            "end": 204,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 190,
              "end": 203,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 194,
                "end": 201,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 209,
            "end": 223,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 209,
              "end": 222,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 213,
                "end": 220,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 227,
      "end": 344,
      "body": {
        "type": "TSModuleBlock",
        "start": 237,
        "end": 344,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 243,
            "end": 271,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 250,
              "end": 271,
              "id": {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 267,
                "end": 270,
                "left": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "decorators": [],
                  "name": "c",
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
            "type": "ExportNamedDeclaration",
            "start": 276,
            "end": 304,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 283,
              "end": 304,
              "id": {
                "type": "Identifier",
                "start": 290,
                "end": 297,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 300,
                "end": 303,
                "left": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "decorators": [],
                  "name": "c",
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
            "type": "ExpressionStatement",
            "start": 309,
            "end": 323,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 309,
              "end": 322,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 313,
                "end": 320,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 342,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 328,
              "end": 341,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 236,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
