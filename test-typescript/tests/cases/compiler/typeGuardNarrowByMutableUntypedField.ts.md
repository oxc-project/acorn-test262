__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 113,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 31,
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 112,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 81,
          "end": 112,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "target",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 112,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 91,
              "end": 112,
              "constraint": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 103,
                "end": 110
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
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 53,
                "decorators": [],
                "name": "PropertyKey",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 179,
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 179,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 149,
                "end": 179,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 163,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 158,
                      "end": 163,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 159,
                          "end": 162
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 158,
                      "decorators": [],
                      "name": "ArrayLike",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 166,
                    "end": 179,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 174,
                      "end": 179,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 175,
                          "end": 178
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 174,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false
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
      "start": 181,
      "end": 283,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 232,
        "end": 283,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 238,
            "end": 281,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 242,
                "end": 280,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 251,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 254,
                  "end": 280,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 273,
                    "decorators": [],
                    "name": "arrayLikeOrIterable",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 280,
                    "decorators": [],
                    "name": "length",
                    "optional": false
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
        "start": 185,
        "end": 230,
        "arguments": [
          {
            "type": "Identifier",
            "start": 200,
            "end": 219,
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false
          },
          {
            "type": "Literal",
            "start": 221,
            "end": 229,
            "raw": "'length'",
            "value": "length"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 185,
          "end": 199,
          "decorators": [],
          "name": "hasOwnProperty",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
