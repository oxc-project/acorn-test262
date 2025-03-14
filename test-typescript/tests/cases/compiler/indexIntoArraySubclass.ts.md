indexIntoArraySubclass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 38,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 26,
          "end": 34,
          "expression": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "decorators": [],
            "name": "Array",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 34,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
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
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Foo2",
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
      "type": "VariableDeclaration",
      "start": 39,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 59,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 59,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 51,
                  "end": 59,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 69,
            "end": 74,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 69,
              "end": 71,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "r",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 90,
          "end": 91,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script"
}
```
