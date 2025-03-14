__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            }
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
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 111,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 111,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 61,
            "end": 71,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 84,
                "end": 90
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 109,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 105,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 54,
        "decorators": [],
        "name": "IConstructor",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 132,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 132,
                  "decorators": [],
                  "name": "IConstructor",
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
      "type": "ClassDeclaration",
      "start": 135,
      "end": 192,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 192,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 168,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 167,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 161,
                "end": 167
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 190,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 189,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 183,
                "end": 189
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
        "start": 150,
        "end": 151,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 210,
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 202,
                "end": 210,
                "exprName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "A",
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
      "start": 212,
      "end": 219,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 218,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 214,
          "decorators": [],
          "name": "AA",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 217,
          "end": 218,
          "decorators": [],
          "name": "I",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 238,
            "decorators": [],
            "name": "AAA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 238,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 230,
                "end": 238,
                "exprName": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
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
      "start": 240,
      "end": 248,
      "expression": {
        "type": "AssignmentExpression",
        "start": 240,
        "end": 247,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 240,
          "end": 243,
          "decorators": [],
          "name": "AAA",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 246,
          "end": 247,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
