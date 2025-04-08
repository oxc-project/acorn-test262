__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 117,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 1,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "f",
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
          "start": 38,
          "end": 42,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 42,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 36,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "name": "Number",
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
        "start": 43,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 45,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
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
      "type": "TSDeclareFunction",
      "start": 48,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "name": "f",
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
          "start": 85,
          "end": 89,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 89,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 77,
              "end": 83,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "name": "String",
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
        "start": 90,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 93,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
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
      "type": "VariableDeclaration",
      "start": 95,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 103,
            "end": 116,
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 113,
                "end": 115,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 112,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
