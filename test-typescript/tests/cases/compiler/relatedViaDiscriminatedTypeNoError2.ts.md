__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 48,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "AObjOrBObj",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 18,
        "end": 47,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 18,
            "end": 31,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 20,
                "end": 29,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 24,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 26,
                    "end": 29,
                    "literal": {
                      "type": "Literal",
                      "start": 26,
                      "end": 29,
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 34,
            "end": 47,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 36,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 42,
                    "end": 45,
                    "literal": {
                      "type": "Literal",
                      "start": 42,
                      "end": 45,
                      "raw": "\"B\"",
                      "value": "B"
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 84,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 61,
        "decorators": [],
        "name": "AOrBObj",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 64,
        "end": 83,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 81,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 70,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 81,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 72,
                "end": 81,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 72,
                    "end": 75,
                    "literal": {
                      "type": "Literal",
                      "start": 72,
                      "end": 75,
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 78,
                    "end": 81,
                    "literal": {
                      "type": "Literal",
                      "start": 78,
                      "end": 81,
                      "raw": "\"B\"",
                      "value": "B"
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 85,
      "end": 124,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 97,
        "decorators": [],
        "name": "Generic",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 122,
        "end": 123,
        "typeName": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 118,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 118,
                "decorators": [],
                "name": "AObjOrBObj",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 126,
      "end": 152,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 135,
        "end": 151,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 142,
          "end": 151,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 143,
              "end": 150,
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "decorators": [],
                "name": "AOrBObj",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 135,
          "end": 142,
          "decorators": [],
          "name": "Generic",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 179,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 179,
                  "decorators": [],
                  "name": "AObjOrBObj",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 203,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 203,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 203,
                  "decorators": [],
                  "name": "AOrBObj",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 205,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 205,
          "end": 206,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
