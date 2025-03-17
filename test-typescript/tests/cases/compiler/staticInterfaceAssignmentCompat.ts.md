__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 76,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "name": "create",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 76,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 51,
                    "end": 70,
                    "argument": {
                      "type": "NewExpression",
                      "start": 58,
                      "end": 69,
                      "callee": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 67,
                        "name": "Shape",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 35,
                  "end": 40,
                  "typeName": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 40,
                    "name": "Shape",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 102,
        "name": "ShapeFactory",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 127,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 109,
            "end": 125,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 115,
              "name": "create",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 124,
                  "name": "Shape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 148,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 148,
                  "name": "ShapeFactory",
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
          "init": {
            "type": "Identifier",
            "start": 151,
            "end": 156,
            "name": "Shape",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
