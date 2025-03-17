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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 35,
        "name": "UserArgs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 38,
        "end": 60,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 58,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
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
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 74,
        "name": "Subset",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 83,
        "end": 141,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 86,
          "end": 100,
          "name": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "name": "key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 93,
            "end": 100,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 100,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 103,
          "end": 139,
          "checkType": {
            "type": "TSTypeReference",
            "start": 103,
            "end": 106,
            "typeName": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 125,
            "end": 131,
            "objectType": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 134,
            "end": 139
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 93,
          "end": 100,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 99,
            "end": 100,
            "typeName": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 86,
          "end": 89,
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 144,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 173,
        "name": "withBoundary",
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
          "start": 194,
          "end": 220,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 220,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 201,
              "end": 220,
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 207,
                "name": "Subset",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 207,
                "end": 220,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 211,
                    "end": 219,
                    "typeName": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 219,
                      "name": "UserArgs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 173,
        "end": 193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 192,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 192,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 192,
                "name": "UserArgs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 226,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 258,
        "name": "withoutBoundary",
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
          "start": 279,
          "end": 287,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 284,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 258,
        "end": 278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 259,
            "end": 277,
            "name": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 277,
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 277,
                "name": "UserArgs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 288,
        "end": 291,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 290,
          "end": 291,
          "typeName": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 314,
            "name": "boundaryResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 317,
            "end": 350,
            "callee": {
              "type": "Identifier",
              "start": 317,
              "end": 329,
              "name": "withBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 340,
                      "name": "select",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 342,
                      "end": 346,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 380,
            "name": "withoutBoundaryResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 383,
            "end": 419,
            "callee": {
              "type": "Identifier",
              "start": 383,
              "end": 398,
              "name": "withoutBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 409,
                      "name": "select",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 411,
                      "end": 415,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
