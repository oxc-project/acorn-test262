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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 31,
        "name": "hasOwnProperty",
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
          "start": 55,
          "end": 65,
          "name": "target",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 78,
          "name": "property",
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
                "name": "P",
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 53,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 42,
              "end": 53,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 53,
                "name": "PropertyKey",
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
        "start": 79,
        "end": 112,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 81,
          "end": 112,
          "parameterName": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "name": "target",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 112,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 91,
              "end": 112,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 94,
                "end": 100,
                "name": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 99,
                  "end": 100,
                  "typeName": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "name": "P",
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
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 103,
                "end": 110
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 179,
            "name": "arrayLikeOrIterable",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 158,
                      "name": "ArrayLike",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 166,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 174,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 181,
      "end": 283,
      "test": {
        "type": "CallExpression",
        "start": 185,
        "end": 230,
        "callee": {
          "type": "Identifier",
          "start": 185,
          "end": 199,
          "name": "hasOwnProperty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 200,
            "end": 219,
            "name": "arrayLikeOrIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 221,
            "end": 229,
            "value": "length",
            "raw": "'length'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 251,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 254,
                  "end": 280,
                  "object": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 273,
                    "name": "arrayLikeOrIterable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 280,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
