__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 50,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 23,
                "end": 50,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 24,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 27,
                    "end": 28,
                    "literal": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 31,
                    "end": 33,
                    "literal": {
                      "type": "Literal",
                      "start": 31,
                      "end": 33,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 36,
                    "end": 45
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 48,
                    "end": 50,
                    "literal": {
                      "type": "Literal",
                      "start": 48,
                      "end": 50,
                      "value": "",
                      "raw": "''"
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
      "type": "VariableDeclaration",
      "start": 54,
      "end": 78,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 77,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 98,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 97,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 118,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 138,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 137,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 140,
        "end": 162,
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "start": 141,
          "end": 146,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 152,
          "end": 162,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 159,
            "end": 162,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 187,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 186,
        "operator": "||=",
        "left": {
          "type": "MemberExpression",
          "start": 165,
          "end": 170,
          "object": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 170,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 176,
          "end": 186,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 182,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 186,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 188,
        "end": 210,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 189,
          "end": 194,
          "object": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 191,
            "end": 194,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 200,
          "end": 210,
          "object": {
            "type": "Identifier",
            "start": 200,
            "end": 206,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
