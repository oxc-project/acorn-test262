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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 46,
                  "end": 55,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 53,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 94,
            "end": 115,
            "expression": {
              "type": "CallExpression",
              "start": 94,
              "end": 114,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 106,
                  "end": 113,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 113,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 94,
                "end": 105,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 101,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 264,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 264,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 151,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
              "decorators": [],
              "name": "num",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 226,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 192,
              "decorators": [],
              "name": "Field",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "MemberExpression",
              "start": 203,
              "end": 225,
              "computed": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 215,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 222,
                "end": 225,
                "decorators": [],
                "name": "num",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 231,
            "end": 262,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 236,
              "decorators": [],
              "name": "Value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 239,
              "end": 261,
              "computed": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 251,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 258,
                "end": 261,
                "decorators": [],
                "name": "num",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 128,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 129,
            "end": 130,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
