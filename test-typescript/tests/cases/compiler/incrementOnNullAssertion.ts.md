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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Dictionary",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 72,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 30,
            "end": 70,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 54,
                "name": "myFavouriteType",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 48,
                    "end": 54
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 61,
                    "end": 70
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 83,
            "end": 88,
            "value": "bar",
            "raw": "'bar'"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 116,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 108,
                  "name": "Dictionary",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 119,
            "end": 121,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 122,
      "end": 228,
      "test": {
        "type": "BinaryExpression",
        "start": 126,
        "end": 146,
        "left": {
          "type": "MemberExpression",
          "start": 126,
          "end": 132,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 129,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 137,
          "end": 146,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
            "expression": {
              "type": "AssignmentExpression",
              "start": 154,
              "end": 164,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 154,
                "end": 160,
                "object": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 163,
                "end": 164,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "name": "nu",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 187,
                  "end": 193,
                  "object": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 190,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 212,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 209,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 217,
            "end": 226,
            "expression": {
              "type": "UpdateExpression",
              "start": 217,
              "end": 226,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "TSNonNullExpression",
                "start": 217,
                "end": 224,
                "expression": {
                  "type": "MemberExpression",
                  "start": 217,
                  "end": 223,
                  "object": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 220,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                }
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
