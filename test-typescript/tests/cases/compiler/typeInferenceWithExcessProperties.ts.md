__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 340,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "Named",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 61,
      "end": 124,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 124,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 111,
            "end": 122,
            "argument": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 76,
        "decorators": [],
        "name": "parrot",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 100,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 100,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 104,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 103,
          "end": 104,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 92,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 92,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 92,
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 162,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 134,
            "end": 161,
            "properties": [
              {
                "type": "Property",
                "start": 140,
                "end": 158,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 144,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 158,
                  "raw": "\"TypeScript\"",
                  "value": "TypeScript"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 133,
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 213,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 165,
        "end": 212,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 172,
            "end": 211,
            "properties": [
              {
                "type": "Property",
                "start": 178,
                "end": 196,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 182,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 196,
                  "raw": "\"TypeScript\"",
                  "value": "TypeScript"
                }
              },
              {
                "type": "Property",
                "start": 202,
                "end": 208,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 205,
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 208,
                  "raw": "5",
                  "value": 5
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 165,
          "end": 171,
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 277,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 215,
        "end": 276,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 222,
            "end": 275,
            "properties": [
              {
                "type": "Property",
                "start": 228,
                "end": 246,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 232,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 234,
                  "end": 246,
                  "raw": "\"TypeScript\"",
                  "value": "TypeScript"
                }
              },
              {
                "type": "Property",
                "start": 252,
                "end": 272,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 255,
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 257,
                  "end": 272,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 269,
                    "end": 272,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 215,
          "end": 221,
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 339,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 279,
        "end": 338,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 286,
            "end": 337,
            "properties": [
              {
                "type": "Property",
                "start": 292,
                "end": 310,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 296,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 298,
                  "end": 310,
                  "raw": "\"TypeScript\"",
                  "value": "TypeScript"
                }
              },
              {
                "type": "Property",
                "start": 316,
                "end": 334,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 324,
                  "decorators": [],
                  "name": "sayHello",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 324,
                  "end": 334,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 327,
                    "end": 334,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 279,
          "end": 285,
          "decorators": [],
          "name": "parrot",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
