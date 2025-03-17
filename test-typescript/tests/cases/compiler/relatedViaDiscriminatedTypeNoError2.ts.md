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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "AObjOrBObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 24,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": "A",
                      "raw": "\"A\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": "B",
                      "raw": "\"B\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 61,
        "name": "AOrBObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 70,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "value": "A",
                      "raw": "\"A\""
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
                      "value": "B",
                      "raw": "\"B\""
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 85,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 97,
        "name": "Generic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 118,
                "name": "AObjOrBObj",
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 122,
        "end": 123,
        "typeName": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 126,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 135,
        "end": 151,
        "typeName": {
          "type": "Identifier",
          "start": 135,
          "end": 142,
          "name": "Generic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "AOrBObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 179,
            "name": "x",
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
                  "name": "AObjOrBObj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 203,
            "name": "y",
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
                  "name": "AOrBObj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
