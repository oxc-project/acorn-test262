__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
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
      "start": 26,
      "end": 32,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 31,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 30,
          "end": 31,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 40,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 39,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 37,
          "end": 39,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 50,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 45,
          "end": 49,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 63,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 62,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 58,
                "end": 62
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
      "start": 64,
      "end": 70,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 71,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 75,
          "end": 79,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 105,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 105,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
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
      "start": 106,
      "end": 115,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "C",
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
      "start": 116,
      "end": 122,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 121,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 123,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 127,
          "end": 128,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 131,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 143,
        "end": 158,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 145,
            "end": 156,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 156,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 150,
                "end": 156
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
      "start": 159,
      "end": 168,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 167,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 167,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "I",
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
      "start": 169,
      "end": 175,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 174,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 169,
          "end": 170,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 177,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 185,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 186,
        "end": 207,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 188,
            "end": 205,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 195,
              "end": 205,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 199,
                  "end": 204,
                  "id": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 203,
                    "end": 204,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 220,
          "end": 231,
          "properties": [
            {
              "type": "Property",
              "start": 222,
              "end": 229,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 223,
                "end": 229,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 226,
                  "end": 229,
                  "body": []
                },
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 243,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 243,
        "end": 246,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 244,
            "end": 245,
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 251,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 251,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 253,
        "end": 267,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 259,
            "end": 265,
            "expression": {
              "type": "AssignmentExpression",
              "start": 259,
              "end": 264,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 274,
      "expression": {
        "type": "AssignmentExpression",
        "start": 268,
        "end": 273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 272,
          "end": 273,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 276,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 282,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 283,
        "end": 288,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 285,
            "end": 286,
            "id": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 295,
      "expression": {
        "type": "AssignmentExpression",
        "start": 289,
        "end": 294,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 304,
      "expression": {
        "type": "AssignmentExpression",
        "start": 296,
        "end": 303,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 300,
          "end": 303,
          "object": {
            "type": "Identifier",
            "start": 300,
            "end": 301,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "A",
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
