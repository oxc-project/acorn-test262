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
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 48,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 33,
              "end": 48,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 48,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 7,
        "end": 19,
        "decorators": [],
        "name": "mOfGloalFile",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 51,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 65,
        "decorators": [],
        "name": "exports",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 68,
        "end": 82,
        "left": {
          "type": "Identifier",
          "start": 68,
          "end": 80,
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 84,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 98,
        "decorators": [],
        "name": "require",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 101,
        "end": 115,
        "left": {
          "type": "Identifier",
          "start": 101,
          "end": 113,
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 131,
      "expression": {
        "type": "NewExpression",
        "start": 117,
        "end": 130,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 121,
          "end": 128,
          "decorators": [],
          "name": "exports",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 146,
      "expression": {
        "type": "NewExpression",
        "start": 132,
        "end": 145,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 143,
          "decorators": [],
          "name": "require",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 148,
      "end": 273,
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
              "decorators": [],
              "name": "exports",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 181,
              "end": 195,
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 193,
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 201,
            "end": 233,
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 215,
              "decorators": [],
              "name": "require",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 218,
              "end": 232,
              "left": {
                "type": "Identifier",
                "start": 218,
                "end": 230,
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 238,
            "end": 252,
            "expression": {
              "type": "NewExpression",
              "start": 238,
              "end": 251,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 249,
                "decorators": [],
                "name": "exports",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 271,
            "expression": {
              "type": "NewExpression",
              "start": 257,
              "end": 270,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 261,
                "end": 268,
                "decorators": [],
                "name": "require",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 157,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 275,
      "end": 414,
      "body": {
        "type": "TSModuleBlock",
        "start": 285,
        "end": 414,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 291,
            "end": 330,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 298,
              "end": 330,
              "id": {
                "type": "Identifier",
                "start": 305,
                "end": 312,
                "decorators": [],
                "name": "exports",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 315,
                "end": 329,
                "left": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 327,
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 335,
            "end": 374,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 342,
              "end": 374,
              "id": {
                "type": "Identifier",
                "start": 349,
                "end": 356,
                "decorators": [],
                "name": "require",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 359,
                "end": 373,
                "left": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 371,
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 379,
            "end": 393,
            "expression": {
              "type": "NewExpression",
              "start": 379,
              "end": 392,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 383,
                "end": 390,
                "decorators": [],
                "name": "exports",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 398,
            "end": 412,
            "expression": {
              "type": "NewExpression",
              "start": 398,
              "end": 411,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 402,
                "end": 409,
                "decorators": [],
                "name": "require",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 284,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
