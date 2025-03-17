__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 27,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "name": "id",
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
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
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
      "type": "ClassDeclaration",
      "start": 29,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 69,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "name": "value",
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
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
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
      "start": 71,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 79,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 79,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "name": "A",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "B",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 103,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 95,
          "end": 103,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "value": null,
            "raw": "null"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 121,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 120,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 109,
          "end": 120,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "NewExpression",
            "start": 113,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 138,
      "expression": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 137,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 126,
          "end": 137,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "NewExpression",
            "start": 130,
            "end": 137,
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 162,
      "expression": {
        "type": "AssignmentExpression",
        "start": 140,
        "end": 161,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 140,
          "end": 144,
          "object": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 144,
            "name": "id",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 147,
          "end": 161,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 147,
            "end": 154,
            "object": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 149,
              "end": 154,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 157,
            "end": 161,
            "value": null,
            "raw": "null"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 195,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 183,
          "end": 194,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "NewExpression",
            "start": 187,
            "end": 194,
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 212,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 200,
          "end": 211,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "NewExpression",
            "start": 204,
            "end": 211,
            "callee": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
