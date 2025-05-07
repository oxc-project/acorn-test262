__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 109,
  "end": 231,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 119,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 116,
                "end": 119
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
      "type": "VariableDeclaration",
      "start": 121,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 129,
            "end": 140,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 130,
              "end": 138,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 131,
                  "end": 137
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 168,
            "arguments": [
              {
                "type": "Literal",
                "start": 160,
                "end": 167,
                "raw": "'hello'",
                "value": "hello",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 151,
              "end": 159,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 152,
                  "end": 158
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 195,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 195,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 193,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 192,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 204,
            "end": 211,
            "arguments": [
              {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 205,
              "end": 208,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 206,
                  "end": 207,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 230,
            "arguments": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 222,
              "end": 227,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 223,
                  "end": 226
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
