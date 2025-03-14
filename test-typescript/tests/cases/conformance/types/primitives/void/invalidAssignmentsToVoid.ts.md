invalidAssignmentsToVoid.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 11,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 7,
                "end": 11
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 17,
          "end": 18,
          "raw": "1",
          "value": 1
        }
      }
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 24,
          "end": 28,
          "raw": "true",
          "value": true
        }
      }
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 36,
          "raw": "''",
          "value": ""
        }
      }
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 42,
          "end": 44,
          "properties": []
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 68,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 79,
            "decorators": [],
            "name": "c",
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
                  "name": "C",
                  "optional": false
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 124,
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
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "i",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 143,
      "end": 173,
      "body": {
        "type": "TSModuleBlock",
        "start": 152,
        "end": 173,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 154,
            "end": 171,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 161,
              "end": 171,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 165,
                  "end": 170,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 169,
                    "end": 170,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "decorators": [],
          "name": "M",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 216,
      "async": false,
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
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 192,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 196,
          "end": 200,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 192,
        "end": 195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 194,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
