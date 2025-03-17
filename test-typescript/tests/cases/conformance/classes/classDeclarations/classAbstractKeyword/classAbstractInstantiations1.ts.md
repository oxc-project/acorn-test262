__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 69,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 69,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 91,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 91,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 122,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 122,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 130,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 124,
        "end": 129,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 140,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 131,
        "end": 139,
        "arguments": [
          {
            "type": "Literal",
            "start": 137,
            "end": 138,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 172,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 166,
        "end": 171,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 179,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 173,
        "end": 178,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 190,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 190,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 192,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 201,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 200,
                "end": 201,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 203,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 212,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 212,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 212,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "ExpressionStatement",
      "start": 215,
      "end": 225,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 215,
        "end": 224,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 215,
          "end": 216,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 219,
          "end": 224,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 236,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 226,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 227,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 230,
          "end": 235,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 247,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 237,
        "end": 246,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 237,
          "end": 238,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 241,
          "end": 246,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
