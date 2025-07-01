__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 53
              },
              "typeArguments": null,
              "start": 42,
              "end": 53
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 53
          }
        ],
        "start": 31,
        "end": 54
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 63,
              "end": 65
            },
            "start": 61,
            "end": 65
          },
          "start": 55,
          "end": 65
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "property",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            "start": 75,
            "end": 78
          },
          "start": 67,
          "end": 78
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 87
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 103,
                "end": 110
              },
              "optional": false,
              "readonly": null,
              "start": 91,
              "end": 112
            },
            "start": 91,
            "end": 112
          },
          "start": 81,
          "end": 112
        },
        "start": 79,
        "end": 112
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArrayLike",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 158
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 159,
                          "end": 162
                        }
                      ],
                      "start": 158,
                      "end": 163
                    },
                    "start": 149,
                    "end": 163
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 174
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 175,
                          "end": 178
                        }
                      ],
                      "start": 174,
                      "end": 179
                    },
                    "start": 166,
                    "end": 179
                  }
                ],
                "start": 149,
                "end": 179
              },
              "start": 147,
              "end": 179
            },
            "start": 128,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 128,
          "end": 179
        }
      ],
      "declare": true,
      "start": 114,
      "end": 180
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasOwnProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 199
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 219
          },
          {
            "type": "Literal",
            "value": "length",
            "raw": "'length'",
            "start": 221,
            "end": 229
          }
        ],
        "optional": false,
        "start": 185,
        "end": 230
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    },
                    "start": 243,
                    "end": 251
                  },
                  "start": 242,
                  "end": 251
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arrayLikeOrIterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 273
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 280
                  },
                  "optional": false,
                  "computed": false,
                  "start": 254,
                  "end": 280
                },
                "definite": false,
                "start": 242,
                "end": 280
              }
            ],
            "declare": false,
            "start": 238,
            "end": 281
          }
        ],
        "start": 232,
        "end": 283
      },
      "alternate": null,
      "start": 181,
      "end": 283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 283
}
```
