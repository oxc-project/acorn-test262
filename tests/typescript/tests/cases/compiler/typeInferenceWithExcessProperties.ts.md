__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 44,
            "end": 57
          }
        ],
        "start": 38,
        "end": 59
      },
      "declare": false,
      "start": 22,
      "end": 59
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parrot",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 77,
              "end": 78
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 92
              },
              "typeArguments": null,
              "start": 87,
              "end": 92
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 92
          }
        ],
        "start": 76,
        "end": 93
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "start": 99,
                "end": 100
              },
              "typeArguments": null,
              "start": 99,
              "end": 100
            },
            "start": 97,
            "end": 100
          },
          "start": 94,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "typeArguments": null,
          "start": 103,
          "end": 104
        },
        "start": 101,
        "end": 104
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
            },
            "start": 111,
            "end": 122
          }
        ],
        "start": 105,
        "end": 124
      },
      "expression": false,
      "start": 61,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 144
                },
                "value": {
                  "type": "Literal",
                  "value": "TypeScript",
                  "raw": "\"TypeScript\"",
                  "start": 146,
                  "end": 158
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 158
              }
            ],
            "start": 134,
            "end": 161
          }
        ],
        "optional": false,
        "start": 127,
        "end": 162
      },
      "directive": null,
      "start": 127,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 171
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 182
                },
                "value": {
                  "type": "Literal",
                  "value": "TypeScript",
                  "raw": "\"TypeScript\"",
                  "start": 184,
                  "end": 196
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 178,
                "end": 196
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 205
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 207,
                  "end": 208
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 202,
                "end": 208
              }
            ],
            "start": 172,
            "end": 211
          }
        ],
        "optional": false,
        "start": 165,
        "end": 212
      },
      "directive": null,
      "start": 165,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 221
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 232
                },
                "value": {
                  "type": "Literal",
                  "value": "TypeScript",
                  "raw": "\"TypeScript\"",
                  "start": 234,
                  "end": 246
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 228,
                "end": 246
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 255
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 269,
                    "end": 272
                  },
                  "expression": false,
                  "start": 257,
                  "end": 272
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 252,
                "end": 272
              }
            ],
            "start": 222,
            "end": 275
          }
        ],
        "optional": false,
        "start": 215,
        "end": 276
      },
      "directive": null,
      "start": 215,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 285
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 296
                },
                "value": {
                  "type": "Literal",
                  "value": "TypeScript",
                  "raw": "\"TypeScript\"",
                  "start": 298,
                  "end": 310
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 292,
                "end": 310
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sayHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 324
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 327,
                    "end": 334
                  },
                  "expression": false,
                  "start": 324,
                  "end": 334
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 316,
                "end": 334
              }
            ],
            "start": 286,
            "end": 337
          }
        ],
        "optional": false,
        "start": 279,
        "end": 338
      },
      "directive": null,
      "start": 279,
      "end": 339
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 339
}
```
