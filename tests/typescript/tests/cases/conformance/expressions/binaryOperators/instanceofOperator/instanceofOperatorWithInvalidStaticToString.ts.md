__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 28,
        "decorators": [],
        "name": "StaticToString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 50,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 50,
              "end": 59,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 54,
                  "end": 58
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 106,
          "decorators": [],
          "name": "staticToString",
          "optional": false,
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
                "decorators": [],
                "name": "StaticToString",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "staticToString",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 147,
                "end": 161,
                "decorators": [],
                "name": "StaticToString",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 166,
      "end": 227,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 194,
        "decorators": [],
        "name": "StaticToNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 227,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 225,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 216,
              "decorators": [],
              "name": "toNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 216,
              "end": 225,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 218,
                "end": 224,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 220,
                  "end": 224
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 228,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 240,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 271,
          "decorators": [],
          "name": "staticToNumber",
          "optional": false,
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
                "decorators": [],
                "name": "StaticToNumber",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "staticToNumber",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 312,
                "end": 326,
                "decorators": [],
                "name": "StaticToNumber",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 331,
      "end": 385,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 359,
        "decorators": [],
        "name": "NormalToString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 360,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 383,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 374,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 374,
              "end": 383,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 376,
                "end": 382,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 378,
                  "end": 382
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 386,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 398,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 399,
          "end": 421,
          "decorators": [],
          "name": "normal",
          "optional": false,
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
                "decorators": [],
                "name": "NormalToString",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "normal",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 454,
                "end": 468,
                "decorators": [],
                "name": "NormalToString",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
