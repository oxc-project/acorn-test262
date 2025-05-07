__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 122,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 31,
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 65,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 63,
              "end": 65,
              "members": []
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 78,
          "decorators": [],
          "name": "property",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 77,
              "end": 78,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 121,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 81,
          "end": 121,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 121,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 91,
              "end": 121,
              "constraint": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": true,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 112,
                "end": 119
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 53,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 42,
              "end": 53,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 53,
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "P",
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
      "start": 123,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 188,
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 188,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 158,
                "end": 188,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 172,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 167,
                      "end": 172,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 168,
                          "end": 171
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 167,
                      "decorators": [],
                      "name": "ArrayLike",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 188,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 183,
                      "end": 188,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 184,
                          "end": 187
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 183,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 190,
      "end": 292,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 241,
        "end": 292,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 247,
            "end": 290,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 289,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 260,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 263,
                  "end": 289,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 282,
                    "decorators": [],
                    "name": "arrayLikeOrIterable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 289,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 194,
        "end": 239,
        "arguments": [
          {
            "type": "Identifier",
            "start": 209,
            "end": 228,
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 230,
            "end": 238,
            "raw": "'length'",
            "value": "length",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 194,
          "end": 208,
          "decorators": [],
          "name": "hasOwnProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
