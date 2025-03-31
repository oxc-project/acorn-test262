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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 54,
        "name": "IConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 111,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 61,
            "end": 71,
            "typeParameters": null,
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 84,
                "end": 90
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 109,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 105,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 113,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 132,
            "name": "I",
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
                  "name": "IConstructor",
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
      "type": "ClassDeclaration",
      "start": 135,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 192,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "name": "x",
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
              "start": 159,
              "end": 167,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 161,
                "end": 167
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 190,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "name": "y",
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
              "start": 181,
              "end": 189,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 183,
                "end": 189
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 210,
            "name": "AA",
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
                  "name": "A",
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
          "name": "AA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 217,
          "end": 218,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 238,
            "name": "AAA",
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
                  "name": "I",
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
          "name": "AAA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 246,
          "end": 247,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
