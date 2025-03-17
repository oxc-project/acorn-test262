__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 465,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "FileSystem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 38,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "read",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 42,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "name": "fn",
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
          "start": 54,
          "end": 65,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 65,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
                "name": "WorkerFS",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 72,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 85,
        "name": "fn",
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
          "start": 86,
          "end": 99,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 89,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 99,
                "name": "FileSystem",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 106,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 102,
          "end": 106
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "name": "fn",
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
          "start": 120,
          "end": 142,
          "name": "s",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 133,
                    "name": "FileSystem",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 134,
                  "end": 142,
                  "typeName": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 142,
                    "name": "WorkerFS",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 147,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 215,
        "name": "WorkerFS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 257,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 255,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 246,
              "name": "read",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 227,
          "end": 237,
          "expression": {
            "type": "Identifier",
            "start": 227,
            "end": 237,
            "name": "FileSystem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 259,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 274,
        "name": "Alpha",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 275,
        "end": 289,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 277,
            "end": 287,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 290,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 304,
        "name": "Beta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 305,
        "end": 319,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 317,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 316,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 310,
                "end": 316
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 332,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 327,
                "end": 332,
                "typeName": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 332,
                  "name": "Alpha",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 345,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 345,
                  "name": "Beta",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 392,
      "end": 398,
      "expression": {
        "type": "AssignmentExpression",
        "start": 392,
        "end": 397,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 392,
          "end": 393,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 405,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 404,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 399,
          "end": 400,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 403,
          "end": 404,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 451,
      "end": 457,
      "expression": {
        "type": "AssignmentExpression",
        "start": 451,
        "end": 456,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 451,
          "end": 452,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 455,
          "end": 456,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 464,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 463,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 458,
          "end": 459,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 462,
          "end": 463,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
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
