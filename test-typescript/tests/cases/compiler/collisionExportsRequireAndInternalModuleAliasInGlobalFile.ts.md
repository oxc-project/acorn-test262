__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 414,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 19,
        "name": "mOfGloalFile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 48,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 33,
              "end": 48,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 48,
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
    {
      "type": "TSImportEqualsDeclaration",
      "start": 51,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 65,
        "name": "exports",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 68,
        "end": 82,
        "left": {
          "type": "Identifier",
          "start": 68,
          "end": 80,
          "name": "mOfGloalFile",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
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
      "start": 84,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 98,
        "name": "require",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 101,
        "end": 115,
        "left": {
          "type": "Identifier",
          "start": 101,
          "end": 113,
          "name": "mOfGloalFile",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
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
      "start": 117,
      "end": 131,
      "expression": {
        "type": "NewExpression",
        "start": 117,
        "end": 130,
        "callee": {
          "type": "Identifier",
          "start": 121,
          "end": 128,
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
      "start": 132,
      "end": 146,
      "expression": {
        "type": "NewExpression",
        "start": 132,
        "end": 145,
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 143,
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
      "start": 148,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 157,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 158,
        "end": 273,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 164,
            "end": 196,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 178,
              "name": "exports",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 181,
              "end": 195,
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 193,
                "name": "mOfGloalFile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
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
            "start": 201,
            "end": 233,
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 215,
              "name": "require",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 218,
              "end": 232,
              "left": {
                "type": "Identifier",
                "start": 218,
                "end": 230,
                "name": "mOfGloalFile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
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
            "start": 238,
            "end": 252,
            "expression": {
              "type": "NewExpression",
              "start": 238,
              "end": 251,
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 249,
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
            "start": 257,
            "end": 271,
            "expression": {
              "type": "NewExpression",
              "start": 257,
              "end": 270,
              "callee": {
                "type": "Identifier",
                "start": 261,
                "end": 268,
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
      "start": 275,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 284,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 285,
        "end": 414,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 291,
            "end": 330,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 298,
              "end": 330,
              "id": {
                "type": "Identifier",
                "start": 305,
                "end": 312,
                "name": "exports",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 315,
                "end": 329,
                "left": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 327,
                  "name": "mOfGloalFile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
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
            "start": 335,
            "end": 374,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 342,
              "end": 374,
              "id": {
                "type": "Identifier",
                "start": 349,
                "end": 356,
                "name": "require",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 359,
                "end": 373,
                "left": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 371,
                  "name": "mOfGloalFile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
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
            "start": 379,
            "end": 393,
            "expression": {
              "type": "NewExpression",
              "start": 379,
              "end": 392,
              "callee": {
                "type": "Identifier",
                "start": 383,
                "end": 390,
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
            "start": 398,
            "end": 412,
            "expression": {
              "type": "NewExpression",
              "start": 398,
              "end": 411,
              "callee": {
                "type": "Identifier",
                "start": 402,
                "end": 409,
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
