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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 31,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
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
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
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
      "type": "ClassDeclaration",
      "start": 33,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 46,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 84,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 65,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
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
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "name": "bar",
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
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
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
      "type": "ClassDeclaration",
      "start": 86,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 100,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "name": "bar",
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
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
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
      "start": 136,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 147,
            "name": "b",
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
                  "name": "Base",
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
      "type": "VariableDeclaration",
      "start": 149,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 164,
            "name": "d1",
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
                  "name": "Derived",
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
      "type": "VariableDeclaration",
      "start": 166,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 182,
            "name": "d2",
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
                  "name": "Derived2",
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 188,
          "end": 190,
          "name": "d1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 198,
          "name": "d2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 214,
            "name": "r",
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
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "d1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 222,
                "end": 224,
                "name": "d2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
