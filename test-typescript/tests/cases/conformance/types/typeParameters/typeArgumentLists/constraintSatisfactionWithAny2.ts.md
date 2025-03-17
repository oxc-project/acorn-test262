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
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 208,
        "name": "foo",
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
          "start": 238,
          "end": 242,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 239,
            "end": 242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 241,
              "end": 242,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "T",
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
        "start": 208,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "Z",
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
            "start": 212,
            "end": 236,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 222,
              "end": 236,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 222,
                "end": 225,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 223,
                    "end": 224,
                    "name": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 230,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "name": "U",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 232,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 236,
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "name": "Z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
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
        "start": 243,
        "end": 246,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 245,
          "end": 246,
          "typeName": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "Z",
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
      "start": 248,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 258,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 258,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 255,
                "end": 258
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 268,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 267,
        "callee": {
          "type": "Identifier",
          "start": 261,
          "end": 264,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 286,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 285,
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 272,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
