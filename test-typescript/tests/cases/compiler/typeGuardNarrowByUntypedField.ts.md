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
        "end": 121,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 81,
          "end": 121,
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
            "end": 121,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 91,
              "end": 121,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 103,
                "end": 109,
                "name": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 108,
                  "end": 109,
                  "typeName": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
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
                "start": 112,
                "end": 119
              },
              "optional": null,
              "readonly": true,
              "constraint": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
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
      "start": 123,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 188,
            "name": "arrayLikeOrIterable",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 167,
                      "name": "ArrayLike",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 183,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
      "start": 190,
      "end": 292,
      "test": {
        "type": "CallExpression",
        "start": 194,
        "end": 239,
        "callee": {
          "type": "Identifier",
          "start": 194,
          "end": 208,
          "name": "hasOwnProperty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 209,
            "end": 228,
            "name": "arrayLikeOrIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 230,
            "end": 238,
            "value": "length",
            "raw": "'length'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 260,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 263,
                  "end": 289,
                  "object": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 282,
                    "name": "arrayLikeOrIterable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 289,
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
