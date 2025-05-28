__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 356,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 17,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 36,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 73,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 72,
            "decorators": [],
            "name": "maybeBox",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 72,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 65,
                "end": 72
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 99,
      "expression": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 98,
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 83,
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 95,
          "end": 98,
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 139,
      "expression": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 138,
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "start": 127,
          "end": 138,
          "expression": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 130,
            "end": 138,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 183,
      "expression": {
        "type": "BinaryExpression",
        "start": 149,
        "end": 182,
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 157,
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "start": 170,
          "end": 181,
          "expression": {
            "type": "Identifier",
            "start": 170,
            "end": 173,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 173,
            "end": 181,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 229,
      "expression": {
        "type": "BinaryExpression",
        "start": 193,
        "end": 228,
        "left": {
          "type": "Identifier",
          "start": 193,
          "end": 201,
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "start": 215,
          "end": 226,
          "expression": {
            "type": "Identifier",
            "start": 215,
            "end": 218,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 218,
            "end": 226,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 219,
                "end": 225
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 270,
      "expression": {
        "type": "BinaryExpression",
        "start": 240,
        "end": 269,
        "left": {
          "type": "TSInstantiationExpression",
          "start": 240,
          "end": 251,
          "expression": {
            "type": "Identifier",
            "start": 240,
            "end": 243,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 243,
            "end": 251,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 244,
                "end": 250
              }
            ]
          }
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 263,
          "end": 269,
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 309,
      "expression": {
        "type": "BinaryExpression",
        "start": 277,
        "end": 308,
        "left": {
          "type": "TSInstantiationExpression",
          "start": 278,
          "end": 289,
          "expression": {
            "type": "Identifier",
            "start": 278,
            "end": 281,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 281,
            "end": 289,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              }
            ]
          }
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 302,
          "end": 308,
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 350,
      "expression": {
        "type": "BinaryExpression",
        "start": 316,
        "end": 349,
        "left": {
          "type": "TSInstantiationExpression",
          "start": 318,
          "end": 329,
          "expression": {
            "type": "Identifier",
            "start": 318,
            "end": 321,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 321,
            "end": 329,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 322,
                "end": 328
              }
            ]
          }
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 343,
          "end": 349,
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
