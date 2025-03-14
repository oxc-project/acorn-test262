__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 31,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 31,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 29,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
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
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 84,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 65,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
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
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 82,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
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
        "start": 39,
        "end": 46,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 132,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
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
        "start": 92,
        "end": 100,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 147,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 147,
                  "decorators": [],
                  "name": "Base",
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
      "start": 149,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 164,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 164,
                  "decorators": [],
                  "name": "Derived",
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
      "start": 166,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 182,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 182,
                  "decorators": [],
                  "name": "Derived2",
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
      "start": 184,
      "end": 191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 190,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 188,
          "end": 190,
          "decorators": [],
          "name": "d1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 199,
      "expression": {
        "type": "AssignmentExpression",
        "start": 192,
        "end": 198,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 198,
          "decorators": [],
          "name": "d2",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 214,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 214,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 208,
                "end": 214,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 208,
                  "end": 212,
                  "typeName": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 212,
                    "decorators": [],
                    "name": "Base",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 217,
            "end": 225,
            "elements": [
              {
                "type": "Identifier",
                "start": 218,
                "end": 220,
                "decorators": [],
                "name": "d1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 222,
                "end": 224,
                "decorators": [],
                "name": "d2",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
