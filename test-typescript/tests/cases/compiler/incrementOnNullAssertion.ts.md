__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 72,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 30,
            "end": 70,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 54,
                "decorators": [],
                "name": "myFavouriteType",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 48,
                    "end": 54
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 70,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 57,
                "end": 70,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 58,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 61,
                    "end": 70
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "start": 73,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 83,
            "end": 88,
            "raw": "'bar'",
            "value": "bar"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 116,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 116,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 108,
                  "end": 116,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 108,
                  "decorators": [],
                  "name": "Dictionary",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 119,
            "end": 121,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 122,
      "end": 228,
      "alternate": {
        "type": "BlockStatement",
        "start": 172,
        "end": 228,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 178,
            "end": 193,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 182,
                "end": 193,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "decorators": [],
                  "name": "nu",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 187,
                  "end": 193,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 190,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 198,
            "end": 212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 202,
                "end": 212,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 212,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 209,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 217,
            "end": 226,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 217,
              "end": 226,
              "argument": {
                "type": "TSNonNullExpression",
                "start": 217,
                "end": 224,
                "expression": {
                  "type": "MemberExpression",
                  "start": 217,
                  "end": 223,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 220,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 148,
        "end": 166,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 164,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 154,
              "end": 164,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 154,
                "end": 160,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 163,
                "end": 164,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 126,
        "end": 146,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 126,
          "end": 132,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 129,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 137,
          "end": 146,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
