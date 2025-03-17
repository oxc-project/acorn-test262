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
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 119,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 119,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 116,
                "end": 119
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
      "type": "VariableDeclaration",
      "start": 121,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 129,
            "end": 140,
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 168,
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 160,
                "end": 167,
                "value": "hello",
                "raw": "'hello'"
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 195,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 193,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 204,
            "end": 211,
            "callee": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 230,
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
