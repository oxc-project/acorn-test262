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
        "name": "HTML",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 34,
        "end": 63,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 37,
          "end": 47,
          "name": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
            "name": "Block",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "HTML",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
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
        "key": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "Block",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "func",
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
                  "name": "HTML",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "name": "h",
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
                  "name": "HTML",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "name": "div",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
