__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 27,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 69,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 69,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 80,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 79,
            "decorators": [],
            "name": "a",
            "optional": false,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 90,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "B",
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "NewExpression",
            "start": 113,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "NewExpression",
            "start": 130,
            "end": 137,
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 144,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 149,
              "end": 154,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "NewExpression",
            "start": 187,
            "end": 194,
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "NewExpression",
            "start": 204,
            "end": 211,
            "callee": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
