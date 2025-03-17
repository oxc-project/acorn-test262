__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 472,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 28,
        "name": "StaticToString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 59,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 50,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 50,
              "end": 59,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 54,
                  "end": 58
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 106,
          "name": "staticToString",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 106,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 92,
              "end": 106,
              "typeName": {
                "type": "Identifier",
                "start": 92,
                "end": 106,
                "name": "StaticToString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 164,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 114,
            "end": 162,
            "argument": {
              "type": "BinaryExpression",
              "start": 121,
              "end": 161,
              "left": {
                "type": "Identifier",
                "start": 121,
                "end": 135,
                "name": "staticToString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 147,
                "end": 161,
                "name": "StaticToString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 166,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 194,
        "name": "StaticToNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 227,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 225,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 216,
              "name": "toNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 216,
              "end": 225,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 218,
                "end": 224,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 220,
                  "end": 224
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 228,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 240,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 271,
          "name": "staticToNumber",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 271,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 257,
              "end": 271,
              "typeName": {
                "type": "Identifier",
                "start": 257,
                "end": 271,
                "name": "StaticToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 273,
        "end": 329,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 279,
            "end": 327,
            "argument": {
              "type": "BinaryExpression",
              "start": 286,
              "end": 326,
              "left": {
                "type": "Identifier",
                "start": 286,
                "end": 300,
                "name": "staticToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 312,
                "end": 326,
                "name": "StaticToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 331,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 359,
        "name": "NormalToString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 360,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 383,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 374,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 374,
              "end": 383,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 376,
                "end": 382,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 378,
                  "end": 382
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 386,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 398,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 399,
          "end": 421,
          "name": "normal",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 407,
              "end": 421,
              "typeName": {
                "type": "Identifier",
                "start": 407,
                "end": 421,
                "name": "NormalToString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 471,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 429,
            "end": 469,
            "argument": {
              "type": "BinaryExpression",
              "start": 436,
              "end": 468,
              "left": {
                "type": "Identifier",
                "start": 436,
                "end": 442,
                "name": "normal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 454,
                "end": 468,
                "name": "NormalToString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
