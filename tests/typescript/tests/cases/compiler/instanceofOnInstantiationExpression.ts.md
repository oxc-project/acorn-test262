__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 17,
        "end": 20
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "typeArguments": null,
                "start": 34,
                "end": 35
              },
              "start": 32,
              "end": 35
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 27,
            "end": 36
          }
        ],
        "start": 21,
        "end": 38
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeBox",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 65,
                "end": 72
              },
              "start": 63,
              "end": 72
            },
            "start": 55,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 72
        }
      ],
      "declare": true,
      "start": 41,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 83
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 98
        },
        "start": 75,
        "end": 98
      },
      "directive": null,
      "start": 75,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 115
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              }
            ],
            "start": 130,
            "end": 138
          },
          "start": 127,
          "end": 138
        },
        "start": 107,
        "end": 138
      },
      "directive": null,
      "start": 107,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 157
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 173
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
              }
            ],
            "start": 173,
            "end": 181
          },
          "start": 170,
          "end": 181
        },
        "start": 149,
        "end": 182
      },
      "directive": null,
      "start": 149,
      "end": 183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 201
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 218
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 219,
                "end": 225
              }
            ],
            "start": 218,
            "end": 226
          },
          "start": 215,
          "end": 226
        },
        "start": 193,
        "end": 228
      },
      "directive": null,
      "start": 193,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 243
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 244,
                "end": 250
              }
            ],
            "start": 243,
            "end": 251
          },
          "start": 240,
          "end": 251
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 269
        },
        "start": 240,
        "end": 269
      },
      "directive": null,
      "start": 240,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 281
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              }
            ],
            "start": 281,
            "end": 289
          },
          "start": 278,
          "end": 289
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 308
        },
        "start": 277,
        "end": 308
      },
      "directive": null,
      "start": 277,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 321
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 322,
                "end": 328
              }
            ],
            "start": 321,
            "end": 329
          },
          "start": 318,
          "end": 329
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 349
        },
        "start": 316,
        "end": 349
      },
      "directive": null,
      "start": 316,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 356
}
```
