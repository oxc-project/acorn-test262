declarationEmitExpressionInExtends2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 37,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 25,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 35,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 83,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 72,
            "end": 81,
            "argument": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 56,
        "decorators": [],
        "name": "getClass",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 64,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 64,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 63,
              "end": 64,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 59,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 58,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 139,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 98,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 107,
        "end": 118,
        "arguments": [
          {
            "type": "Literal",
            "start": 116,
            "end": 117,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "decorators": [],
          "name": "getClass",
          "optional": false
        },
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 119,
        "end": 135,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 120,
            "end": 126
          },
          {
            "type": "TSNumberKeyword",
            "start": 128,
            "end": 134
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
