mappedTypeInferenceCircularity.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "HTML",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 34,
        "end": 63,
        "constraint": {
          "type": "TSLiteralType",
          "start": 42,
          "end": 47,
          "literal": {
            "type": "Literal",
            "start": 42,
            "end": 47,
            "raw": "'div'",
            "value": "div"
          }
        },
        "key": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 50,
          "end": 61,
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
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "decorators": [],
            "name": "Block",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 103,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 75,
        "decorators": [],
        "name": "Block",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 81,
        "end": 102,
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
                  "optional": false
                }
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
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 81,
          "end": 84,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 82,
              "end": 83,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 134,
        "arguments": [
          {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "h",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 131,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "div",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
