__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 11,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 7,
                "end": 11
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
      "start": 13,
      "end": 19,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 18,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 17,
          "end": 18,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 29,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 28,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 24,
          "end": 28,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 37,
      "expression": {
        "type": "AssignmentExpression",
        "start": 30,
        "end": 36,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 36,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 44,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 44,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 42,
          "end": 44,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "name": "foo",
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
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
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
            "name": "c",
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
                  "name": "C",
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
      "start": 81,
      "end": 87,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 94,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 93,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 108,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
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
      "start": 125,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "I",
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
      "start": 135,
      "end": 141,
      "expression": {
        "type": "AssignmentExpression",
        "start": 135,
        "end": 140,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 143,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 152,
        "end": 173,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 154,
            "end": 171,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 161,
              "end": 171,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 165,
                  "end": 170,
                  "id": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 169,
                    "end": 170,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 174,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 174,
          "end": 175,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 192,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 196,
          "end": 200,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 197,
            "end": 200,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 199,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 200,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 216,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 208,
            "end": 214,
            "expression": {
              "type": "AssignmentExpression",
              "start": 208,
              "end": 213,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 192,
        "end": 195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 223,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 217,
          "end": 218,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "name": "f",
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
