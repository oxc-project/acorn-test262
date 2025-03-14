__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "IFoo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 71,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 60,
          "end": 67,
          "expression": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "IFoo",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 67,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 65,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "decorators": [],
        "name": "Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 50,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
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
      "type": "VariableDeclaration",
      "start": 73,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 90,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 90,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 82,
                "end": 90,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 93,
            "end": 95,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 110,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 113,
            "end": 118,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "arr",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "x",
              "optional": false
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
