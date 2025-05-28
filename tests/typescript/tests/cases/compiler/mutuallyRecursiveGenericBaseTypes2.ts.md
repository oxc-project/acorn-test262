__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 52,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 52,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 26,
                  "end": 35,
                  "typeName": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 30,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 30,
                    "end": 35,
                    "params": [
                      {
                        "type": "TSArrayType",
                        "start": 31,
                        "end": 34,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 31,
                          "end": 32,
                          "typeName": {
                            "type": "Identifier",
                            "start": 31,
                            "end": 32,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 52,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 38,
                    "end": 50,
                    "argument": {
                      "type": "Literal",
                      "start": 45,
                      "end": 49,
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
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 89,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 83,
            "end": 84,
            "typeName": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 89,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 121,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 100,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 103,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 110,
              "end": 118,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 111,
                  "end": 117
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
