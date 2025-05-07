__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 37,
          "end": 41,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 41,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 40,
              "end": 41,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
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
        "start": 42,
        "end": 45,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 44,
          "end": 45,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 35,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 35,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 35,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 92,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 84,
          "end": 88,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 88,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 88,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
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
        "start": 89,
        "end": 92,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 91,
          "end": 92,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 83,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 82,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 76,
              "end": 82,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 76,
                "end": 82,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
      "type": "VariableDeclaration",
      "start": 94,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 115,
            "arguments": [
              {
                "type": "Literal",
                "start": 112,
                "end": 114,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 103,
              "end": 111,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 104,
                  "end": 110
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
