__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 421,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 61,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 35,
        "decorators": [],
        "name": "UserArgs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 38,
        "end": 60,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 58,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 142,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 74,
        "decorators": [],
        "name": "Subset",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 83,
        "end": 141,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 93,
          "end": 100,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 99,
            "end": 100,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 86,
          "end": 89,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 103,
          "end": 139,
          "checkType": {
            "type": "TSTypeReference",
            "start": 103,
            "end": 106,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 115,
            "end": 122,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 134,
            "end": 139
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 125,
            "end": 131,
            "indexType": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 130,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 76,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 144,
      "end": 225,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 173,
        "decorators": [],
        "name": "withBoundary",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 194,
          "end": 220,
          "decorators": [],
          "name": "args",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 220,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 201,
              "end": 220,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 207,
                "end": 220,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 209,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 211,
                    "end": 219,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 219,
                      "decorators": [],
                      "name": "UserArgs",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 207,
                "decorators": [],
                "name": "Subset",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
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
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 173,
        "end": 193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 192,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 192,
                "decorators": [],
                "name": "UserArgs",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 226,
      "end": 292,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 258,
        "decorators": [],
        "name": "withoutBoundary",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 279,
          "end": 287,
          "decorators": [],
          "name": "args",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 284,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 287,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 288,
        "end": 291,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 290,
          "end": 291,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 258,
        "end": 278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 259,
            "end": 277,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 277,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 277,
                "decorators": [],
                "name": "UserArgs",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 314,
            "decorators": [],
            "name": "boundaryResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 317,
            "end": 350,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 330,
                "end": 349,
                "properties": [
                  {
                    "type": "Property",
                    "start": 334,
                    "end": 346,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 340,
                      "decorators": [],
                      "name": "select",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 342,
                      "end": 346,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 317,
              "end": 329,
              "decorators": [],
              "name": "withBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 380,
            "decorators": [],
            "name": "withoutBoundaryResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 383,
            "end": 419,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 399,
                "end": 418,
                "properties": [
                  {
                    "type": "Property",
                    "start": 403,
                    "end": 415,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 409,
                      "decorators": [],
                      "name": "select",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 411,
                      "end": 415,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 383,
              "end": 398,
              "decorators": [],
              "name": "withoutBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
