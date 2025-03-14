invalidUndefinedAssignments.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "undefined",
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
      "type": "TSEnumDeclaration",
      "start": 26,
      "end": 38,
      "body": {
        "type": "TSEnumBody",
        "start": 33,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 36,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "E",
        "optional": false
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
          "decorators": [],
          "name": "E",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 79,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 79,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 77,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
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
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
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
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "f",
            "optional": false,
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
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 125,
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
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "decorators": [],
            "name": "g",
            "optional": false,
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
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "I",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 151,
      "end": 181,
      "body": {
        "type": "TSModuleBlock",
        "start": 160,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 179,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 169,
              "end": 179,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 173,
                  "end": 178,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 177,
                    "end": 178,
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
        "start": 158,
        "end": 159,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
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
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 213,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 210,
        "end": 213,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 204,
          "end": 208,
          "decorators": [],
          "name": "a",
          "optional": false,
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
        "start": 200,
        "end": 203,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 202,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
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
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 232,
          "end": 233,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
