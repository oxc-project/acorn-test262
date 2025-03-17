__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 17,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "name": "value",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 72,
            "name": "maybeBox",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 72,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 65,
                "end": 72
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "maybeBox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 95,
          "end": 98,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "maybeBox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "maybeBox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "maybeBox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "Object",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "Object",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "Object",
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
