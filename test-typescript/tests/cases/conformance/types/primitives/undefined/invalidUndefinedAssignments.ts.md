__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 7,
                "end": 23,
                "exprName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 23,
                  "name": "undefined",
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
      "type": "TSEnumDeclaration",
      "start": 26,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 35,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 33,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 45,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 44,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 54,
      "expression": {
        "type": "AssignmentExpression",
        "start": 46,
        "end": 53,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 46,
          "end": 49,
          "object": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 79,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
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
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
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
      "start": 80,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
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
      "start": 90,
      "end": 96,
      "expression": {
        "type": "AssignmentExpression",
        "start": 90,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 110,
        "end": 125,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 112,
            "end": 123,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
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
      "start": 126,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
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
      "start": 136,
      "end": 142,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 141,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 149,
      "expression": {
        "type": "AssignmentExpression",
        "start": 143,
        "end": 148,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 151,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 160,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 179,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 169,
              "end": 179,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 173,
                  "end": 178,
                  "id": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 177,
                    "end": 178,
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
      "start": 182,
      "end": 188,
      "expression": {
        "type": "AssignmentExpression",
        "start": 182,
        "end": 187,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "name": "i",
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
          "start": 204,
          "end": 208,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 205,
            "end": 208,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 207,
              "end": 208,
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
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
        "start": 210,
        "end": 213,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 200,
        "end": 203,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 202,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
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
      "start": 228,
      "end": 234,
      "expression": {
        "type": "AssignmentExpression",
        "start": 228,
        "end": 233,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 228,
          "end": 229,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 232,
          "end": 233,
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
