__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 253,
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
      "end": 27,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 26,
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
          "end": 26,
          "raw": "''",
          "value": ""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 37,
      "expression": {
        "type": "AssignmentExpression",
        "start": 28,
        "end": 36,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 32,
          "end": 36,
          "raw": "true",
          "value": true
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 39,
      "end": 51,
      "body": {
        "type": "TSEnumBody",
        "start": 46,
        "end": 51,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 48,
            "end": 49,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
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
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 58,
      "expression": {
        "type": "AssignmentExpression",
        "start": 52,
        "end": 57,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 67,
      "expression": {
        "type": "AssignmentExpression",
        "start": 59,
        "end": 66,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 63,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 92,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 92,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 90,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
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
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
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
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
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
      "start": 103,
      "end": 109,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 111,
      "end": 138,
      "body": {
        "type": "TSInterfaceBody",
        "start": 123,
        "end": 138,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 136,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 128,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
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
      "start": 149,
      "end": 155,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 171,
      "expression": {
        "type": "AssignmentExpression",
        "start": 157,
        "end": 171,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 161,
          "end": 171,
          "properties": [
            {
              "type": "Property",
              "start": 163,
              "end": 169,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 164,
                "end": 169,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 167,
                  "end": 169,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 173,
      "end": 203,
      "body": {
        "type": "TSModuleBlock",
        "start": 182,
        "end": 203,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 184,
            "end": 201,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 191,
              "end": 201,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 195,
                  "end": 200,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 199,
                    "end": 200,
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
        "start": 180,
        "end": 181,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 210,
      "expression": {
        "type": "AssignmentExpression",
        "start": 204,
        "end": 209,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 204,
          "end": 205,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "M",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 246,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 232,
        "end": 246,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 238,
            "end": 244,
            "expression": {
              "type": "AssignmentExpression",
              "start": 238,
              "end": 243,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
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
        "start": 221,
        "end": 222,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 230,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
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
        "start": 222,
        "end": 225,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 224,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
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
      "start": 247,
      "end": 253,
      "expression": {
        "type": "AssignmentExpression",
        "start": 247,
        "end": 252,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 247,
          "end": 248,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 251,
          "end": 252,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
