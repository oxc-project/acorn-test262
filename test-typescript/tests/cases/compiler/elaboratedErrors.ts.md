__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 464,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "read",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "FileSystem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 42,
      "end": 73,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 65,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 65,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
                "decorators": [],
                "name": "WorkerFS",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 72,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 107,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 85,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 86,
          "end": 99,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 89,
              "end": 99,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 99,
                "decorators": [],
                "name": "FileSystem",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 106,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 102,
          "end": 106
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 147,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 120,
          "end": 142,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 142,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 123,
              "end": 142,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 123,
                  "end": 133,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 133,
                    "decorators": [],
                    "name": "FileSystem",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 134,
                  "end": 142,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 142,
                    "decorators": [],
                    "name": "WorkerFS",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 257,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 257,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 255,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 246,
              "decorators": [],
              "name": "read",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 254,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 248,
                "end": 254
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 215,
        "decorators": [],
        "name": "WorkerFS",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 227,
          "end": 237,
          "expression": {
            "type": "Identifier",
            "start": 227,
            "end": 237,
            "decorators": [],
            "name": "FileSystem",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 259,
      "end": 289,
      "body": {
        "type": "TSInterfaceBody",
        "start": 275,
        "end": 289,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 277,
            "end": 287,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
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
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 274,
        "decorators": [],
        "name": "Alpha",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 290,
      "end": 319,
      "body": {
        "type": "TSInterfaceBody",
        "start": 305,
        "end": 319,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 317,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 316,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 310,
                "end": 316
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 304,
        "decorators": [],
        "name": "Beta",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 332,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 327,
                "end": 332,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 332,
                  "decorators": [],
                  "name": "Alpha",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 345,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 345,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 345,
                  "decorators": [],
                  "name": "Beta",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 392,
      "end": 398,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 392,
        "end": 397,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 392,
          "end": 393,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 405,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 404,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 399,
          "end": 400,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 403,
          "end": 404,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 451,
      "end": 457,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 451,
        "end": 456,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 451,
          "end": 452,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 455,
          "end": 456,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 464,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 463,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 458,
          "end": 459,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 462,
          "end": 463,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
