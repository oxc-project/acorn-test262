__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 264,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 17,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 117,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 36,
            "end": 56,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 42,
                "end": 55,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 46,
                  "end": 55,
                  "callee": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 53,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 94,
            "end": 115,
            "expression": {
              "type": "CallExpression",
              "start": 94,
              "end": 114,
              "callee": {
                "type": "MemberExpression",
                "start": 94,
                "end": 105,
                "object": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 101,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 106,
                  "end": 113,
                  "object": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 113,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 264,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 151,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 226,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 192,
              "name": "Field",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 203,
              "end": 225,
              "object": {
                "type": "TSAsExpression",
                "start": 204,
                "end": 220,
                "expression": {
                  "type": "ThisExpression",
                  "start": 204,
                  "end": 208
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 215,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 215,
                    "end": 220,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 216,
                        "end": 219
                      }
                    ]
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "start": 222,
                "end": 225,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 200,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 194,
                "end": 200
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 231,
            "end": 262,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 236,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 239,
              "end": 261,
              "object": {
                "type": "TSAsExpression",
                "start": 240,
                "end": 256,
                "expression": {
                  "type": "ThisExpression",
                  "start": 240,
                  "end": 244
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 248,
                  "end": 256,
                  "typeName": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 251,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 251,
                    "end": 256,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 252,
                        "end": 255
                      }
                    ]
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "start": 258,
                "end": 261,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 128,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 129,
            "end": 130,
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "T",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
