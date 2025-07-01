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
        "name": "StaticToString",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 28
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 50
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 54,
                  "end": 58
                },
                "start": 52,
                "end": 58
              },
              "body": null,
              "expression": false,
              "start": 50,
              "end": 59
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 35,
            "end": 59
          }
        ],
        "start": 29,
        "end": 61
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 61
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticToString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 106
              },
              "typeArguments": null,
              "start": 92,
              "end": 106
            },
            "start": 90,
            "end": 106
          },
          "start": 76,
          "end": 106
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 135
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 161
              },
              "start": 121,
              "end": 161
            },
            "start": 114,
            "end": 162
          }
        ],
        "start": 108,
        "end": 164
      },
      "expression": false,
      "start": 63,
      "end": 164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticToNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 194
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 216
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 220,
                  "end": 224
                },
                "start": 218,
                "end": 224
              },
              "body": null,
              "expression": false,
              "start": 216,
              "end": 225
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 201,
            "end": 225
          }
        ],
        "start": 195,
        "end": 227
      },
      "abstract": false,
      "declare": true,
      "start": 166,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 240
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticToNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 271
              },
              "typeArguments": null,
              "start": 257,
              "end": 271
            },
            "start": 255,
            "end": 271
          },
          "start": 241,
          "end": 271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 300
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 326
              },
              "start": 286,
              "end": 326
            },
            "start": 279,
            "end": 327
          }
        ],
        "start": 273,
        "end": 329
      },
      "expression": false,
      "start": 228,
      "end": 329
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NormalToString",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 359
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 374
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 378,
                  "end": 382
                },
                "start": 376,
                "end": 382
              },
              "body": null,
              "expression": false,
              "start": 374,
              "end": 383
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 366,
            "end": 383
          }
        ],
        "start": 360,
        "end": 385
      },
      "abstract": false,
      "declare": true,
      "start": 331,
      "end": 385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "normal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NormalToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 421
              },
              "typeArguments": null,
              "start": 407,
              "end": 421
            },
            "start": 405,
            "end": 421
          },
          "start": 399,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "normal",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 442
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NormalToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 468
              },
              "start": 436,
              "end": 468
            },
            "start": 429,
            "end": 469
          }
        ],
        "start": 423,
        "end": 471
      },
      "expression": false,
      "start": 386,
      "end": 471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 471
}
```
