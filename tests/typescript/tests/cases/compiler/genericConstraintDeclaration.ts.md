__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 83,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 23,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 81,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 81,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 42,
                "end": 56,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 43,
                    "end": 55,
                    "name": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "start": 53,
                      "end": 55,
                      "members": []
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 67,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 64,
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 81,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 68,
                    "end": 80,
                    "argument": {
                      "type": "Literal",
                      "start": 75,
                      "end": 79,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
