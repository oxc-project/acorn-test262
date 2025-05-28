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
        "end": 121,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 81,
          "end": 121,
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
            "end": 121,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 91,
              "end": 121,
              "key": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
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
                "start": 112,
                "end": 119
              },
              "optional": false,
              "readonly": true
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 189,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 188,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 167,
                      "decorators": [],
                      "name": "ArrayLike",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
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
          "decorators": [],
          "name": "hasOwnProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
            "value": "length",
            "raw": "'length'"
          }
        ],
        "optional": false
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 289,
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
                  "object": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 282,
                    "decorators": [],
                    "name": "arrayLikeOrIterable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 289,
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
