staticMemberOfClassAndPublicMemberOfAnotherClassAssignment.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 335,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 27,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 25,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 61,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 59,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 59,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 59,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 102,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 102,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 100,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 100,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 100,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 115,
            "end": 122,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 136,
      "expression": {
        "type": "AssignmentExpression",
        "start": 124,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 128,
          "end": 135,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 168,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 167,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 200,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 199,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 194,
          "end": 195,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 210,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 213,
            "end": 220,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 251,
          "end": 252,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 285,
      "expression": {
        "type": "AssignmentExpression",
        "start": 279,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 279,
          "end": 280,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 292,
      "expression": {
        "type": "AssignmentExpression",
        "start": 286,
        "end": 291,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 302,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 301,
                "end": 302,
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 302,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 305,
            "end": 312,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 314,
      "end": 320,
      "expression": {
        "type": "AssignmentExpression",
        "start": 314,
        "end": 319,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 318,
          "end": 319,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 327,
      "expression": {
        "type": "AssignmentExpression",
        "start": 321,
        "end": 326,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 325,
          "end": 326,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 334,
      "expression": {
        "type": "AssignmentExpression",
        "start": 328,
        "end": 333,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 332,
          "end": 333,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
