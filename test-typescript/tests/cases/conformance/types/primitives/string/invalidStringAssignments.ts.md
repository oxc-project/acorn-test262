invalidStringAssignments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 347,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "''",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 27,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 27,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 20,
                "end": 27
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 63,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 63,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 59,
                "end": 63
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 92,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 76,
                "end": 92,
                "exprName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 92,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 123,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 121,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
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
              "start": 112,
              "end": 120,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 114,
                "end": 120
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
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 132,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 139,
      "end": 167,
      "body": {
        "type": "TSInterfaceBody",
        "start": 151,
        "end": 167,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 165,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 176,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 176,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 205,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 190,
                "end": 205,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 192,
                    "end": 203,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 195,
                      "decorators": [],
                      "name": "baz",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 208,
            "end": 209,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 232,
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 219,
                "end": 232,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 221,
                    "end": 230,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 221,
                      "end": 222,
                      "raw": "0",
                      "value": 0
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 224,
                        "end": 230
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 235,
            "end": 236,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 239,
      "end": 269,
      "body": {
        "type": "TSModuleBlock",
        "start": 248,
        "end": 269,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 250,
            "end": 267,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 257,
              "end": 267,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 261,
                  "end": 266,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 265,
                    "end": 266,
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
        "start": 246,
        "end": 247,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 276,
      "expression": {
        "type": "AssignmentExpression",
        "start": 270,
        "end": 275,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 270,
          "end": 271,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 274,
          "end": 275,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 312,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 298,
        "end": 312,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 304,
            "end": 310,
            "expression": {
              "type": "AssignmentExpression",
              "start": 304,
              "end": 309,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "x",
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
        "start": 287,
        "end": 288,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 292,
          "end": 296,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 293,
            "end": 296,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 295,
              "end": 296,
              "typeName": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
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
        "start": 288,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 289,
            "end": 290,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
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
      "start": 313,
      "end": 319,
      "expression": {
        "type": "AssignmentExpression",
        "start": 313,
        "end": 318,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 313,
          "end": 314,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 317,
          "end": 318,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 321,
      "end": 333,
      "body": {
        "type": "TSEnumBody",
        "start": 328,
        "end": 333,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 330,
            "end": 331,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
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
        "start": 326,
        "end": 327,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 342,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
