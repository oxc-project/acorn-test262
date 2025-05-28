__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 37,
            "decorators": [],
            "name": "__decorate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 37,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 63,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 51,
        "end": 63,
        "decorators": [
          {
            "type": "Decorator",
            "start": 39,
            "end": 43,
            "expression": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 59,
          "end": 63,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 84,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 75,
            "end": 83,
            "properties": [
              {
                "type": "Property",
                "start": 77,
                "end": 81,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 81,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 104,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 95,
            "end": 103,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 97,
                "end": 101,
                "argument": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
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
  "end": 452,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "__extends",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 34,
            "end": 45,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 45,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 59,
          "end": 65,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 61,
            "end": 65
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 179,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 74,
        "end": 179,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 101,
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 102,
            "end": 124,
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 124,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 114,
                "end": 124,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 122,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 122,
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 126,
            "end": 137,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 137,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 134,
                "end": 137
              }
            }
          },
          {
            "type": "Identifier",
            "start": 139,
            "end": 160,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 160,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 145,
                "end": 160,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 145,
                    "end": 151
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 154,
                    "end": 160
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 162,
            "end": 172,
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 172,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 169,
                "end": 172
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 173,
          "end": 178,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 175,
            "end": 178
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 180,
      "end": 263,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 187,
        "end": 263,
        "id": {
          "type": "Identifier",
          "start": 204,
          "end": 211,
          "decorators": [],
          "name": "__param",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 212,
            "end": 230,
            "decorators": [],
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 224,
                "end": 230
              }
            }
          },
          {
            "type": "Identifier",
            "start": 232,
            "end": 251,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 251,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 251,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 252,
          "end": 262,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 254,
            "end": 262,
            "typeName": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 264,
      "end": 347,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 271,
        "end": 347,
        "id": {
          "type": "Identifier",
          "start": 288,
          "end": 298,
          "decorators": [],
          "name": "__metadata",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 299,
            "end": 315,
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 315,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 312,
                "end": 315
              }
            }
          },
          {
            "type": "Identifier",
            "start": 317,
            "end": 335,
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 335,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 332,
                "end": 335
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 336,
          "end": 346,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 338,
            "end": 346,
            "typeName": {
              "type": "Identifier",
              "start": 338,
              "end": 346,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 348,
      "end": 452,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 355,
        "end": 452,
        "id": {
          "type": "Identifier",
          "start": 372,
          "end": 381,
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 382,
            "end": 394,
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 394,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 391,
                "end": 394
              }
            }
          },
          {
            "type": "Identifier",
            "start": 396,
            "end": 411,
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 411,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 408,
                "end": 411
              }
            }
          },
          {
            "type": "Identifier",
            "start": 413,
            "end": 424,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 416,
                "end": 424,
                "typeName": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 424,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 426,
            "end": 445,
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 445,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 445,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 445,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 446,
          "end": 451,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 448,
            "end": 451
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
