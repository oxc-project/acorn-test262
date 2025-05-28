__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 135,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "HTML",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 34,
        "end": 63,
        "key": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSLiteralType",
          "start": 42,
          "end": 47,
          "literal": {
            "type": "Literal",
            "start": 42,
            "end": 47,
            "value": "div",
            "raw": "'div'"
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 50,
          "end": 61,
          "typeName": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "decorators": [],
            "name": "Block",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 55,
            "end": 61,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 56,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 60,
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 75,
        "decorators": [],
        "name": "Block",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 81,
        "end": 102,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 81,
          "end": 84,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 82,
              "end": 83,
              "name": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 85,
            "end": 95,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 95,
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 97,
          "end": 102,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 100,
            "end": 102,
            "members": []
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 125,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 124,
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 134,
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 131,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "div",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
