__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 26,
          "end": 34,
          "expression": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 38,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 59,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "name": "Foo2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 69,
            "end": 74,
            "object": {
              "type": "Identifier",
              "start": 69,
              "end": 71,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "r",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 90,
          "end": 91,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
