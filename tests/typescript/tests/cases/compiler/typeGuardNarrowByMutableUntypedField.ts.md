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
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
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
                "optional": false,
                "typeAnnotation": null
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
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": null
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
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 103,
                "end": 110
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 180,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 179,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 158,
                      "decorators": [],
                      "name": "ArrayLike",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "hasOwnProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 200,
            "end": 219,
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 221,
            "end": 229,
            "value": "length",
            "raw": "'length'"
          }
        ],
        "optional": false
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 242,
                "end": 280,
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
                  "object": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 273,
                    "decorators": [],
                    "name": "arrayLikeOrIterable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 280,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
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
