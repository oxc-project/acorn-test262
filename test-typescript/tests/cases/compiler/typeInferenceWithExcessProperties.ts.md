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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "Named",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
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
      "type": "FunctionDeclaration",
      "start": 61,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 76,
        "name": "parrot",
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
          "start": 94,
          "end": 100,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 100,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "T",
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
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 92,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 92,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 92,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 104,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 103,
          "end": 104,
          "typeName": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 163,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 162,
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 133,
          "name": "parrot",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 144,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 158,
                  "value": "TypeScript",
                  "raw": "\"TypeScript\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 213,
      "expression": {
        "type": "CallExpression",
        "start": 165,
        "end": 212,
        "callee": {
          "type": "Identifier",
          "start": 165,
          "end": 171,
          "name": "parrot",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 182,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 196,
                  "value": "TypeScript",
                  "raw": "\"TypeScript\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 202,
                "end": 208,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 205,
                  "name": "age",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 208,
                  "value": 5,
                  "raw": "5"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 277,
      "expression": {
        "type": "CallExpression",
        "start": 215,
        "end": 276,
        "callee": {
          "type": "Identifier",
          "start": 215,
          "end": 221,
          "name": "parrot",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 232,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 234,
                  "end": 246,
                  "value": "TypeScript",
                  "raw": "\"TypeScript\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 252,
                "end": 272,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 255,
                  "name": "age",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 257,
                  "end": 272,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 269,
                    "end": 272,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 339,
      "expression": {
        "type": "CallExpression",
        "start": 279,
        "end": 338,
        "callee": {
          "type": "Identifier",
          "start": 279,
          "end": 285,
          "name": "parrot",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 296,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 298,
                  "end": 310,
                  "value": "TypeScript",
                  "raw": "\"TypeScript\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 316,
                "end": 334,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 324,
                  "name": "sayHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 324,
                  "end": 334,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 327,
                    "end": 334,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
