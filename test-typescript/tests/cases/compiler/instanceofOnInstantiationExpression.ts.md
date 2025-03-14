instanceofOnInstantiationExpression.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 36,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 17,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
      "type": "VariableDeclaration",
      "start": 41,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 72,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 99,
      "expression": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 98,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 83,
          "decorators": [],
          "name": "maybeBox",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 95,
          "end": 98,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 139,
      "expression": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 138,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "decorators": [],
          "name": "maybeBox",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 183,
      "expression": {
        "type": "BinaryExpression",
        "start": 149,
        "end": 182,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 157,
          "decorators": [],
          "name": "maybeBox",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 229,
      "expression": {
        "type": "BinaryExpression",
        "start": 193,
        "end": 228,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 193,
          "end": 201,
          "decorators": [],
          "name": "maybeBox",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 270,
      "expression": {
        "type": "BinaryExpression",
        "start": 240,
        "end": 269,
        "operator": "instanceof",
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
        "right": {
          "type": "Identifier",
          "start": 263,
          "end": 269,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 309,
      "expression": {
        "type": "BinaryExpression",
        "start": 277,
        "end": 308,
        "operator": "instanceof",
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
        "right": {
          "type": "Identifier",
          "start": 302,
          "end": 308,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 350,
      "expression": {
        "type": "BinaryExpression",
        "start": 316,
        "end": 349,
        "operator": "instanceof",
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
        "right": {
          "type": "Identifier",
          "start": 343,
          "end": 349,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
