__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 37,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 26,
              "decorators": [],
              "name": "toString",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 30,
                "end": 34
              }
            },
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
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
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
      "type": "VariableDeclaration",
      "start": 49,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 62,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 62,
                  "decorators": [],
                  "name": "Object",
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
          "name": "o",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "i",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 86,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 85,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "o",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 128,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 116,
              "decorators": [],
              "name": "toString",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 125,
                "end": 128,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 118,
                "end": 124,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 120,
                  "end": 124
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 139,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
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
      "start": 141,
      "end": 147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 141,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 141,
          "end": 142,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 157,
        "end": 162,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "decorators": [],
          "name": "o",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 179,
            "end": 206,
            "properties": [
              {
                "type": "Property",
                "start": 185,
                "end": 204,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 193,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 195,
                  "end": 204,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 201,
                    "end": 204,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 213,
      "expression": {
        "type": "AssignmentExpression",
        "start": 207,
        "end": 212,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 229,
      "expression": {
        "type": "AssignmentExpression",
        "start": 223,
        "end": 228,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 223,
          "end": 224,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "decorators": [],
          "name": "o",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
