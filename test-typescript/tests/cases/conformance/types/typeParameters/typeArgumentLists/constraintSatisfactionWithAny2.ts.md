__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 188,
  "end": 286,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 188,
      "end": 247,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 208,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 238,
          "end": 242,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 239,
            "end": 242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 241,
              "end": 242,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
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
        "start": 243,
        "end": 246,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 245,
          "end": 246,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "Z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 236,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 222,
              "end": 236,
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 230,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 232,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 236,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 222,
                "end": 225,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 223,
                    "end": 224,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
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
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
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
      "start": 248,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 258,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 258,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 258,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 255,
                "end": 258
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 267,
        "arguments": [
          {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 261,
          "end": 264,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 286,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 285,
        "arguments": [
          {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 272,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 272,
          "end": 282,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 273,
              "end": 276
            },
            {
              "type": "TSAnyKeyword",
              "start": 278,
              "end": 281
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
